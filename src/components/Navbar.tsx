import { Link, NavLink, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();
  const nav = useNavigate();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/75 dark:bg-slate-950/75 backdrop-blur-md dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-linear-to-br from-brand-500 to-brand-700" />
          <span className="text-base font-semibold tracking-tight">
            Ayee Portal
          </span>
        </Link>

        <nav className="flex items-center gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-xl px-3 py-2 text-sm font-medium ${
                isActive
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                  : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
              }`
            }
          >
            Home
          </NavLink>
          {user && (
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `rounded-xl px-3 py-2 text-sm font-medium ${
                  isActive
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
                }`
              }
            >
              Profile
            </NavLink>
          )}
          <ThemeToggle />
          {!user ? (
            <Link
              to="/login"
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
            >
              Sign in
            </Link>
          ) : (
            <button
              onClick={async () => {
                await logout();
                nav("/login");
              }}
              className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:opacity-90 dark:bg-white dark:text-slate-900"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
