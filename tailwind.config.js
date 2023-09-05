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
        foreground: "var(--foreground)",
        background: "var(--background)",
        red: "var(--crimson)",
      },
      fontFamily: {
        roboto: "Roboto",
        montserrat: "montserrat",
        poppins: "poppins",
      },
      backgroundColor: {
        background: "var(--background)",
        red: "var(--crimson)",
        container: "var(--container)",
        dark: "var(--dark)",
      },
    },
  },
  plugins: [],
};
