var webpackConfig = require('./webpack.test.config');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/index.ts',
      'spec/**/*.ts'
    ],
    exclude: [
    ],
    preprocessors: {
      'src/index.ts': ['webpack'],
      'spec/**/*.ts': ['webpack']
    },
    webpack: webpackConfig,
    reporters: ['progress', 'coverage-istanbul'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
}