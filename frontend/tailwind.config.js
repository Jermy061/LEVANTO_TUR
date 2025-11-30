/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // ¡CLAVE! Escanea todos tus archivos TSX y JSX para optimizar el CSS
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}