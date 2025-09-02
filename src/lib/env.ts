import { z } from 'zod';

type Environment = {
  appUrl: string;
  ctaRedirectUrl: string;
  launchModeEnabled: boolean;
  comingSoonTeaserUrl: string;
  instagramUrl: string;
  youtubeUrl: string;
  spotifyUrl: string;
  appReady: boolean;
}

const serverSchema = z.object({
  LAUNCH_MODE_ENABLED: z.coerce.boolean().default(false),
  APP_READY: z.coerce.boolean().default(false)
});

const clientSchema = z.object({
  NEXT_PUBLIC_CTA_REDIRECT_URL: z.url(),
  NEXT_PUBLIC_APP_URL: z.url(),
  NEXT_PUBLIC_COMING_SOON_TEASER_URL: z.url(),
  NEXT_PUBLIC_INSTAGRAM_URL: z.url(),
  NEXT_PUBLIC_YOUTUBE_URL: z.url(),
  NEXT_PUBLIC_SPOTIFY_URL: z.url(),
});

function formatEnv() {
  // En el servidor, validamos todo
  if (typeof window === 'undefined') {
    const envData = {
      ...process.env,
    };
    const parsed = serverSchema.extend(clientSchema.shape).safeParse(envData);
    if (!parsed.success) {
      console.error(
        '❌ Invalid environment variables:',
        z.treeifyError(parsed.error).errors
      );
      throw new Error(`Invalid environment variables: ${z.treeifyError(parsed.error).errors}`);
    }
    return parsed.data;
  }

  // En el cliente, solo validamos las variables públicas
  const clientEnvData = {
    NEXT_PUBLIC_CTA_REDIRECT_URL: process.env.NEXT_PUBLIC_CTA_REDIRECT_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_COMING_SOON_TEASER_URL: process.env.NEXT_PUBLIC_COMING_SOON_TEASER_URL,
    NEXT_PUBLIC_INSTAGRAM_URL: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    NEXT_PUBLIC_YOUTUBE_URL: process.env.NEXT_PUBLIC_YOUTUBE_URL,
    NEXT_PUBLIC_SPOTIFY_URL: process.env.NEXT_PUBLIC_SPOTIFY_URL,
  };
  const parsed = clientSchema.safeParse(clientEnvData);

  if (!parsed.success) {
    console.error(
      '❌ Invalid client-side environment variables:',
      z.treeifyError(parsed.error).errors,
    );
    throw new Error('Invalid client-side environment variables.');
  }

  // Para las variables de servidor, proveemos un valor por defecto seguro en el cliente
  return { ...parsed.data, LAUNCH_MODE_ENABLED: false, APP_READY: false };
}

const envData = formatEnv();

const env: Environment = {
  appUrl: envData.NEXT_PUBLIC_APP_URL,
  ctaRedirectUrl: envData.NEXT_PUBLIC_CTA_REDIRECT_URL,
  launchModeEnabled: envData.LAUNCH_MODE_ENABLED,
  comingSoonTeaserUrl: envData.NEXT_PUBLIC_COMING_SOON_TEASER_URL,
  instagramUrl: envData.NEXT_PUBLIC_INSTAGRAM_URL,
  youtubeUrl: envData.NEXT_PUBLIC_YOUTUBE_URL,
  spotifyUrl: envData.NEXT_PUBLIC_SPOTIFY_URL,
  appReady: envData.APP_READY
};

export default env;