/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#0b1120",
      },
      backgroundImage: {
        bgLeft: "/bgleft.svg",
        bgRight: "/bgright.svg",
      },
    },
  },
  plugins: [],
};
