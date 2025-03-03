import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  safelist: [
    // 匹配所有可能的颜色和色阶
    { pattern: /bg-(red|blue|green|yellow|indigo|orange)-(200|400|600|800)/ },
  ],
  plugins: [],
} satisfies Config;
