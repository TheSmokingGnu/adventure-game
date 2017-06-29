const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    plugins: [
        new CopyWebpackPlugin([{from: 'src/assets/tx/player-idle.png', 
                                to: 'assets/tx/player-idle.png'},
                                {from: 'src/assets/index.html', 
                                to: 'index.html'}])
    ],
    devtool: 'inline-source-map',
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
}