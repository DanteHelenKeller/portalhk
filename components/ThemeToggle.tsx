"use client";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  // Estado inicial sin asumir nada (null representa "no montado aún")
  const [theme, setTheme] = useState<"dark" | "light" | null>(null);

  // Efecto para cargar el tema desde localStorage SOLO en el cliente
  useEffect(() => {
    const saved = localStorage.getItem("hk-theme") as "dark" | "light" | null;
    const initialTheme = saved || "dark";
    
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggle = () => {
    if (!theme) return;
    
    const nuevo = theme === "dark" ? "light" : "dark";
    setTheme(nuevo);
    document.documentElement.setAttribute("data-theme", nuevo);
    localStorage.setItem("hk-theme", nuevo);
  };

  // Mientras el tema es null (no montado), mostramos un placeholder
  if (theme === null) {
    return (
      <button 
        className="flex items-center gap-3 px-4 py-2 bg-[var(--chip-bg)] border border-[var(--border)] rounded-full text-[10px] font-bold transition-all hover:border-[var(--border-h)] cursor-pointer z-50 relative opacity-0 pointer-events-none"
        aria-hidden="true"
      >
        <span className="flex items-center justify-center w-5 h-5 bg-[var(--sep)] rounded-full">
          🌙
        </span>
        <span className="text-[var(--text2)] uppercase tracking-widest">
          Modo Oscuro
        </span>
      </button>
    );
  }

  return (
    <button 
      onClick={toggle} 
      className="flex items-center gap-3 px-4 py-2 bg-[var(--chip-bg)] border border-[var(--border)] rounded-full text-[10px] font-bold transition-all hover:border-[var(--border-h)] cursor-pointer z-50 relative"
    >
      <span className="flex items-center justify-center w-5 h-5 bg-[var(--sep)] rounded-full">
        {theme === "dark" ? "🌙" : "☀️"}
      </span>
      <span className="text-[var(--text2)] uppercase tracking-widest">
        {theme === "dark" ? "Modo Oscuro" : "Modo Claro"}
      </span>
    </button>
  );
}