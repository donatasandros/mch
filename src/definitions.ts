import { type JWTPayload } from "jose";
import { z } from "zod";

export interface Image {
  id: string;
  url: string;
  created_at: string;
}

export const loginSchema = z.object({
  email: z
    .string()
    .email({
      message: "Klaidingai įvestas el. paštas.",
    })
    .min(1, "Prašome įvesti savo el. paštą."),
  password: z.string().min(1, "Prašome įvesti savo slaptažodį."),
});

export interface User {
  id: string;
  email: string;
  password: string;
  created_at: Date;
}

export interface SessionPayload extends JWTPayload {
  userId: string;
  expiresAt: Date;
}
