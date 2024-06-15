/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Note the double asterisks for subdirectories
    // Exclude components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
