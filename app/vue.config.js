module.exports = {
    devServer: {
      proxy: {
        '/auth': {
          target: 'http://localhost:3001/'
        },
        "/userapi": {
          target: 'http://localhost:3080/',
          pathRewrite: {'^/userapi' : '/api'}
        }
      }
    }
  }