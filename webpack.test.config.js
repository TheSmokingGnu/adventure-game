const productionConf = require('./webpack.config.js');

productionConf.module.loaders.push(
    // Post loader that sets up coverage
    {
        test: /\.tsx?$/,
        loader: 'istanbul-instrumenter-loader',
        exclude: /spec|node_modules|\.spec\.ts$/,
        enforce: 'post'
    })

// Node library needed for 
productionConf.node = {fs: 'empty'}

module.exports = productionConf;

