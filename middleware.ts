import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export { default } from "next-auth/middleware";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const url = request.nextUrl;
  const pathname = url.pathname;

  const isAuthPage =
    pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up");
  const isDashboardPage = pathname.startsWith("/editor");

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/editor", request.url));
  }

  if (!token && isDashboardPage) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/sign-in", "/sign-up", "/editor"],
};
