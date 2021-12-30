module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryCol: "#f56565",
      },
    },
  },
  plugins: ["gatsby-plugin-postcss"],
};
