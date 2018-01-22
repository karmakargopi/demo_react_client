var path = require('path');
var webpack = require('webpack');

module.exports = {

    context: path.resolve(__dirname, 'src') + '/app',
    // entry point setting 
    entry: ['./index.js'],
    
    // output setting 
    output :  { 
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.html$/,
                loader: "file-loader?name=[name].[ext]",
            },
            {
                test: /\.css$/, 
                loader: "style-loader!css-loader" 
            },
            { 
                test: /\.png$/, 
                loader: "url-loader?limit=100000" 
            },
            { 
                test: /\.jpg$/, 
                loader: "file-loader" 
            }
        ]
      },
      devServer: {
            historyApiFallback: true
        }
};
