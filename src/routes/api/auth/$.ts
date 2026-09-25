import { createFileRoute } from "@tanstack/react-router";

/**
 * Better Auth catch-all handler.
 *
 * Official TanStack Start pattern: the framework-level route handler forwards
 * every /api/auth/* request (sign-in, sign-up, OAuth callback, session,
 * sign-out, ...) straight to Better Auth.
 *
 * `@/lib/auth` is imported dynamically on purpose. Generate-route-tree.js
 * statically imports every route module into the server graph, so a top-level
 * import would pull the Drizzle client (and its DATABASE_URL check) into every
 * SSR render — making the whole site fail before the database is configured.
 * Loading it inside the handler keeps the rest of the app bootable.
 */
async function handle(request: Request) {
  const { auth } = await import("@/lib/auth");
  return auth.handler(request);
}

export const Route = createFileRoute("/api/auth/$")({
  server: {
    handlers: {
      GET: ({ request }) => handle(request),
      POST: ({ request }) => handle(request),
    },
  },
});
