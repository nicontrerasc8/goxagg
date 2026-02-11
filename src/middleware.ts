import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')
  const forwardedProto = request.headers.get('x-forwarded-proto')
  const isHttps = forwardedProto?.split(',')[0] === 'https' || request.nextUrl.protocol === 'https'

  if (process.env.NODE_ENV === 'production' && !isHttps && host) {
    const url = request.nextUrl.clone()
    url.protocol = 'https'
    url.hostname = host
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
