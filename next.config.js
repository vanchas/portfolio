const withPWA = require('next-pwa')
const withImages = require('next-images')

const settings = {
  env: {
  },
  devIndicators: {
    autoPrerender: false,
  },
  pwa: {
    dest: 'public',
  },
};

module.exports = withPWA(withImages(settings));
