// src/components/Hero.tsx
import Image from 'next/image';
import Container from '@/components/landing/Container';
import Button from '@/components/landing/Button';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-[100dvh] text-center pt-24"
    >
      {/* Imagen de fondo optimizada con Next.js */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/images/hero-background.jpg" // Asegúrate de tener esta imagen en la carpeta /public/images
          alt="Artista cantando en un escenario con luces rojas"
          fill
          className="object-cover"
          priority // Carga esta imagen primero
        />
        {/* Capa oscura para mejorar el contraste del texto */}
        <div className="absolute inset-0 bg-landing-background/70" />
      </div>

      <Container>
        <div className="max-w-5xl mx-auto">
          <h1 className="font-oswald font-bold text-h1 uppercase text-landing-text-primary">
            La Voz
          </h1>
          <p className="font-inter text-subtitle mt-4 text-landing-text-primary">
            Autoconocimiento del ser. Redescubrí tu sonido interior.
          </p>
          {/* AÑADIMOS LA PROP size="lg" */}
          <div className="mt-8">
            <Button href="#inscripcion" size="lg" className="w-1/2">
              ¡Inscribite ya!
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}