var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: "./index.js",
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: __dirname,
        filename: "build.js"
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
    }
};
