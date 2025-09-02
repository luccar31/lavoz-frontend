import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Lee la variable de entorno
  const launchModeEnabled = process.env.LAUNCH_MODE_ENABLED === 'true';

  // Obtiene la ruta que el usuario está visitando
  const { pathname } = request.nextUrl;

  // Si el modo lanzamiento está activado y el usuario está en la raíz...
  if (launchModeEnabled && pathname === '/') {
    // ...lo redirigimos a /lanzamiento
    const url = request.nextUrl.clone();
    url.pathname = '/lanzamiento';
    return NextResponse.redirect(url);
  }

  // Si no, no hacemos nada y dejamos que la petición continúe
  return NextResponse.next();
}

// Configuración para que el middleware solo se ejecute en la ruta raíz
export const config = {
  matcher: '/',
};