[1,2,3].forEach(function (item) {});
// 过滤  将数组中的不需要的过滤掉
var new_arr = [1,2,3,4,5,6,7].filter(function (item,index) {
    return item !=2; //为true的保留 为false删除
});
console.log(new_arr);
//返回找到的那一项 如果返回true表示找到了
var arr = [{name:'zfpx',age:8},{name:'zfpx1',age:9},{name:'zfpx2',age:10}];
var a  = arr.find(function (item,index) {
    return item.age ==9;
});
console.log(a);
//map 方法 映射成一个新的数组
['<li>苹果</li>','<li>橘子</li>','<li>香蕉</li>'];
var newArr = ['苹果','橘子','香蕉'].map(function (item,index) {
    return '<li>'+item+'</li>';
});
console.log(newArr);