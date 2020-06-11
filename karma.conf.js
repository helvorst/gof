const webpackConfig = require('./webpack.config');

module.exports = (config) => {
  config.set({
    frameworks: ["jasmine"],
    files: [
      { pattern: 'src/**/*.ts', watched: true },
      // each file acts as entry point for the webpack configuration
    ],

    preprocessors: {
      // add webpack as preprocessor
      'src/**/*.spec.ts': ['webpack', 'sourcemap'],
      'src/**/*.ts': ['webpack', 'sourcemap', 'coverage'],
    },

    autoWatch: true,
    port: 9000,
    reporters: ['kjhtml', 'coverage'],
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity,

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only',
    },
    //logLevel: config.LOG_DEBUG
  });
};