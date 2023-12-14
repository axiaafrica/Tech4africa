/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts,svg}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    screens: {
      sm: "450px",
      md: "860px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536",
    },
    extend: {
      backgroundColor: {
        mycoral: "#fef9f1",
        drkblue: "#202054",
        litpink: "#FFFBF4",
        btnblue: "#F8F8FF",
        axiablue: "#2D3582",
        deepblue: "#111A76",
        semipink: "#FDFBF9",
      },
      textColor: {
        textblk: "#0A102F",
        semiblk: "#353536",
        drkblue: "#202054",
        axiablue: "#2D3582",
        drkgrey: "#525357",
        greytext: "#121212",
        litgrey: "#383838",
        axiared: "#AB2638",
        litblk: "#626268",
        litwhite: "#F6F7FF",
        semiblk: "#545454",
        blkblk: "#0A102F",
        blkblk: "#636363",
        footgrey: "#EAEAF6",
      },
      borderColor: {
        borderCol: "#2D3582",
      },
    },
  },
  plugins: [],
};
