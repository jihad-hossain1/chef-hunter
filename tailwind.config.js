/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#aefcae",

          "secondary": "#d7f788",

          "accent": "#4fdd73",

          "neutral": "#24282E",

          "base-100": "#E9E4F2",

          "info": "#5D7DD5",

          "success": "#1F9E76",

          "warning": "#F8AD63",

          "error": "#F72318",
        },
      },
    ],
  },
  plugins: [require("daisyui", 'flowbite/plugin')],


}