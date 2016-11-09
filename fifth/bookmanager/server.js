var http = require('http');
var url = require('url');
var fs = require('fs');
var mime = require('mime');
function getBooks(callback) {
    fs.readFile('./1.json','utf8',function (err,data) { //读取出json的文件内容，默认为字符串格式
        var books = [];
        if(err){
            callback(books);
        }else{
            try {
                books = JSON.parse(data);
            }catch(e){
                books = [];
            }
            callback(books);
        }
    })
}
function setBooks(data,callback) {

}
setBooks([{name:'angularjs'}],function () {
    console.log('设置成功');
});
http.createServer(function (req,res) {
    var urlObj =  url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else if(/^\/user(\/\d+)?$/.test(pathname)){
        //匹配到说明走到了对应路由中 get post delete put
        //获取数据的方法
        var matcher = pathname.match(/^\/user(\/\d+)?$/)[1];
        switch (req.method){
            case 'GET':
                if(matcher){ //获取一个

                }else{ //获取所有
                   getBooks(function (data) {
                       console.log(data);
                   });
                }
                break;
            case 'POST':
                break;
            case 'PUT':
                break;
            case 'DELETE':
                break;
        }



    }else{
       fs.exists('.'+pathname,function (exists) {
           if(exists){
               res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf8');
               fs.createReadStream('.'+pathname).pipe(res);
           }else{
                res.statusCode = 404;
                res.end('');
           }
       })
    }
}).listen(3333,'localhost');

