//const webpackConfig = require('./webpack.config');

const {createDefaultConfig} = require('@open-wc/testing-karma');
const merge = require('deepmerge');

module.exports = (config) => {
  config.set(
    merge(createDefaultConfig(config),
      {
        frameworks: ['esm', 'mocha', 'chai'],
        client: {
          mocha: { ui: 'tdd' },
        },
        files: [
          // need to transpile ts->js to dist folder by tsx
          { pattern: 'dist/**/*.test.js', watched: true, type: 'module' },
        ],

        autoWatch: true,
        port: 9000,
        //browsers: ['Chrome'],
        //singleRun: false,
        //concurrency: Infinity,

        plugins: [
          require.resolve('@open-wc/karma-esm'),

          // fallback: resolve any karma- plugins
          'karma-*',
        ],

        esm: {
          // if you are using 'bare module imports' you will need this option
          nodeResolve: true,
        },
        logLevel: config.LOG_DEBUG

      }
    ))

  return config;
};