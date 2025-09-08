"use client";

import {useState} from 'react';
import {Minus, Plus} from 'lucide-react';
import Container from '@/components/common/Container';
import Body from "@/components/common/Body";
import CTAButton from "@/components/common/CTAButton";
import env from "@/lib/env";

const faqData = [
  {
    question: '¿Necesito experiencia previa?',
    answer: 'No, el curso está diseñado para todos los niveles. Desde principiantes hasta cantantes con experiencia encontrarán valor en el contenido.',
  },
  {
    question: '¿Qué pasa si no puedo asistir a una clase?',
    answer: 'Todas las clases quedan grabadas y disponibles en la plataforma por 6 meses después de finalizado el curso.',
  },
  {
    question: '¿Cuánto dura el curso?',
    answer: 'El curso tiene una duración de 12 semanas, con una clase semanal de 1:30 horas.',
  },
  {
    question: '¿Qué equipamiento necesito?',
    answer: 'Solo necesitás una computadora con conexión a internet, auriculares y preferentemente un micrófono.',
  },
  {
    question: '¿Recibo algún certificado?',
    answer: 'Sí, al finalizar el curso vas a recibir un certificado digital que acredita tu participación y aprobación.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-landing-background min-h-[100dvh] flex items-center py-12 lg:py-16">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-oswald font-bold text-h2 uppercase text-landing-text-primary text-center">
            Preguntas Frecuentes
          </h2>

          <div className="mt-10 space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-landing-surface/50">
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex justify-between items-center text-left py-4"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-oswald font-medium text-button uppercase text-landing-text-primary">
                    {item.question}
                  </span>
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-brand-red"/>
                  ) : (
                    <Plus className="w-6 h-6 text-landing-text-secondary"/>
                  )}
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                    openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <Body className="pb-4">{item.answer}</Body>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <p className="mb-4 font-oswald font-bold text-h3 uppercase text-landing-text-primary">
              No dudes más
            </p>
            <CTAButton href={env.ctaRedirectUrl}>¡Inscribite ya!</CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}