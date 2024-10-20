module.exports = {
  content: [
    "./src/**/*.{html,ts}",  // Ensure this includes all relevant file types
  ],
  theme: {
    extend: {
      colors: {
        primary: "#09767c",
        background: "#FAFAFA",
        secondary: "#FB5801",
        neutral: "#E0E0E0",  
        alert: {
          success: "#00D504",  
          error: "#F83A39",    
          warning: "#FEAB27",  
        },
      },
      fontFamily: {
        archivo: ['Archivo Black', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        merriweather: ["Merriweather", "serif"],
        sans: ["Open Sans", "sans-serif"]
      },
      backgroundImage: {
        'custom-image': "url('/assets/Bedroom.jpg')"
      }
    },
  },
  plugins: [],
}


