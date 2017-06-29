var webpackConfig = require('./webpack.test.config');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'spec/**/*.ts'
    ],
    // When assets are requested point to the source
    proxies: {
      '/assets/': 'src/assets'
    },
    exclude: [
    ],
    preprocessors: {
      'spec/**/*.ts': ['webpack']
    },
    webpack: webpackConfig,
    reporters: ['progress', 'coverage-istanbul'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
}