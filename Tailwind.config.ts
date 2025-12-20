import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {}
  },
  plugins: []
};
export default config;
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './App/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#FF00FF',
          cyan: '#00FFFF',
          purple: '#9D00FF',
          green: '#00FF9D',
        },
        tropical: {
          palm: '#0F5132',
          sunset: '#FF6B35',
        },
        background: '#0A001F', // Deep cosmic purple-black
      },
      fontFamily: {
        display: ['"Press Start 2P"', 'cursive'], // Retro neon feel optional
      },
    },
  },
  plugins: [],
}
export default config
