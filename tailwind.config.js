module.exports = {
  purge: process.env.NODE_ENV === 'production' && {
    content: ['./src/**/*.svelte', './src/**/*.html', './src/**/*.css', './index.html'],
    options: {
      whitelistPatterns: [/svelte-/],
      defaultExtractor: (content) => {
        const regExp = new RegExp(/[A-Za-z0-9-_:/]+/g);
        const matchedTokens = [];
        let match = regExp.exec(content);
        while (match) {
          if (match[0].startsWith('class:')) {
            matchedTokens.push(match[0].substring(6));
          } else {
            matchedTokens.push(match[0]);
          }
          match = regExp.exec(content);
        }
        return matchedTokens;
      },
    },
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
      },
      backgroundImage: theme => ({
          "coffee-dark": "url('coffee-dark.jpeg')",
          "coffee-light": "url('coffee-light.jpeg')",
      }),
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
};
