// this file uses vue built in proxy support to
// allow connections to api running on localhost
// with different port (on dev) bypassing any
// cors issues and supporting different envs

// this is actually webpack config, vue uses
// webpack devServer behind the scenes for dev env
module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.coffee$/,
          use: ['coffee-loader'],
        },
      ],
    },
  },
  devServer: {
    proxy: {
      '/api/': {
        target: 'http://localhost:8081',
        changeOrigin: true,
      },
    },
  },
};
