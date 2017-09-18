const path=require('path');

module.exports={
	entry:'./app/index.js',
	output:{
		path:path.resolve(__dirname,'build'),
		// filename:'bundle.js',
		 filename: '[name].[chunkhash].js',
		 publicPath: 'build/'
	},
	module:{
		rules:[
         {
         	test:'/\.js$/',
         	use:'babel-loader',
         	exclude:'/node_modules/'
         },
          {
            // 图片格式正则
                test: /\.(png|jpe?g|gif|svg|jpg)(\?.*)?$/,
                use: [
                  {
                    loader: 'url-loader',
                    // 配置 url-loader 的可选项
                    options: {
                    // 限制 图片大小 10000B，小于限制会将图片转换为 base64格式
                      limit: 10000,
                    // 超出限制，创建的文件格式
                    // build/images/[图片名].[hash].[图片格式]
                      name: 'images/[name].[ext]'
                   }
                  }
                ]
            },
           {
            test: /\.css$/,
            use: ['style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true
                       }
                }
            ]
        },

		]
	},
	 plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    // // vendor 的意义和之前相同
    // // manifest文件是将每次打包都会更改的东西单独提取出来，保证没有更改的代码无需重新打包，这样可以加快打包速度
    //   names: ['vendor', 'manifest'],
    //   // 配合 manifest 文件使用
    //   minChunks: Infinity
    // })
  ]
}