import { z } from 'zod';

type Environment = {
  appUrl: string;
  ctaRedirectUrl: string;
  launchModeEnabled: boolean;
  comingSoonTeaserUrl: string;
}

// parse with zod
const envSchema = z.object({
  LAUNCH_MODE_ENABLED: z.coerce.boolean().default(false),
  NEXT_PUBLIC_CTA_REDIRECT_URL: z.url(),
  NEXT_PUBLIC_APP_URL: z.url(),
  NEXT_PUBLIC_COMING_SOON_TEASER_URL: z.url(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  const msg = `❌ Invalid environment variables: ${z.treeifyError(parsedEnv.error).errors}`
  console.error(msg);
  throw new Error(msg);
}

const env: Environment = {
  appUrl: parsedEnv.data.NEXT_PUBLIC_APP_URL,
  ctaRedirectUrl: parsedEnv.data.NEXT_PUBLIC_CTA_REDIRECT_URL,
  launchModeEnabled: parsedEnv.data.LAUNCH_MODE_ENABLED,
  comingSoonTeaserUrl: parsedEnv.data.NEXT_PUBLIC_COMING_SOON_TEASER_URL
};

export default env