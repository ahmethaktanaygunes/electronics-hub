import { Link } from "@tanstack/react-router";
import { signOut, useSession } from "@/lib/auth-client";
import { useUi } from "@/i18n/languageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function initialsOf(label: string) {
  const parts = label.trim().split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "?";
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? "") : "";
  return `${first}${last}`.toUpperCase();
}

/**
 * Header auth state. Uses the Better Auth client session hook, so it updates
 * automatically after sign-in, sign-up, OAuth callback and sign-out.
 */
export function AuthStatus() {
  const t = useUi();
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <span className="label flex items-center px-3 text-muted-foreground" aria-live="polite">
        {t.loading}
      </span>
    );
  }

  if (!session) {
    return (
      <div className="flex items-stretch">
        <Link
          to="/login"
          className="flex items-center border-l border-rule px-3 text-[13px] text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
        >
          {t.signIn}
        </Link>
        <Link
          to="/register"
          className="hidden items-center border-l border-rule px-3 text-[13px] text-glow transition-colors hover:bg-surface-2 sm:flex"
        >
          {t.signUp}
        </Link>
      </div>
    );
  }

  const name = session.user.name?.trim() || session.user.email;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-2 border-l border-rule px-3 text-[13px] text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
          aria-label={t.myAccount}
        >
          <span className="value flex h-6 w-6 shrink-0 items-center justify-center border border-glow/50 bg-glow/15 text-[10px] text-glow">
            {initialsOf(name)}
          </span>
          <span className="hidden max-w-[14ch] truncate sm:inline">{name}</span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="label truncate">{session.user.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer font-mono text-[12px] uppercase"
          onSelect={() => {
            void signOut();
          }}
        >
          {t.signOut}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
