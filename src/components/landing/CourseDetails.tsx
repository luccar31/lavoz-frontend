// src/components/CourseDetails.tsx
import React from 'react';
import { Calendar, Clock, Video, Award, Users } from 'lucide-react';
import Container from './Container';
import Button from "@/components/landing/Button";

// Array de datos para todos los detalles del curso
const courseDetails = [
  {
    icon: Calendar,
    title: '22/09',
    description: 'Fecha de inicio',
  },
  {
    icon: Clock,
    title: '19HS',
    description: 'Horario de cursada',
  },
  {
    icon: Video,
    title: 'EN VIVO',
    description: 'Modalidad online',
  },
  {
    icon: Award,
    title: 'CERTIFICACIÓN',
    description: 'Recibí tu certificado digital al completar el curso',
  },
  {
    icon: Users,
    title: 'CUPO LIMITADO',
    description: 'Solo 20 alumnos por cohorte para atención personalizada',
  },
];

// Separamos los datos para las dos filas del diseño de escritorio
const topRowDetails = courseDetails.slice(0, 3);
const bottomRowDetails = courseDetails.slice(3, 5);

export default function CourseDetails() {
  return (
    <section id="detalles" className="bg-landing-background min-h-[100dvh] flex flex-col justify-center py-landing-12 lg:py-landing-16">
      <Container>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-oswald font-bold text-h2 uppercase text-landing-text-primary">
            Detalles del Curso
          </h2>

          {/* Contenedor con borde para todos los detalles */}
          <div className="mt-10 border bg-landing-surface border-landing-surface rounded p-8 sm:p-12">
            {/* Fila Superior (3 columnas en desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {topRowDetails.map((detail) => (
                <div key={detail.title} className="flex flex-col items-center">
                  <detail.icon className="w-8 h-8 text-brand-red" aria-hidden="true" />
                  <p className="mt-4 font-oswald font-bold text-h3 uppercase text-landing-text-primary">
                    {detail.title}
                  </p>
                  <p className="mt-1 font-inter text-sm text-landing-text-secondary">
                    {detail.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Fila Inferior (2 columnas en desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {bottomRowDetails.map((detail) => (
                <div key={detail.title} className="flex flex-col items-center">
                  <detail.icon className="w-8 h-8 text-brand-red" aria-hidden="true" />
                  <p className="mt-4 font-oswald font-bold text-h3 uppercase text-landing-text-primary">
                    {detail.title}
                  </p>
                  <p className="mt-1 font-inter text-sm text-landing-text-secondary max-w-xs">
                    {detail.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <p className="mb-4 font-oswald font-bold text-h3 uppercase text-landing-text-primary">
             No pierdas tu lugar
            </p>
            <Button href="#whatsapp-link" size="lg" className="w-1/2">
              ¡Inscribite ya!
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}