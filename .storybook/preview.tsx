// .storybook/preview.ts
import type { Preview, Decorator } from '@storybook/react'
import { Oswald, Inter } from 'next/font/google'
import '../src/app/globals.css'

// 1. Carga las fuentes aquí, igual que en tu layout
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-oswald',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter',
});

// 2. Crea un "decorator" (un componente que envuelve todas las historias)
//    y aplícale las clases de las variables de fuente.
const withFontDecorator: Decorator = (Story) => (
  <div className={`${oswald.variable} ${inter.variable} font-inter`}>
<Story />
</div>
);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // 3. Aplica el decorator a todas las historias
  decorators: [withFontDecorator],
};

export default preview;