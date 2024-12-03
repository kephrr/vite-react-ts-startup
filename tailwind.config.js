/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
      "./src/components/*.{tsx}",
    "./src/pages/**/*.{html,tsx}",
    "./src/**/*.{html,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui
  ],
}