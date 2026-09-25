import { createFileRoute } from "@tanstack/react-router";
import { AuthForm } from "@/components/AuthForm";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — Electronics with Haktan" },
      {
        name: "description",
        content:
          "Sign in with email and password or Google to follow live electronics lessons and track your progress.",
      },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <AuthForm mode="login" />
      </main>
    </div>
  );
}
