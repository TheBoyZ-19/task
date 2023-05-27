import { type Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, config }) {
      addUtilities({
        '.custom_grid': {
          'grid-template-columns': 'repeat(2, minmax(0, max-content))'
        }
      })
    }),
  ],
  corePlugins: {
    preflight: false
  }
} satisfies Config;
