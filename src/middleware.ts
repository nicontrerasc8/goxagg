import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")
  const forwardedProto = request.headers.get("x-forwarded-proto")
  const isHttps = forwardedProto?.split(",")[0] === "https" || request.nextUrl.protocol === "https"

  if (process.env.NODE_ENV === "production" && !isHttps && host) {
    const url = request.nextUrl.clone()
    url.protocol = "https"
    url.hostname = host
    return NextResponse.redirect(url)
  }

  const isAuthenticated = request.cookies.has("auth-token") // Asumiendo que usas una cookie llamada 'auth-token'
  if (request.nextUrl.pathname.startsWith("/admin") && !isAuthenticated) {
    return NextResponse.redirect(new URL("/signin", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/:path*",
}
