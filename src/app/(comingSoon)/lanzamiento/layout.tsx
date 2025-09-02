import HeaderComingSoon from '@/components/coming-soon/HeaderComingSoon';
import {Inter, Oswald} from "next/font/google";
import {Metadata} from "next";

// Configuración de las fuentes
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-oswald',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'LA VOZ - Curso de Técnica Vocal',
  description: 'Redescubrí tu sonido interior.',
};

export default function ComingSoonLayout({
                                           children,
                                         }: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${oswald.variable} ${inter.variable} font-inter`}>
      <main>{children}</main>
    </div>
  );
}