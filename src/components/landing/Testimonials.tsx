// src/components/Testimonials.tsx
import React from 'react';
import Container from '../common/Container';
import CTAButton from "@/components/common/CTAButton";
import H2 from "@/components/common/H2";
import TestimonialsList from "@/components/landing/TestimonialsList";

// Creamos un array con los datos de los testimonios para mantener el código limpio
const testimonials = [
  {
    quote: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
    name: 'NOMBRE A.',
    role: 'Rol aleatorio',
    avatarPath: '/images/testimonial.jpg', // Asume que las imágenes están en /public/images
  },
  {
    quote: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    name: 'NOMBRE A.',
    role: 'Rol aleatorio',
    avatarPath: '/images/testimonial.jpg',
  },
  {
    quote: 'Morbi a dapibus nunc. Nullam posuere sem vel nisl imperdiet semper. Fusce venenatis est quam, nec pulvinar felis elementum nec.',
    name: 'NOMBRE A.',
    role: 'Rol aleatorio',
    avatarPath: '/images/testimonial.jpg',
  },
  {
    quote: 'Fusce a enim id tellus iaculis bibendum. Morbi at ligula elementum, tristique lorem nec, dictum orci. Sed id lobortis nunc.',
    name: 'NOMBRE A.',
    role: 'Rol aleatorio',
    avatarPath: '/images/testimonial.jpg',
  },
  {
    quote: 'Nunc venenatis sollicitudin libero. Etiam at quam quis quam ultrices interdum sit amet id ex.',
    name: 'NOMBRE A.',
    role: 'Rol aleatorio',
    avatarPath: '/images/testimonial.jpg',
  },
  {
    quote: 'Ut feugiat vehicula quam, eget varius nulla posuere sed. Vivamus tellus ex, interdum sed dui quis, semper maximus tellus. Class.',
    name: 'NOMBRE A.',
    role: 'Rol aleatorio',
    avatarPath: '/images/testimonial.jpg',
  }
];

export default function Testimonials() {
  return (
    <section id="testimonios"
             className="bg-landing-surface min-h-[100dvh] flex items-center py-landing-12 lg:py-landing-16">
      <Container>
        <div className="max-w-5xl mx-auto text-center">
          <H2>Voces que Confían</H2>
          <TestimonialsList items={testimonials}/>

          <div className="mt-12 text-center">
            <p className="mb-4 font-oswald font-bold text-h3 uppercase text-landing-text-primary">
              Confiá vos también
            </p>
            <CTAButton href="https://wa.link/rsz6v9">
              ¡Inscribite ya!
            </CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}