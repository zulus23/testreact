const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: '#sourcemap',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test:/\.html$/,
                use: [{loader: "html-loader"}]
            },
            {
                test:/\.css$/,
                use:[{loader: "style-loader!css-loader"}]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template:"./src/index.html",
            filename:"./index.html"
        })
    ]

};