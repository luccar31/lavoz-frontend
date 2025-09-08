import Container from '@/components/common/Container';
import CTAButton from "@/components/common/CTAButton";
import H2 from "@/components/common/H2";
import TestimonialsList from "@/components/landing/TestimonialsList";
import env from "@/lib/env";

const testimonials = [
  {
    quote: 'Lo que más me llamó la atención de las clases de canto, fue descubrir voces que habitaban dentro de mí que nunca había escuchado.',
    name: 'JAVIER NICOLAO',
    role: 'Profesor',
    avatarPath: '/images/avatars/javier.jpeg',
  },
  {
    quote: 'Tuve el privilegio de hacer clases virtuales y presenciales con el chino, fue una hermosa experiencia casi terapéutica. Me ayudo mucho a conectarme conmigo y con la musica, a sacarme la verguenza. Por primera vez pude cantar frente a muchas personas. Excelente profesor muy humano sobre todo.',
    name: 'MÁXIMO BARRERA',
    role: '',
    avatarPath: '/images/avatars/generico.svg',
  },
  {
    quote: 'Hace varios años que hago clases de canto con el Chino y se supera cada vez más. Su energía es única. Después de haber trabajado mucho, puedo notar como voy evolucionando y eso me motiva un montón. Y no solo hablo de lo vocal, sino de cómo trabaja el arte de la voz desde varias miradas. El trabajo de interpretar y de reconocer el propio cuerpo también forma parte de esta disciplina. Y es hermoso ver cómo se logra a lo largo de las clases. ¡Estoy muy contenta de trabajar juntos!',
    name: 'FLORENCIA DÍAZ',
    role: '',
    avatarPath: '/images/avatars/florencia.jpeg',
  },
  {
    quote: 'Desde chico admiré a los músicos y soñaba con compartir lo que sentía, pero algo me trababa y no podía mostrarme. Con el tiempo la vida me cruzó con el Chino, y aunque me cuesta muchísimo, logré avances que había dejado de imaginar: postura, relajación, resonadores, respiración, apertura de la boca, ubicación de la lengua y más. Sé que recién empiezo y queda mucho por hacer, pero aprendí que no siempre se puede solo. Yo solo no hubiera podido. Gracias Chino.',
    name: 'EDUARDO CIPOLLA',
    role: '',
    avatarPath: '/images/avatars/eduardo.jpeg',
  },
  {
    quote: 'Cuando empecé estaba muy nerviosa porque no sabía si mi voz iba a poder mejorar. Al principio me costaba un montón, sentía que no me salía como quería. Pero con el tiempo y la paciencia del profe, fui aprendiendo a usar mi voz de otra manera. Me enseñó ejercicios y técnicas que nunca había probado, y cada clase era como descubrir algo nuevo de mí.',
    name: 'ISABELLA EXPÓSITO',
    role: '',
    avatarPath: '/images/avatars/isabella.jpeg',
  },
  {
    quote: 'Gracias a las clases pude conocer más el color de mi voz y mi registro. El profe me acompañó en canciones que me gustaban y me quedaban bien para mi tonalidad. Fue una experiencia muy enriquecedora',
    name: 'BRENDA CARUSO',
    role: '',
    avatarPath: '/images/avatars/brenda.jpeg',
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
            <CTAButton href={env.ctaRedirectUrl}>
              ¡Inscribite ya!
            </CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}