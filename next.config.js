const images = require('remark-images');

const withMDX = require('@zeit/next-mdx')({
  options: {
    mdPlugins: [images]
  }
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx']
});
