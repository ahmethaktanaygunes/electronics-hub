import { useMemo, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn, signUp } from "@/lib/auth-client";
import { useUi } from "@/i18n/languageContext";
import type { UiStrings } from "@/i18n/ui";
import { HElectronicsLogo } from "@/components/HElectronicsLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type Mode = "login" | "register";

function buildSchema(mode: Mode, t: UiStrings) {
  return z.object({
    name: mode === "register" ? z.string().min(2, t.errNameMin) : z.string(),
    email: z.string().min(1, t.errEmailRequired).email(t.errEmailInvalid),
    password:
      mode === "register"
        ? z.string().min(8, t.errPasswordMin)
        : z.string().min(1, t.errPasswordRequired),
  });
}

type FormValues = z.infer<ReturnType<typeof buildSchema>>;

function messageFor(status: number | undefined, mode: Mode, t: UiStrings) {
  if (mode === "login") return status === 401 ? t.errInvalidCredentials : t.errGeneric;
  return status === 422 ? t.errEmailTaken : t.errGeneric;
}

const LABEL = "font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground";

export function AuthForm({ mode }: { mode: Mode }) {
  const t = useUi();
  const navigate = useNavigate();
  const [formError, setFormError] = useState<string | null>(null);
  const [googlePending, setGooglePending] = useState(false);

  const schema = useMemo(() => buildSchema(mode, t), [mode, t]);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", password: "" },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setFormError(null);

    if (mode === "register") {
      const { error } = await signUp.email({
        name: values.name.trim(),
        email: values.email,
        password: values.password,
      });
      if (error) {
        setFormError(messageFor(error.status, mode, t));
        return;
      }
    } else {
      const { error } = await signIn.email({
        email: values.email,
        password: values.password,
      });
      if (error) {
        setFormError(messageFor(error.status, mode, t));
        return;
      }
    }

    await navigate({ to: "/" });
  });

  const onGoogle = async () => {
    setFormError(null);
    setGooglePending(true);
    const { error } = await signIn.social({ provider: "google", callbackURL: "/" });
    if (error) {
      setFormError(t.errGoogle);
      setGooglePending(false);
    }
  };

  const isRegister = mode === "register";

  return (
    <div className="mx-auto flex max-w-[460px] flex-col justify-center px-5 py-14">
      <div className="panel">
        <div className="panel-head">
          <span>{isRegister ? t.registerTitle : t.loginTitle}</span>
          <span className="value text-[11px] text-glow">AUTH</span>
        </div>
        <div className="px-5 py-6">
          <div className="flex items-center gap-3">
            <HElectronicsLogo size={36} title="" />
            <div>
              <p className="font-mono text-[11px] tracking-[0.08em] text-muted-foreground uppercase">
                Electronics with Haktan
              </p>
              <h1 className="text-[20px] leading-tight font-semibold tracking-tight">
                {isRegister ? t.registerTitle : t.loginTitle}
              </h1>
            </div>
          </div>
          <p className="mt-3 text-[13.5px] text-muted-foreground">
            {isRegister ? t.registerSubtitle : t.loginSubtitle}
          </p>
          <Form {...form}>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              {isRegister && (
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={LABEL}>{t.fullName}</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          autoComplete="name"
                          placeholder="Ada Lovelace"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={LABEL}>{t.authEmail}</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={LABEL}>{t.authPassword}</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        autoComplete={isRegister ? "new-password" : "current-password"}
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {formError && (
                <p className="border-l-2 border-l-warn bg-surface-2 px-3 py-2 text-[13px] text-warn">
                  {formError}
                </p>
              )}

              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? t.loading : isRegister ? t.createAccount : t.signIn}
              </Button>
            </form>
          </Form>

          <div className="my-5 flex items-center gap-3">
            <span className="h-px flex-1 bg-rule" />
            <span className="font-mono text-[10px] tracking-[0.08em] text-muted-foreground uppercase">
              {t.orDivider}
            </span>
            <span className="h-px flex-1 bg-rule" />
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={onGoogle}
            disabled={googlePending}
          >
            <GoogleMark />
            {t.continueWithGoogle}
          </Button>

          <p className="mt-5 text-center text-[13px] text-muted-foreground">
            {isRegister ? t.haveAccount : t.noAccount}{" "}
            <Link
              to={isRegister ? "/login" : "/register"}
              className="text-glow underline-offset-4 hover:underline"
            >
              {isRegister ? t.signIn : t.signUp}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-4 w-4">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59A14.5 14.5 0 0 1 9.77 24c0-1.6.27-3.15.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.88.93 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}
