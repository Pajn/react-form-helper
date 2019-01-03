const rehypePrism = require('@mapbox/rehype-prism')
const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx$/,
  options: {
    hastPlugins: [rehypePrism],
  },
})

module.exports = withMDX({
  assetPrefix:
    process.env.NODE_ENV === 'production' ? '/react-form-helper' : '',
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
})
