import { Bookmark } from 'lucide-react';
import Container from '@/components/common/Container';
import CTAButton from "@/components/common/CTAButton";
import env from "@/lib/env";

const syllabusData = [
  {
    title: 'El cuerpo como instrumento',
    points: ['Autoobservación', 'Relación cabeza – cuello – espalda', 'Piernas y pies'],
  },
  {
    title: 'Anatomía y técnica vocal',
    points: ['Conociendo el instrumento', 'Respiración y soporte (apoyo)', 'Fonación', 'Resonancia (vibración)'],
  },
  {
    title: 'Lenguaje y articulación',
    points: ['Vocales y consonantes', 'Articulación y emisión', 'Higiene y hábitos', 'Relajación'],
  },
  {
    title: 'Herramientas complementarias',
    points: ['Reflexología en la cara', 'Calentamiento vocal', 'Espiritualidad en la voz'],
  },
];

export default function Syllabus() {
  return (
    <section id="temario" className="bg-landing-surface min-h-[100dvh] flex items-center py-landing-12 lg:py-landing-16">
      <Container>
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="font-oswald font-bold text-h2 uppercase text-landing-text-primary">
            Temario del Curso
          </h2>

          <div className="mt-12 p-4 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              {syllabusData.map((module, index) => (
                <div key={module.title} className="bg-landing-background p-6 h-full">
                  <div className="flex justify-center mb-4">
                    <Bookmark className="text-brand-red w-8 h-8 flex-shrink-0" aria-hidden="true" />
                  </div>
                  <div className="flex items-center gap-4">
                    <h3 className="font-oswald font-medium text-button uppercase text-landing-text-primary text-left">
                      {index + 1}. {module.title}
                    </h3>
                  </div>
                  <ul className="mt-4 space-y-2 list-disc list-outside text-left ml-5">
                    {module.points.map((point) => (
                      <li key={point} className="text-landing-text-secondary">
                        <p>{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="mb-4 font-oswald font-bold text-h3 uppercase text-landing-text-primary">
              Sé parte
            </p>
            <CTAButton href={env.ctaRedirectUrl}>
              ¡Inscribite ya!
            </CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}