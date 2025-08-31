// src/components/FinalCTA.tsx
import React from 'react';
import Container from './Container';
import Button from './Button';
import { Flame, Lock } from 'lucide-react';
import { SiWhatsapp } from '@icons-pack/react-simple-icons';

export default function FinalCTA() {
  return (
    <section
      id="inscripcion"
      className="relative min-h-[100dvh] flex items-center py-12 lg:py-16 
                 bg-gradient-to-br from-landing-surface to-landing-background"
    >
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-oswald font-bold text-h2 uppercase text-landing-text-primary mb-10">
            Tu voz es tu herramienta.
            <br />
            Es hora de dominarla.
          </h2>

          <div className="bg-landing-surface p-8 sm:p-12 shadow-xl border border-landing-surface/50">
            <p className="text-landing-text-secondary text-body mb-6">
              La inscripción se realiza por WhatsApp para darte una atención personalizada y resolver tus
              últimas dudas. Los cupos son limitados para garantizar la calidad de la experiencia.
            </p>

            <div className="flex items-center justify-center gap-2 mb-6">
              <Flame className="w-6 h-6 text-brand-red flex-shrink-0" />
              <p className="font-oswald font-bold text-h3 text-landing-text-primary">
                Oferta de lanzamiento: <span className="text-brand-red">$45.000</span> <span className="line-through text-landing-text-secondary">$85.000</span>
              </p>
            </div>

            {/* CAMBIO CLAVE AQUÍ: Aseguramos que el botón sea de ancho completo */}
            {/* y que su contenido interno (flex items-center justify-center) maneje el centrado */}
            <Button href="#whatsapp-link" size="lg" className="w-full flex items-center justify-center gap-2">
              <SiWhatsapp size={24} /> Inscribirme por WhatsApp
            </Button>

            <p className="mt-4 text-xs text-landing-text-secondary/70">
              Al inscribirte, aceptas nuestros <a href="#" className="underline hover:text-landing-text-primary">términos y condiciones</a>.
            </p>
          </div>

          <div className="mt-8 text-landing-text-secondary/70 flex flex-col items-center gap-2">
            <Lock className="w-5 h-5" />
            <p className="text-sm">
              Pago seguro garantizado. Aceptamos todas las tarjetas de crédito y débito.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}