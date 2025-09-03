import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import env from '@/lib/env'

const performRedirectTo = (request: NextRequest, path: string) => {
  const url = request.nextUrl.clone();
  url.pathname = path;
  return NextResponse.redirect(url);
}

export function middleware(request: NextRequest) {
  // Lee la variable de entorno
  const launchModeEnabled = env.launchModeEnabled

  // Obtiene la ruta que el usuario está visitando
  const { pathname } = request.nextUrl;

  // Si el modo lanzamiento está activado y el usuario está en la raíz...
  if (launchModeEnabled && pathname === '/') {
    return performRedirectTo(request, '/lanzamiento')
  }
  
  if (!launchModeEnabled && pathname === '/lanzamiento') {
    return performRedirectTo(request, '/')
  } 

  // Si no, no hacemos nada y dejamos que la petición continúe
  return NextResponse.next();
}

// Configuración para que el middleware solo se ejecute en la ruta raíz
export const config = {
  matcher: ['/', '/lanzamiento'],
};