const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: 'js/app.js',
        publicPath: "/public/",

    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader"]
                })
            },
            {
                test: /\.s[ac]ss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]',
                        publicPath: "../",
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'font/[name].[ext]',
                        publicPath: "../",

                    }
                }]
            },
            {
                test: /\.(svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'svg/[name].[ext]',
                        publicPath: "../",

                    }
                }]
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/styles.css"),
    ]
}