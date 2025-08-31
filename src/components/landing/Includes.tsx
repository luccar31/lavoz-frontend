// src/components/Includes.tsx
import { DynamicIcon } from 'lucide-react/dynamic';
import { IconName } from 'lucide-react/dynamic'
import Container from './Container';
import Button from "@/components/landing/Button";
import {SiWhatsapp} from "@icons-pack/react-simple-icons";
import React from "react";

type IncludesProps = {
  icon: IconName,
  title: string,
  description: string
}

const includedItems: IncludesProps[] = [
  {
    icon: 'mic-vocal',
    title: '12 CLASES EN VIVO',
    description: 'Sesiones interactivas con feedback personalizado en tiempo real. Aprendé directamente de profesionales activos en la industria.',
  },
  {
    icon: 'book-open',
    title: 'MATERIAL EXCLUSIVO',
    description: 'Bibliografía de consulta y recursos desarrollados específicamente para el curso, con técnicas adaptadas al estilo rock.',
  },
  {
    icon: 'video',
    title: 'VIDEOS COMPLEMENTARIOS',
    description: 'Tutoriales y demostraciones para reforzar lo aprendido en clase y practicar a tu propio ritmo.',
  },
  {
    icon: 'dumbbell',
    title: 'EJERCICIOS PRÁCTICOS',
    description: 'Rutinas diarias diseñadas para fortalecer y desarrollar tu voz, aumentar tu resistencia y ampliar tu rango vocal.',
  },
  {
    icon: 'users',
    title: 'COMUNIDAD EXCLUSIVA',
    description: 'Acceso a grupo privado para compartir experiencias, recibir feedback adicional y conectar con otros artistas.',
  },
];

// Lógica dinámica para separar los ítems
const isOdd = includedItems.length % 2 !== 0;
// Si es impar, tomamos todos menos el último para el grid. Si es par, los tomamos todos.
const gridItems = isOdd ? includedItems.slice(0, -1) : includedItems;
// Si es impar, el último ítem es el que irá centrado. Si es par, no hay ítem centrado.
const centeredItem = isOdd ? includedItems[includedItems.length - 1] : null;

export default function Includes() {
  return (
    <section id="curso" className="bg-landing-background min-h-[100dvh] flex items-center py-landing-12 lg:py-landing-16">
      <Container>
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="font-oswald font-bold text-h2 uppercase text-landing-text-primary">
            Qué incluye el curso
          </h2>
          <div className="mt-4 max-w-2xl mx-auto space-y-4 text-landing-text-secondary text-body">
            <p>
              Para voz hablada o cantada, ideal para quienes usan su voz como herramienta de trabajo. Un método único que combina técnica vocal con la energía y autenticidad del rock.
            </p>
            <p>
              Desarrollado por profesionales con más de 15 años de experiencia en la industria musical y la pedagogía vocal.
            </p>
          </div>

          <div className="mt-12 text-left">
            {/* Grid predecible para los ítems en pares */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {gridItems.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <DynamicIcon name={item.icon} className="text-brand-red flex-shrink-0 mt-1" aria-hidden="true" size={30}/>
                  <div>
                    <h3 className="font-oswald font-medium text-button uppercase text-landing-text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-landing-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contenedor separado y centrado para el último ítem, si existe */}
            {centeredItem && (
              <div className="mt-10 flex justify-center">
                <div className="flex gap-4 max-w-md">
                  <DynamicIcon name={centeredItem.icon} className="text-brand-red w-6 h-6 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-oswald font-medium text-button uppercase text-landing-text-primary">
                      {centeredItem.title}
                    </h3>
                    <p className="mt-2 text-sm text-landing-text-secondary">
                      {centeredItem.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="mt-12">
            <Button href="#whatsapp-link" size="lg" className="w-1/2">
              ¡Inscribite ya!
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}