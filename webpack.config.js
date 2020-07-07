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
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', {
                        'targets' : {
                            'browsers': ["last 2 versions"]
                             
                        },
                        "debug": true
                    }]
                }
            }
        }]
    }
}