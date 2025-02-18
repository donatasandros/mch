"use server";

import { db } from "@vercel/postgres";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";
import { loginSchema, SessionPayload, User } from "@/definitions";

const secretKey = new TextEncoder().encode(process.env.AUTH_SECRET);

// const cookie = {
//   name: "session",
//   options: {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     path: "/",
//   },
//   duration: 24 * 60 * 60 * 1000,
// };

async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1day")
    .sign(secretKey);
}

async function decrypt(session: string | undefined = ""): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(session, secretKey, {
      algorithms: ["HS256"],
    });
    return payload as SessionPayload;
  } catch {
    return null;
  }
}

async function createSession(userId: string) {
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, expiresAt: expires });

  (await cookies()).set("session", session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires,
  });
  redirect("/admin/valdymas");
}

async function verifySession() {
  const existingCookie = (await cookies()).get("session")?.value;
  const session = await decrypt(existingCookie);

  if (!session?.userId) {
    redirect("/admin/prisijungimas");
  }

  return {
    userId: session.userId,
  };
}

async function signIn(values: z.infer<typeof loginSchema>) {
  const { success } = loginSchema.safeParse(values);

  if (!success) {
    return { error: "Klaidingai įvesti duomenys." };
  }

  const {
    rows: [user],
  } = await db.query<User>("SELECT * FROM users WHERE email = $1", [values.email]);

  if (!user) {
    return { error: "Klaidingas el. paštas arba slaptažodis." };
  }

  const isPasswordValid = await bcrypt.compare(values.password, user.password);

  if (!isPasswordValid) {
    return { error: "Klaidingas el. paštas arba slaptažodis." };
  }

  await createSession(user.id);
}

const getUser = cache(async () => {
  const session = await verifySession();

  const {
    rows: [user],
  } = await db.query<Omit<User, "password">>(
    "SELECT id, email, created_at FROM users WHERE id = $1",
    [session.userId]
  );

  return user;
});

export { signIn, getUser, decrypt, verifySession };
