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
  webpackConfig,
  handlers: componentPath =>
    defaultHandlers.concat(dnHandler.createDisplayNameHandler(componentPath))
};
