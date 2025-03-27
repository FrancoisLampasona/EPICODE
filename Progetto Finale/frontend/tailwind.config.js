// tailwind.config.js
module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
      extend: {
        backgroundImage: {
          "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
          "mobile-home": "url('./assets/HomePageGraphic.png')",
        },
        fontFamily: {
          dmsans: ["DM Sans", "sans-serif"],
          montserrat: ["Montserrat", "sans-serif"],
          custom: ["MyCustomFont", "sans-serif"],
          prova: ["Boldonse", "sans-serif"],
        },
        content: {
          evolvetext: "url('./assets/EvolveText.png')",
          abstractwaves: "url('./assets/AbstractWaves.png')",
          sparkles: "url('./assets/Sparkles.png')",
          circles: "url('./assets/Circles.png')",
        },
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
    },
    plugins: [],
  };
  