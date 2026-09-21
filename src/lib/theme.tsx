import { createContext, useContext, useEffect, type ReactNode } from "react";

type Theme = "dark";
const Ctx = createContext<{ theme: Theme; toggle: () => void } | null>(null);

const value = { theme: "dark" as Theme, toggle: () => {} };

export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    try { localStorage.setItem("theme", "dark"); } catch {}
  }, []);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
export function useTheme() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useTheme");
  return c;
}

