# webpack-step
webpack-step


- webpack-cli 解析用户传递的参数

- webpack-merge 主要用来合并文件 base&dev, base&prod

- webpack-dev-server 不会产生实体文件

--------
## loader 的用法
- 执行顺序：从下往上，从右向左

### 处理css

- style-loader 把css文件插入到head 标签中
- css-loader  解析@import 路径
- less-loader 把less->css

| 后缀    | 安装包   | loader|
| :----- | :-------:| :------:|
| .scss| node-sass|sass-loader|
| .less|less|less-loader|
| .stylus|stylus|stylus-loader|
