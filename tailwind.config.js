/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // This is the key line (or 'selector' in newer versions)

  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // add your paths
  ],

  theme: {
    extend: {
      // Optional: expose your CSS variables as Tailwind tokens
      colors: {
       
      },
    },
  },

  plugins: [],
};
