## 指令
- 用来封装插件，或者具体实现的功能
- restrict 限制使用范围
- template/templateUrl 模板组件式指令才拥有模板 
- scope
    - true 
    - {@ = &}
- transclude
    - 保留原有指令中的内容,将内容插入到ng-transclude的属性中
- controller
    - 指令中的控制器，当前指令所在的作用域的控制器，提供子指令需要的方法
- link
    - scope,element,attrs,parentCtrl（所依赖的指令的控制器的实例）
- require
    - 依赖指令  require:^girl(先找自己指令上找不到像上找，在找不到报错) 

## ng-show,ng-hide,ng-if
- ng-show/ng-hide 操作样式的显示隐藏，不会产生作用域，如果不显示也不会导致内部指令不执行
- ng-if删除dom，会产生作用域，如果外部为false内部指令不再执行，ng-repeat
## ng-class
- ng-class={true:'show',false:'hide'}[flag]
- ng-class={show:true,hide:false}
## ng-style
- ng-style={backgroundColor:'red',fontSize:100px}
## filter
- 过滤器，不破坏原数据。对原数据显示进行过滤
- number 数字过滤器 number:2
- uppercase/lowercase 大小写过滤
- orderBy  | orderBy:'name':是否倒序
- filter | filter:{name:query}
- limitTo 限制位数
- date 格式化事件 | date:'yyyy MM dd hh mm ss'
- currency 货币过滤器
- json <pre>{{ | json}}</pre>
## 自定义过滤器
```
app.filter('filtername',function(uppercaseFilter,dateFilter,filterFilter){
    return function(input,param1,param2){
        return filterFilter(input,{name:1});
    }
});
```
## bower
- 安装
```
npm install bower -g
```
- 初始bower.json
```
bower init
```
- 指定安装目录
```
touch .bowerrc  {"direcotry":"./public"}
```
## $watch-$apply 
- $watch 监控模型的变化
- $apply 告诉视图刷新

## $on $emit $broadcast
- $on监听事件
- $emit 向父级发射事件
- $broadcast 从父级向下广播 

> emit和broadcast时 自己都能检测到事件
