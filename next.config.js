const { NODE_ENV } = process.env;

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  },
  assetPrefix: NODE_ENV === 'debug' ? '/' : '/food-calender',
}