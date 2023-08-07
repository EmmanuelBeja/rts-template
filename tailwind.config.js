/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        "custom-primary": "#00468f",
        "custom-warning": "#fa892f",
        "custom-danger": "#ff0000",
        "custom-success": "#5fbb74",
        "custom-dark": "#1a263a",
      },
    },
  },
  plugins: [],
};
