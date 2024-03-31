import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const checkingCookie = request.cookies.get("token") || "";
  const url = request.nextUrl.pathname;
  if ((url.includes("/login") || url.includes("/register")) && checkingCookie) {
    return NextResponse.rewrite(new URL("/", request.url));
  } else if (url.includes("/profile") && !checkingCookie) {
    return NextResponse.rewrite(new URL("/", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
