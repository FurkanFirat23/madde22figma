/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["GalanoGrotesqueRegular", "sans-serif"],
        bold: ["GalanoGrotesqueBold", "sans-serif"],
        extrabold: ["GalanoGrotesqueExtraBold", "sans-serif"],
        medium: ["GalanoGrotesqueMedium", "sans-serif"],
        acme: ["Acme", "sans-serif"],
      },
      colors: {
        dark: "#000000",
        light: "#ffffff",
        primary: "#FF0D87", // pink
        secondary: "#58E6D9", // 80,230,217
        grey: "#F5F5F5",
      },
      backgroundColor: {
        gr: "#9FAE5D",
        rd: "#F07266",
        or: "#F19653",
        prp: "#B77CB8",
      },
    },
    screens: {
      "2xl": { max: "1535px" }, // @media (max-width: 1535px)

      xl: { max: "1279px" }, // @media (max-width: 1279px)

      lg: { max: "1023px" }, // @media (max-width: 1023px)

      md: { max: "767px" }, // @media (max-width: 767px)

      sm: { max: "639px" }, // @media (max-width: 639px)

      xs: { max: "479px" }, // @media (max-width: 479px)
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
