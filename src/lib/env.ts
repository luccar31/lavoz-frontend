import { z } from "zod";

// --- Base environment type (inferred from schema instead of manual typing)
const serverSchema = z.object({
  LAUNCH_MODE_ENABLED: z.coerce.boolean().default(false),
  APP_READY: z.coerce.boolean().default(false),
});

const clientSchema = z.object({
  NEXT_PUBLIC_CTA_REDIRECT_URL: z.url(),
  NEXT_PUBLIC_APP_URL: z.url(),
  NEXT_PUBLIC_COMING_SOON_TEASER_URL: z.url(),
  NEXT_PUBLIC_INSTAGRAM_URL: z.url(),
  NEXT_PUBLIC_YOUTUBE_URL: z.url(),
  NEXT_PUBLIC_SPOTIFY_URL: z.url(),
});

// Merge both schemas
const fullSchema = serverSchema.extend(clientSchema.shape);

// Infer a type from the schema
type RawEnv = z.infer<typeof fullSchema>;

// --- Utility for safe parsing
function parseSchema<T extends z.ZodTypeAny>(
  schema: T,
  data: unknown
): z.infer<T> {
  try {
    return schema.parse(data);
  } catch (error) {
    console.error("Error while parsing environment variables", error);
    throw error;
  }
}

const isServer = typeof window === "undefined"

// --- Format function
function formatEnv(): RawEnv {
  // Differentiate between server and client
  const envData =
    typeof window === "undefined"
      ? process.env // server: validate everything
      : {
        NEXT_PUBLIC_CTA_REDIRECT_URL:
        process.env.NEXT_PUBLIC_CTA_REDIRECT_URL,
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
        NEXT_PUBLIC_COMING_SOON_TEASER_URL:
        process.env.NEXT_PUBLIC_COMING_SOON_TEASER_URL,
        NEXT_PUBLIC_INSTAGRAM_URL: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
        NEXT_PUBLIC_YOUTUBE_URL: process.env.NEXT_PUBLIC_YOUTUBE_URL,
        NEXT_PUBLIC_SPOTIFY_URL: process.env.NEXT_PUBLIC_SPOTIFY_URL,
      };

  const parsed = parseSchema(fullSchema, envData);

  // On client, override server-only vars with safe defaults
  return {
    ...parsed,
    LAUNCH_MODE_ENABLED: isServer ? parsed.LAUNCH_MODE_ENABLED : false,
    APP_READY: isServer ? parsed.APP_READY : false,
  };
}

// --- Final environment type
export type Environment = {
  appUrl: string;
  ctaRedirectUrl: string;
  launchModeEnabled: boolean;
  comingSoonTeaserUrl: string;
  instagramUrl: string;
  youtubeUrl: string;
  spotifyUrl: string;
  appReady: boolean;
};

// --- Build final env object
const rawEnv = formatEnv();

export const env: Environment = {
  appUrl: rawEnv.NEXT_PUBLIC_APP_URL,
  ctaRedirectUrl: rawEnv.NEXT_PUBLIC_CTA_REDIRECT_URL,
  launchModeEnabled: rawEnv.LAUNCH_MODE_ENABLED,
  comingSoonTeaserUrl: rawEnv.NEXT_PUBLIC_COMING_SOON_TEASER_URL,
  instagramUrl: rawEnv.NEXT_PUBLIC_INSTAGRAM_URL,
  youtubeUrl: rawEnv.NEXT_PUBLIC_YOUTUBE_URL,
  spotifyUrl: rawEnv.NEXT_PUBLIC_SPOTIFY_URL,
  appReady: rawEnv.APP_READY,
};

export default env;