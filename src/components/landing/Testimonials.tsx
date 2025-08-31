// src/components/Testimonials.tsx
import React from 'react';
import Image from 'next/image';
import Container from './Container';
import Button from "@/components/landing/Button";

// Creamos un array con los datos de los testimonios para mantener el código limpio
const testimonials = [
  {
    quote: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
    name: 'NOMBRE A.',
    role: 'Rol aleatorio',
    avatar: '/images/testimonial.jpg', // Asume que las imágenes están en /public/images
  },
  {
    quote: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    name: 'NOMBRE A.',
    role: 'Rol aleatorio',
    avatar: '/images/testimonial.jpg',
  },
  {
    quote: 'Morbi a dapibus nunc. Nullam posuere sem vel nisl imperdiet semper. Fusce venenatis est quam, nec pulvinar felis elementum nec.',
    name: 'NOMBRE A.',
    role: 'Rol aleatorio',
    avatar: '/images/testimonial.jpg',
  },
  {
    quote: 'Fusce a enim id tellus iaculis bibendum. Morbi at ligula elementum, tristique lorem nec, dictum orci. Sed id lobortis nunc.',
    name: 'NOMBRE A.',
    role: 'Rol aleatorio',
    avatar: '/images/testimonial.jpg',
  },
  {
    quote: 'Nunc venenatis sollicitudin libero. Etiam at quam quis quam ultrices interdum sit amet id ex.',
    name: 'NOMBRE A.',
    role: 'Rol aleatorio',
    avatar: '/images/testimonial.jpg',
  },
  {
    quote: 'Ut feugiat vehicula quam, eget varius nulla posuere sed. Vivamus tellus ex, interdum sed dui quis, semper maximus tellus. Class.',
    name: 'NOMBRE A.',
    role: 'Rol aleatorio',
    avatar: '/images/testimonial.jpg',
  }
];

export default function Testimonials() {
  return (
    <section id="testimonios"
             className="bg-landing-surface min-h-[100dvh] flex items-center py-landing-12 lg:py-landing-16">
      <Container>
        <div className="text-center">
          <h2 className="font-oswald font-bold text-h2 uppercase text-landing-text-primary">
            Voces que Confían
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {testimonials.map((testimonial, index) => (
            // 1. Usamos flex-col para controlar el contenido interno de la tarjeta
            <div key={index} className="bg-landing-background p-8 flex flex-col">
              {/* 2. flex-grow empuja el bloque del avatar hacia abajo */}
              <p className="text-landing-text-secondary text-body flex-grow">
                &#34;{testimonial.quote}&#34;
              </p>
              <div className="flex items-center mt-4">
                {/* 3. Usamos un tamaño FIJO para el avatar para garantizar consistencia */}
                <div className="relative w-[64px] h-[64px] rounded-full overflow-hidden aspect-square flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={`Foto de ${testimonial.name}`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-oswald font-medium uppercase text-landing-text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-landing-text-secondary">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 font-oswald font-bold text-h3 uppercase text-landing-text-primary">
            Confiá vos también
          </p>
          <Button href="https://wa.link/rsz6v9" size="lg" className="w-1/2">
            ¡Inscribite ya!
          </Button>
        </div>
      </Container>
    </section>
  );
}