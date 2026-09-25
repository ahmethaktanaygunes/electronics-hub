import { createAuthClient } from "better-auth/react";

/**
 * Browser-side Better Auth client.
 *
 * When the auth API is served from the same origin (the default here) no
 * baseURL is needed. Set `VITE_BETTER_AUTH_URL` only if the API lives on a
 * different host.
 */
const baseURL = import.meta.env["VITE_BETTER_AUTH_URL"] as string | undefined;

export const authClient = createAuthClient(baseURL ? { baseURL } : {});

export const { signIn, signUp, signOut, useSession } = authClient;
