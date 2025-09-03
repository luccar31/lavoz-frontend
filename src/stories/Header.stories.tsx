import type { Meta, StoryObj } from '@storybook/nextjs';
import Header from '../components/landing/Header';

const meta: Meta<typeof Header> = {
  title: 'Landing/Layout/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    // Mock del router de Next.js para que los componentes <Link> funcionen
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

// Historia para la vista de escritorio por defecto
export const Desktop: Story = {};

// Historia específica para la vista móvil
export const Mobile: Story = {
  parameters: {
    viewport: {
      // SUGERENCIA: Usar 'mobile1' o 'mobile2' que son los nombres estándar
      // que vienen por defecto en Storybook.
      defaultViewport: 'mobile1',
    },
  },
};