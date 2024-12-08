/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
      "./src/components/*.tsx" ,
    "./src/pages/**/*.tsx",
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui
  ],
}