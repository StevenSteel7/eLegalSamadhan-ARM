
// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth";

export async function middleware(request: NextRequest) {
  const session = await auth();
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin/judgements");
  
  if (isAdminRoute && (!session || session.user.role !== "admin")) {
    return NextResponse.redirect(new URL("/admin-login", request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/judgements/:path*"]
};