import type { Metadata } from 'next';
import { Oswald, Inter } from 'next/font/google';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import {ReactNode} from "react";

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

export default function LandingLayout({
                                        children,
                                      }: {
  children: ReactNode;
}) {
  return (
    <div className={`${oswald.variable} ${inter.variable} font-inter`}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}