import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import env from '@/lib/env'

const performRedirectTo = (request: NextRequest, path: string) => {
  const url = request.nextUrl.clone();
  url.pathname = path;
  return NextResponse.redirect(url);
}

export function middleware(request: NextRequest) {
  const launchModeEnabled = env.launchModeEnabled

  const { pathname } = request.nextUrl;

  if (launchModeEnabled && pathname === '/') {
    return performRedirectTo(request, '/lanzamiento')
  }
  
  if (!launchModeEnabled && pathname === '/lanzamiento') {
    return performRedirectTo(request, '/')
  } 

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/lanzamiento'],
};