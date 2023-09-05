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
        blue: "var(--teal)"
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
      fontSize: {
        "2xl": "108px",
        xl: "96px", //72
        lg: "48px",
        md: "24px",
        sm: "12px",
      },
    },
  },
  plugins: [],
};
