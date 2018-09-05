const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
                exclude: /node_modules/,
                use:[
                    {loader: MiniCssExtractPlugin.loader},
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: "[local]___[hash:base64:5]"
                        }
                    },

                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test:/\.json$/,
                use:[{loader: "json-loader"}]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template:"./src/index.html",
            filename:"./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })

    ]

};