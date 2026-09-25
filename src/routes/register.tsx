import { createFileRoute } from "@tanstack/react-router";
import { AuthForm } from "@/components/AuthForm";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create an account — Electronics with Haktan" },
      {
        name: "description",
        content:
          "Create an account with email and password or Google to enrol in live electronics lessons.",
      },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <AuthForm mode="register" />
      </main>
    </div>
  );
}
