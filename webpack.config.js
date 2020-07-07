var path = require('path');

module.exports = {
    entry: "./miniProject/index.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            // /\.css
        }]
    }
}