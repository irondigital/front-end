import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
  persist(
    (set, get) => ({
      isDark: true,
      toggleTheme: () => {
        const next = !get().isDark;
        set({ isDark: next });
        document.documentElement.classList.toggle("dark", next);
        document.documentElement.classList.toggle("light", !next);
      },
      initTheme: () => {
        const isDark = get().isDark;
        document.documentElement.classList.toggle("dark", isDark);
        document.documentElement.classList.toggle("light", !isDark);
      },
    }),
    { name: "plant_theme" }
  )
);
