module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryCol: "#f56565",
      },
      fontFamily: {
        primaryFont: "Open Sans",
      },
    },
  },
  plugins: ["gatsby-plugin-postcss"],
};
