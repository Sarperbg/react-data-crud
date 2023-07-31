module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Mulish: ["Mulish", "sans-serif"],
        Anton: ["Anton", "sans-serif"],
        Gotham: ["Gotham", "sans-serif"]
      },
      colors: {
        gray: {
          200:"#121212",
          400:"#B0B0B0",
          600:"#272727",
        },
        blue: {
          400:"#1977F3",
          700:"#15174D"
        },
        indigo:{
          600:"#4C50A9"
        },
        orange:{
          100:"rgb(255 237 213)",
        },
        yellow:{
          600:"#FCB541"
        }
      
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
  
  },
  plugins: [],
}