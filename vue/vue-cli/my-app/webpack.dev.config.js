const path=require('path')
const VueLoaderPlugin=require('vue-loader/lib/plugin')
module.exports={
  entry:path.join(__dirname,'src/index.js'),
  output:{
    path:path.join(__dirname,'./dist'),
    filename:'app.js'
  },
  module:{
    rules:[
      {
        test:/\.js$/,          //匹配什么类型的文件
        loader:'babel-loader',  //使用什么加载器
        exclude:/node_modules/  //排除的文件
      },
      {
        test:/\.vue$/,
        loader:'vue-loader'
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin()
  ],
  devServer:{
    contentBase:path.join(__dirname,'./dist'),
    port:'8888',
    open:true,
    hot:true
  }
}