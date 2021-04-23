const path = require('path');

module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-css-modules-preset'
  ],
  webpackFinal: async config => {
    config.resolve = {
      alias: {
        '@components': path.resolve(__dirname, '../components'),
        '@qraphql': path.resolve(__dirname, '../graphql'),
        '@hooks': path.resolve(__dirname, '../hooks'),
        '@pages': path.resolve(__dirname, '../pages'),
        '@public': path.resolve(__dirname, '../public'),
        '@styles': path.resolve(__dirname, '../styles'),
        '@utils': path.resolve(__dirname, '../utils')
      }
    };
    return config;
  }
};
