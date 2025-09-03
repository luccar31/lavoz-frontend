import Link from 'next/link';
import {SiInstagram, SiYoutube} from '@icons-pack/react-simple-icons';
import Container from '../common/Container';
import env from '@/lib/env'

export default function Footer() {
  return (
    <footer className="bg-landing-background border-t border-landing-surface/50 text-landing-text-secondary">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-landing-12">

          <div className="space-y-4">
            <h3 className="font-oswald font-bold text-h3 uppercase text-landing-text-primary">
              LA VOZ
            </h3>
            <p className="text-sm">
              Curso especializado en técnica vocal para artistas que buscan potenciar su expresión.
            </p>
            <div className="flex space-x-4">
              <a href={env.instagramUrl} aria-label="Instagram"
                 className="hover:text-landing-text-primary transition-colors">
                <SiInstagram size={20}/>
              </a>
              <a href={env.youtubeUrl} aria-label="Youtube"
                 className="hover:text-landing-text-primary transition-colors">
                <SiYoutube size={20}/>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-oswald font-medium uppercase text-landing-text-primary">Enlaces Rápidos</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#curso" className="hover:text-landing-text-primary transition-colors">El Curso</Link></li>
              <li><Link href="#instructor"
                        className="hover:text-landing-text-primary transition-colors">Instructor</Link></li>
              <li><Link href="#testimonios"
                        className="hover:text-landing-text-primary transition-colors">Testimonios</Link></li>
              <li><Link href="#faq" className="hover:text-landing-text-primary transition-colors">Preguntas</Link></li>
            </ul>
          </div>

        </div>

        <div
          className="flex flex-col md:flex-row justify-between items-center border-t border-landing-surface/50 py-6 text-sm">
          <p>&copy; {new Date().getFullYear()} LA VOZ - Descubrimiento del ser. Todos los derechos reservados.</p>
          <p>Desarrollado por LDAV Software. Contactanos al contacto@ldavsoftware.net</p>
        </div>
      </Container>
    </footer>
  );
}