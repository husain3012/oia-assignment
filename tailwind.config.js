module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white-bg":"#F8FAFF",
        "blue-text": "#346BD4",
        "blue-bg": "#4285F4",
        "green-light": "#7FCD93",
        "green-dark": "#98D89E",
        "yellow-dark": "#DEBF85",
        "yellow-light": "#F6DC7D",
        "red-light": "#ECA4A4",
        "red-dark": "#EE8484",
      },
      fontFamily:{
        heading: ['Montserrat'],
        logo: ['Poppins'],
        content:['Lato']

      }
    },
  },
  plugins: [],
};
