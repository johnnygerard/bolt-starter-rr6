import { heroui } from "@heroui/theme";
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(button|ripple|spinner).js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
  },
  // Required by HeroUI (Tailwind CSS v3.4.1 replaced it with the `selector` strategy)
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
