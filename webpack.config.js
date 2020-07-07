const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'App.js'),

    mode: "development",


    resolve: {
        extensions: ['*', '.js', '.jsx', '.css']
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({title: 'React Redux Playground'}),
        new CleanWebpackPlugin()
    ]
}