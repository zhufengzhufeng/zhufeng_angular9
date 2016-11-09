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
            if(data.startsWith('[')){
                books = JSON.parse(data);
            }else{
                books= [];
            }
            callback(books);
        }
    });
}
function setBooks(data,callback){
    fs.writeFile('./1.json',JSON.stringify(data),callback);
}
http.createServer(function (req,res) {
    var urlObj =  url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index1.html').pipe(res);
    }else if(/^\/book(\/\d+)?$/.test(pathname)){
        //匹配到说明走到了对应路由中 get post delete put
        //获取数据的方法
        var matcher = pathname.match(/^\/book(\/\d+)?$/)[1];
        switch (req.method){
            case 'GET':
                if(matcher){ //获取一个

                }else{ //获取所有
                    //将所有数据写入到浏览器中
                    getBooks(function (data) { //获取所有图书
                        res.end(JSON.stringify(data));
                    });
                }
                break;
            case 'POST':
                break;
            case 'PUT':
                break;
            case 'DELETE':
                if(matcher){ // /1
                    var id = matcher.slice(1);
                    getBooks(function (data) {
                        data = data.filter(function (item) {
                            return item.id!=id;
                        });
                        setBooks(data,function () {
                            res.end(JSON.stringify({}));
                        });
                    });
                }else{

                }
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


/*
* 实现增加图书的功能 book.save({name,price,count}),保存到json中需要增加一个唯一的id
* 修改图书 book.update({id:1},{id:1,name:2}) map方法
* */
