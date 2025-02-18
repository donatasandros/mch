import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/actions/auth";

export async function middleware(request: NextRequest) {
  const protectedRoutes = ["/admin/valdymas"];
  const currentPath = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(currentPath);
  const isAuthRoute = currentPath === "/admin/prisijungimas";

  if (isAuthRoute) {
    const cookie = (await cookies()).get("session")?.value;
    const session = await decrypt(cookie);

    if (session?.userId) {
      return NextResponse.redirect(new URL("/admin/valdymas", request.nextUrl));
    }
  }

  if (isProtectedRoute) {
    const cookie = (await cookies()).get("session")?.value;
    const session = await decrypt(cookie);

    if (!session?.userId) {
      return NextResponse.redirect(new URL("/admin/prisijungimas", request.nextUrl));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image).*)"],
};
