module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        dynamic: "clamp(35px, 4vw, 100px)",
      },
    },
  },
  plugins: [],
}
