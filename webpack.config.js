'use strict';

const path = require('path');

module.exports = {
    entry: {
        game: './app/main',
        phaser: './node_modules/phaser/build/phaser'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'public', 'dist')
    },

    // devtool: '#source-map',

    module: {
        loaders: [
            {
                test: /phaser\.js$/,
                loader: 'script-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};
