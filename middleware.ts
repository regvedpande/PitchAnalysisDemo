import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if user is trying to access protected (app) routes
  if (pathname.startsWith("/dashboard") || 
      pathname.startsWith("/sales-pitches") || 
      pathname.startsWith("/settings")) {
    
    // Check for auth token in cookies or headers
    const hasAuth = request.cookies.has("perfect-pitch-auth");
    
    // If not authenticated, redirect to home
    if (!hasAuth) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
