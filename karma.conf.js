//const webpackConfig = require('./webpack.config');

const {createDefaultConfig} = require('@open-wc/testing-karma');
const merge = require('deepmerge');

module.exports = (config) => {
  config.set(
    merge(createDefaultConfig(config),
      {
        frameworks: ["jasmine", 'esm'],
        // client: {
        //   jasmine: { ui: 'tdd' },

    //     Error: 'expect' was used when there was no current spec, this could be because an asynchronous test timed out
    // at Env.expect (base/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:1971:15)
    // at expect (base/node_modules/jasmine-core/lib/jasmine-core/jasmine.js:6681:18)
    // at Context.<anonymous> (base/src/processor.spec.ts:4:9)
    // at Test.Runnable.run (base/node_modules/karma-mocha-snapshot/lib/adapter.js:14:17)

        // },
        files: [
          { pattern: 'dist/**/*.spec.js', watched: true, type: 'module' },
          // each file acts as entry point for the webpack configuration
        ],

        // preprocessors: {
        //   // add webpack as preprocessorz
        //   'src/**/*.spec.ts': ['webpack', 'sourcemap'],
        //   'src/**/*.ts': ['webpack', 'sourcemap', 'coverage'],
        // },

        autoWatch: true,
        port: 9000,
        //reporters: ['kjhtml', 'coverage'],
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity,

        plugins: [
          // load plugin
          require.resolve('karma-jasmine'),
          require.resolve('@open-wc/karma-esm'),

          // fallback: resolve any karma- plugins
          'karma-*',
        ],

        esm: {
          // if you are using 'bare module imports' you will need this option
          nodeResolve: true,
        },

        // webpack: webpackConfig,

        // webpackMiddleware: {
        //   stats: 'errors-only',
        // },
        logLevel: config.LOG_DEBUG

      }
    ))

  return config;
};