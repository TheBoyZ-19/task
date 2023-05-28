import { type Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".custom_grid": {
          "grid-template-columns": "repeat(2, minmax(0, max-content))",
        },
        ".custom_shadow": {
          "box-shadow": "0px 2px 8px rgba(0, 0, 0, 0.15)",
        },
      });
    }),
  ],
  corePlugins: {
    preflight: false,
  },
} satisfies Config;
