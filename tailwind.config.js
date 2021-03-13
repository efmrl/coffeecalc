module.exports = {
  darkMode: 'media',
  purge: {
    content: ["./src/**/*.svelte"],
  },
  theme: {
    extend: {
      colors: {
        coffee: {
          adept: "#775511",
          brown: "#4a2c2a",
          burnt: "#271b10",
          diva: "#bea88d",
          iced: "#b18f6a",
          irish: "#62422b",
          plain: "#6f4e37",
        },
        linen: "#faf0e6",
        nearwhite: "#fefefe",
        orange: {
          500: "#ff3e00",
        },
      },
      backgroundImage: (theme) => ({
        "coffee-dark": "url('/coffee-dark.jpeg')",
        "coffee-light": "url('/coffee-light.jpeg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    }
  },
  plugins: [],
};
