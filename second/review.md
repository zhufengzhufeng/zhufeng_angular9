## angular
- ng-app 启动angular 指定模块名字$rootScope
- ng-controller
    - 创建模块
    ```
    var app = angular.module('appModule',[]);
    app.controller('myCtrl',['$scope',function($scope){
    }])
    ```
## 控制器的特点
- 买一控制器送一个作用域
- 控制器和DOM标签平齐
- 不能复用，不能操作dom
- 可以将带有控制器的标签嵌套
## {{}} ng-bind ng-bind-template ng-cloak

## ng-repeat
- 要循环谁，就把数据写在谁身上
- 数组track by $index ng-repeat = '(key,data) in datas track by $index'

> 页面上绑定的数据是当前作用域下的,如果双向绑定的数据不存在则会创建

## 事件 onclick ng-click onmouseover  ng-mouseover