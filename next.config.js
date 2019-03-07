const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const images = require("remark-images");
const withMDX = require("@zeit/next-mdx")({
  extension: /\.mdx?$/,
  options: {
    mdPlugins: [images]
  }
});

const nextConfig = {
  target: "serverless"
};

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        optimizeImagesInDev: true,
        responsive: {
          adapter: require("responsive-loader/sharp"),
          sizes: [180, 360, 600, 760, 1000]
        }
      }
    ],
    [
      withMDX,
      {
        pageExtensions: ["js", "jsx", "mdx"]
      }
    ]
  ],
  nextConfig
);
