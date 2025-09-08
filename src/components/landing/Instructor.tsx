import Image from 'next/image';
import {SiInstagram, SiSpotify, SiYoutube} from '@icons-pack/react-simple-icons';
import Container from '@/components/common/Container';
import env from "@/lib/env";

export default function Instructor() {
  return (
    <section id="instructor"
             className="bg-landing-surface min-h-[100dvh] flex items-center py-landing-12 lg:py-landing-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative aspect-[4/5] max-w-sm mx-auto w-full md:order-last">
            <Image
              src="/images/singer.jpg"
              alt="Foto del instructor del curso de canto"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-landing-text-primary md:order-first">
            <h2 className="font-oswald font-bold text-h2 uppercase">
              Conocé a tu <br className="md:hidden lg:block"/>Profe
            </h2>
            <div className="mt-2 flex items-center gap-4">
              <a href={env.instagramUrl} aria-label="Instagram"
                 className="text-brand-red hover:text-landing-text-primary transition-colors">
                <SiInstagram size={24}/>
              </a>
              <a href={env.youtubeUrl} aria-label="Youtube"
                 className="text-brand-red hover:text-landing-text-primary transition-colors">
                <SiYoutube size={24}/>
              </a>
              <a href={env.spotifyUrl} aria-label="Spotify"
                 className="text-brand-red hover:text-landing-text-primary transition-colors">
                <SiSpotify size={24}/>
              </a>
            </div>
            <div className="mt-4 space-y-4 text-landing-text-secondary text-body">
              <p>
                Con más de 15 años de experiencia en la escena del rock nacional, <span
                className="font-oswald uppercase text-landing-text-primary">Matias Mirolla</span> alias <span
                className="font-oswald uppercase text-landing-text-primary">El Chino</span>, ha compartido
                escenario con los más grandes y ahora comparte su conocimiento con vos.
              </p>
              <p>
                Especializado en técnica vocal para melódicos, rock, metal, punk y géneros alternativos,
                ha desarrollado un método único que respeta la autenticidad de cada voz mientras potencia su capacidad
                y resistencia.
              </p>
              <h3 className="font-oswald text-h3 font-bold uppercase text-landing-text-primary">
                Sus mentores
              </h3>
              <p><span className="font-oswald uppercase text-landing-text-primary">Livia Barbosa</span>, cantante de
                Jazz y fonoaudióloga</p>
              <p><span className="font-oswald uppercase text-landing-text-primary">Loli Álvarez</span>, cantante de rock
                en Nodisco</p>
              <p><span className="font-oswald uppercase text-landing-text-primary">Vasco Bariain</span>, cantante de
                rock en Chevy Rockets</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}