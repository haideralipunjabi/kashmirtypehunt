// next.config.js
const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
// const cache = require("./cache")

module.exports = withPlugins([
  [
    withPWA,
    {
      pwa: {
        dest: "public",
      },
    },
  ],
],{
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });
        return config;
    },
    images: {
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384,400,512,800,1024],
    }
});