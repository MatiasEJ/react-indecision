const path = require('path');
//Entry point -> output bundle ->

module.exports = (env) => {
  const isProduction = env === 'production';
  
  return {
    
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
    devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
    devServer: {
      contentBase: path.join(__dirname,'public')
    }
  }

}


