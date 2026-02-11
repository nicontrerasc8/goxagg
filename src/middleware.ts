import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')
  const forwardedProto = request.headers.get('x-forwarded-proto')
  const isHttps =
    forwardedProto?.split(',')[0] === 'https' || request.nextUrl.protocol === 'https'

  if (process.env.NODE_ENV === 'production' && host) {
    const hostname = request.nextUrl.hostname.toLowerCase()
    const url = request.nextUrl.clone()

    if (hostname === 'goxa.pe' && !isHttps) {
      url.protocol = 'https'
      url.hostname = 'goxaa.vercel.app'
      url.port = ''
      return NextResponse.redirect(url)
    }

    if (!isHttps) {
      url.protocol = 'https'
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
