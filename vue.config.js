module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/myvue/'
      : '/'
  ,
  pwa: {
    iconPaths: {
      favicon32: 'd-favicon.ico',
      favicon16: 'd-favicon.ico',
      appleTouchIcon: 'd-favicon.ico',
      maskIcon: 'd-favicon.ico',
      msTileImage: 'd-favicon.ico'
    }
  }
}
