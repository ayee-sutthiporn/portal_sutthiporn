import { useEffect, useState } from "react";

const KEY = "theme"; // 'dark' | 'light'

function apply(dark: boolean) {
  const html = document.documentElement;
  html.classList.toggle("dark", dark);
  html.setAttribute("data-theme", dark ? "dark" : "light");
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    const prefers = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const initial = saved ? saved === "dark" : prefers;
    setDark(initial);
    apply(initial);
  }, []);

  useEffect(() => {
    apply(dark);
    localStorage.setItem(KEY, dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark((v) => !v)}
      className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium shadow-sm
                 hover:bg-slate-50 active:scale-95 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
