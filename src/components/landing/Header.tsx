"use client";

import {useState} from 'react';
import Link from 'next/link';
import {Menu, X} from 'lucide-react';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';
import env from '@/lib/env'

const navLinks = [
  {name: 'El Curso', href: '#curso'},
  {name: 'Detalles', href: '#detalles'},
  {name: 'Inscripción', href: '#inscripcion'},
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="py-4 fixed top-0 left-0 w-full z-50 bg-landing-background/80 backdrop-blur-sm border-b border-landing-surface/50">
      <Container className="flex justify-between items-center">
        <Link href="/" className="font-oswald font-bold text-h3 uppercase text-landing-text-primary">
          LA VOZ
        </Link>

        <nav className="hidden lg:flex items-center gap-6 py-landing">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-oswald font-medium text-button uppercase text-landing-text-primary transition-colors hover:text-brand-red"
            >
              {link.name}
            </Link>
          ))}
          {env.appReady ? <Button href={env.appUrl}>Ir a la app</Button> : null}
        </nav>

        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
            aria-expanded={isMenuOpen}
            className="text-landing-text-primary"
          >
            {isMenuOpen ? <X size={28}/> : <Menu size={28}/>}
          </button>
        </div>
      </Container>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-landing-surface shadow-lg">
          <nav className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-oswald font-medium text-h3 uppercase transition-colors text-landing-text-primary hover:text-brand-red"
              >
                {link.name}
              </Link>
            ))}
            <Button href={env.ctaRedirectUrl} className="mt-4">Inscribite</Button>
          </nav>
        </div>
      )}
    </header>
  );
}