type RuntimeErrorReporter = (payload: {
  message: string;
  stack?: string;
  filename?: string;
}) => void;

declare global {
  interface Window {
    __runtimeErrorReporter?: RuntimeErrorReporter;
  }
}

export function reportRuntimeError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);

  const stack = error instanceof Error ? error.stack : undefined;

  window.__runtimeErrorReporter?.({
    message,
    ...(stack !== undefined && { stack }),
    filename: window.location.pathname,
  });

  console.error("Runtime error:", error, context);
}
