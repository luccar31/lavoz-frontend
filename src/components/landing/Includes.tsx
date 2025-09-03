import {IconName} from 'lucide-react/dynamic'
import Container from '../common/Container';
import H2 from "@/components/common/H2";
import Body from "@/components/common/Body";
import CTAButton from "@/components/common/CTAButton";
import IncludesList from "@/components/landing/IncludesList";
import env from "@/lib/env";

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

export default function Includes() {
  return (
    <section id="curso"
             className="bg-landing-background min-h-[100dvh] flex items-center py-landing-12 lg:py-landing-16">
      <Container>
        <div className="max-w-5xl mx-auto text-center">
          <H2>Qué incluye el curso</H2>
          <div className="mt-4 max-w-2xl mx-auto space-y-4">
            <Body>
              Para voz hablada o cantada, ideal para quienes usan su voz como herramienta de trabajo. Un método único
              que combina técnica vocal con la energía y autenticidad del rock.
            </Body>
            <Body>
              Desarrollado por profesionales con más de 15 años de experiencia en la industria musical y la pedagogía
              vocal.
            </Body>
          </div>

          <div className="mt-12 text-left">
            <IncludesList items={includedItems}/>
          </div>
          <div className="mt-12">
            <CTAButton href={env.ctaRedirectUrl}>¡Inscribite ya!</CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}