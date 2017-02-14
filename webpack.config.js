var path = require('path')

module.exports = {
	entry: './src/main.js',
	output: {
		path: './dist',
		publicPath: 'dist/',
		filename: 'build.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		}, {
			test: /\.(png|jpg|git|ico)$/,
			loader: 'url-loader?limit=8192'
		},
		  {
		  	test:/\.css$/,
		  	loader:'style-loader!css-loader'
		  },
		  {
		  	test:/\.vue$/,
		  	loader:'vue-loader',
		  	options:{
		  		
		  	}
		  } 
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js'
		},
		extensions: ['.css','.js', '.vue']
	},
	//配置自动刷新,如果打开会使浏览器刷新而不是热替换
  devServer: {
    historyApiFallback: true,
    port:3000,
    hot: false,
    inline: true,
    grogress: true
  }
}
