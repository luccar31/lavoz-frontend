import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Tema para la Landing Page
        'landing': {
          'background': '#0A0A0A',
          'surface': '#1C1C1C',
          'text': {
            'primary': '#FFFFFF',
            'secondary': '#B3B3B3',
          }
        },
        // Colores de Marca (pueden ser usados en ambos temas)
        'brand': {
          'red': '#E60000',
        },
        'accent': {
          'focus': '#4A90E2',
        },
      },
      fontFamily: {
        oswald: ['var(--font-oswald)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      // --- SECCIÓN MODIFICADA ---
      fontSize: {
        // ANTES: clamp(2.5rem, ..., 5rem) -> 40px a 80px
        'h1': ['clamp(3rem, 7vw + 1rem, 6rem)', { lineHeight: '1.1' }],       // AHORA: 48px a 96px
        'h2': ['clamp(2rem, 4vw + 1rem, 3.5rem)', { lineHeight: '1.2' }],
        'h3': ['clamp(1.5rem, 3vw + 1rem, 1.75rem)', { lineHeight: '1.3' }],
        // ANTES: clamp(1.125rem, ..., 1.25rem) -> 18px a 20px
        'subtitle': ['clamp(1.25rem, 2vw + 0.75rem, 1.5rem)', { lineHeight: '1.5' }], // AHORA: 20px a 24px
        'body': ['1rem', { lineHeight: '1.6' }],
        // ANTES: 1.125rem -> 18px
        'button': ['1.25rem', { lineHeight: '1' }], // AHORA: 20px
        'button-lg': ['1.5rem', { lineHeight: '1' }], // Letra más grande para botones grandes (Hero)
      },
      // --------------------------
      spacing: {
        // Creamos una nueva escala "landing" para nuestros valores fluidos
        'landing-8': 'clamp(2.5rem, 5vw, 4rem)',
        'landing-12': 'clamp(4rem, 8vw, 6rem)',
        'landing-16': 'clamp(5rem, 12vw, 8rem)',
      },
      maxWidth: {
        'container': '1200px',
      }
    },
  },
  plugins: [],
}
export default config