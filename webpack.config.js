var webpack = require('webpack');

module.exports = {
	
	entry: [
		"./app/main.js"
	],

	output: {
		path: __dirname + "/build/",
		filename: "bundle.js"
	},

	// plugins: [
	// 	new webpack.optimize.UglifyJsPlugin({
	// 	    compress: {
	// 	        warnings: false
	// 	    }
	// 	})
 //    ],

	module: {
		loaders: [
			{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: "babel-loader",
				query: {
			        "presets": ["es2015", "react"]
			    }
			},
			{ 
				test: /\.css$/, 
				loader: 'style!css' 
			}
		]
	}
}