/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
   extend: {
    colors: {
      white: "#f5f8ff",
      white1: "#ffffff", 
      blue: "#6172f3",
      black: "#09090b",
      grey: "#71717a",
      "border-disabled": "#B5C4FC",
      action: "#8098F9",
      "input-bg": "#EAEFFF",
    }
   },
   fontSize: {
    "sm": "15px",
    "md": "16px",
    "base": "20px",
    "large": "40px",
    "input": "18px",
   },
   spacing: {
     '1024': '1024px',
     "720": "720px",
     "25": "25px",
     "10": "10px",
     "15": "15px",
     "20": "20px",
     "24": "24px",
     "30": "30px",
     "50": "50px",
     "form": "453px"
   },
   borderRadius: {
    window: "40px",
    action: "10px"
   },
   lineHeight: {
    "20": "20px",
    "25": "25px",
    "24": "24px",
   }
  },
  plugins: [],
}

