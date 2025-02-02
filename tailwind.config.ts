import { heroui } from "@heroui/theme";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/button.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [heroui()],
} satisfies Config;
