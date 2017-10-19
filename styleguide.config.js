const webpackConfig = require('react-scripts/config/webpack.config.dev.js');
const { defaultHandlers } = require('react-docgen');
const dnHandler = require('react-docgen-displayname-handler');

module.exports = {
    sections: [
    {
      content: 'README.md'
    },
    {
      name: 'Metrics',
      components: './src/graph.js'
    },
  ],
  defaultExample: true,
  title: 'Metrics Y\'all',
  showUsage: true,
  showSidebar: false,
  webpackConfig: Object.assign(webpackConfig, {
    module: Object.assign(webpackConfig.module, {
      rules: [
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(js|jsx)$/,
          use: ['babel-loader']
        }
        {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'static/media/[name].[hash:8].[ext]'
          }
        }
      ]
    })
  }),
  handlers: componentPath =>
    defaultHandlers.concat(dnHandler.createDisplayNameHandler(componentPath))
};
