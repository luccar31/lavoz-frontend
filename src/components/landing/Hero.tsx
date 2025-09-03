import Image from 'next/image';
import Container from '@/components/common/Container';
import CTAButton from "@/components/common/CTAButton";
import H1 from "@/components/common/H1";
import env from "@/lib/env";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-[100dvh] text-center pt-24"
    >
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/images/hero-prod.jpeg"
          alt="Artista cantando en un escenario con luces rojas"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-landing-background/70"/>
      </div>

      <Container>
        <div className="max-w-5xl mx-auto">
          <H1>La Voz</H1>
          <p className="font-inter text-subtitle mt-4 text-landing-text-primary">
            Autoconocimiento del ser. Redescubrí tu sonido interior.
          </p>
          <div className="mt-8">
            <CTAButton href={env.ctaRedirectUrl}>
              ¡Inscribite ya!
            </CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}