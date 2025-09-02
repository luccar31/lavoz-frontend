import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import Container from '@/components/landing/Container';
import Button from '@/components/landing/Button';
import H1 from "@/components/landing/H1";

export default function HeroComingSoon() {
  return (
    <section className="relative flex items-center justify-center min-h-[100dvh] text-center pt-24">
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/images/hero-prod.jpeg"
          alt="Micrófono en un escenario oscuro"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>

      <Container>
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <span className="bg-brand-red text-landing-text-primary font-oswald text-sm font-bold uppercase px-3 py-1 mb-4">
            Próximamente
          </span>
          <H1>
            La Voz
          </H1>
          <p className="font-inter text-subtitle mt-4 text-landing-text-secondary max-w-xl">
            El curso que transformará tu voz está llegando
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Button href={process.env.NEXT_PUBLIC_COMING_SOON_TEASER_URL ?? ''} size="default" className="gap-2">
              <Play size={18} /> Ver Adelanto
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}