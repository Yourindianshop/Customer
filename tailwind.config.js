module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: {
        DEFAULT: "#000",
        light: "#ffffff",
      },
      blue: {
        DEFAULT: "#24ACFF",
        light: "#98e8fc",
      },
      gray: {
        DEFAULT: "#ACB1BC",
        light: "#F2F2F2",
      },
      red: {
        DEFAULT: "#C50007",
      },
      pink: {
        DEFAULT: "#FFA776",
      },
      golden: {
        DEFAULT: "#FAC804",
        light: "#FAC804",
      },
      card: {
        DEFAULT: "rgba(39, 45, 55, 0.3)",
      },
      yellow: {
        DEFAULT: "#FAC804",
      },
    },
    screens: {
      m2xl: { min: "1500px" },

      "2xl": { max: "1500px" },
      // => @media (max-width: 1535px) { ... }

      xxl: { max: "1400px" },

      xl: { max: "1200px" },
      // => @media (max-width: 1200px) { ... }

      "2lg": { max: "1024px" },
      // => @media (max-width: 1024px) { ... }

      m2lg: { min: "1024px" },

      lg: { max: "900px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "600px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "450px" },
      // => @media (max-width: 450px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
