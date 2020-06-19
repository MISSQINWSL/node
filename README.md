# node
 关于node的基础样例
在菜鸟教程上初次接触node.js，网址为：https://www.runoob.com/nodejs
并且按照上面给的样例自己试着写了一遍，每个知识点都涵盖进了注释里面，可能不全面，建议自己上菜鸟浏览
每个样例都能成功运行，前提是已经安装了node.js和一些必需的模块
样例都是很简单的，总体来说初次接触node.js语法不困难，希望在日后的项目中能够充分使用node.js中的各个模块和对应方法，如果项目实现了的话也会发布的。

bug总结：
1.在运行express-post时，会报这样的一个错：找不到模块body-parser，但是查询了之后发现，明明在 node_modules文件夹下是安装了body-parser的，并且当我使用命令$npm install body-parser也会显示已经重名了，观察了之后，其实这个body-parser模块是跟着express一起被安装的，它是附带的。我也尝试过把它uninstall然后再次安装该模块，但是这个卸载命令并不能把body-parser去掉。百思不得其解，最后在一篇博客上找到答案（链接为https://blog.csdn.net/qq_42694575/article/details/81137324，侵删），在node_modules文件夹下，把命令从$npm install body-parser改为$npm install body-parser -g，就显示正常安装，并且代码也跑得通了。
