var reg = /^\/user(\/\d+)?$/;
/*var result = reg.exec('/user');
console.log(result[1]);*/
var matcher = '/user'.match(reg);
console.log(matcher);