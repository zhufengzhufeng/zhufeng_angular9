## 框架和库
库提供方法供我们调用 框架是帮我们调用的（强约束）

## angularMVVM mvc
- m model数据层
- v view 视图层
- c controller控制器

## 双向数据绑定，当视图发生变化会导致数据变化 数据变化视图也会发生改变
- m model 数据层
- v view 视图层
- vm viewModel 视图模型

## 如何安装angular
npm node package manager

- 在安装前先初始化package.json
```
npm init 
``` 
- 通过npm来安装 进入当前目录
```
npm install angular 
```



> 加-g安装的只是在本地命令行下使用,不加-g才是在本地下使用

## show inexplore 在资源管理器中打开直接使用右键+在此处打开命令行
## view-toolswidnow-terminal


## angular使用步骤
- 1.引入angularjs
- 2.增加ng-app
- 3.需要双向绑定的增加ng-model
- 4.获取到页面上需要增加{{}}取值表达式
    - 防止闪烁
        - ng-bind 只能绑定一个
        - ng-bind-template 绑定多个
        - ng-cloak先隐藏 加载后再移除属性