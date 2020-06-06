const path = require('path');
module.exports = {
    entry: './src/processor.ts',
    devtool: 'inline-source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, "src")
                ],
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'processor.js',
        path: path.resolve(__dirname, 'dist'),
    },
};