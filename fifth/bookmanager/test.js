/*
var reg = /^\/user(\/\d+)?$/;
/!*var result = reg.exec('/user');
console.log(result[1]);*!/
var matcher = '/user'.match(reg);
console.log(matcher);*/
var fs = require('fs');
function setBooks(data,callback){
    fs.writeFile('./1.txt',JSON.stringify(data),callback);
}
setBooks([{name:1}],function () {
    console.log('写入成功');
});
function getBooks(callback) {
    fs.readFile('./1.txt','utf8',function (err,data) {
        var books= [];
        if(err) {
            callback(books);
        }else{
            if(data.startsWith('[')){
                books = JSON.parse(data);
            }else{
                books= [];
            }
            callback(books);
        }
    })
}
getBooks(function (data) {
    console.log(data); //[]
});
