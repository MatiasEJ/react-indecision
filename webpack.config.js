const path = require('path');
//Entry point -> output bundle ->

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader'
              }
            },{
              test:/\.s?css$/,
              use: 
                ['style-loader', 'css-loader', 'sass-loader']
              
            }
          ]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
      contentBase: path.join(__dirname,'public')
    }
};

//loaders "tranforms files" 
