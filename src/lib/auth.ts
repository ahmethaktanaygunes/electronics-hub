import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import { account, session, user, verification } from "@/db/schema";

const googleClientId = process.env["GOOGLE_CLIENT_ID"];
const googleClientSecret = process.env["GOOGLE_CLIENT_SECRET"];
const baseURL = process.env["BETTER_AUTH_URL"];
const secret = process.env["BETTER_AUTH_SECRET"];

/**
 * Better Auth server instance.
 *
 * - Persistence goes through the official Drizzle adapter (`provider: "pg"`).
 * - Email + password is enabled for direct sign-up / sign-in.
 * - Google OAuth is only registered when both env variables are present, so the
 *   app still boots (with email/password only) during local setup.
 *
 * Required environment variables — see .env.example:
 *   DATABASE_URL, BETTER_AUTH_SECRET, BETTER_AUTH_URL,
 *   GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET
 */
export const auth = betterAuth({
  appName: "Electronics with Haktan",
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: { user, session, account, verification },
  }),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
  },
  session: {
    // 7 days, refreshed once a day.
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60 * 24,
  },
  socialProviders:
    googleClientId && googleClientSecret
      ? {
          google: {
            clientId: googleClientId,
            clientSecret: googleClientSecret,
          },
        }
      : {},
  ...(baseURL ? { baseURL } : {}),
  ...(secret ? { secret } : {}),
});

export type Auth = typeof auth;
export type AuthSession = typeof auth.$Infer.Session;
