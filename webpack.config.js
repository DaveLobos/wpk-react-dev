const webpack = require('webpack');

module.exports = [{
  name:'bundle',
  entry:`${__dirname}/src/bundle.jsx`,
  output:{
    path:`${__dirname}/public/js`,
    publicPath:'/js',
    filename:`bundle.js`,
  },
  module:{
    rules:[
      {
        test:/\.jsx$/,
        loader:'babel-loader',
        options:{
          presets:['@babel/preset-react', '@babel/preset-env']
        }
      },
      {
        test:/\.css$/,
        use:['style-loader', 'css-loader']
      }
    ]
  },
  devServer:{
    static:{
      directory:`${__dirname}/public`,
    }
  }
}];
