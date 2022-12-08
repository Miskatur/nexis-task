/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#1678CB",

        },
      }
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
