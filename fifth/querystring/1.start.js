var querystring = require('querystring');  //解析查询字符串的，用法像json.parse,json.stringify
//{ username: '123', password: '321' }
var obj = querystring.parse('username=!123&&password=!321','&&','=!');
console.log(obj);
var str = querystring.stringify({ username: '123', password: '321' },'$$','=!');
console.log(str);