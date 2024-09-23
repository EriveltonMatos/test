/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./node_modules/primereact/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      fontFamily: {
        yeseva: ['"Yeseva One"', 'sans-serif'], // Adiciona a fonte Yeseva One
      },
        colors: {
          'principal': '#004AAD',
        },
      },
    },
  plugins: [
    require('tailwindcss-animated')
  ],
}

