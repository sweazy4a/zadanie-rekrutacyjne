const path = require ('path')

module.exports = {
  mode: 'development',
  entry: {
   main: './src/index.js',
   
  },
  output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname,'dist')
  },
  module: {
    rules:[
{
  test: /\.scss$/,
  use:[
  "style-loader",//3
  "css-loader", //2 
  "sass-loader" //1
]

}



    ]
  }

};