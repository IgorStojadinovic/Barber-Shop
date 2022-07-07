module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('./assets/images/home-mobile.jpg')",
        homelg: "url('./assets/images/home-bg.jpg')",
        services: "url('./assets/images/services-bg.png')",
        gallery: "url('./assets/images/contact-bg.png')",
        contact: "url('./assets/images/contact-bg.png')",
      },
      colors: {
        transparent: "rgba(0, 0, 0, 0.31)",
      },
    },
  },
  plugins: [require("daisyui")],
};
