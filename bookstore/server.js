var http = require('http');
var url = require('url');
var fs = require('fs');
var mime = require('mime');
http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else if(/^\/books(\/\d+)?$/.test(pathname)){ // /book/\d+
        //restful风格 根据method和传入的值来判断是增删改查的哪一种
        var matcher = pathname.match(/^\/books(\/\d+)?$/)[1]; //如果matcher存在说明传递了参数   /1   /2   /199
        switch (req.method) {
            case 'GET':
                if(matcher){

                }else{
                    getBooks(function (data) {
                        res.setHeader('Content-Type','application/json;charset=utf8');
                        res.end(JSON.stringify(data));
                    });
                }
                break;
            case 'PUT':
                break;
            case 'DELETE':
                break;
            case 'POST':
                //获取传过来的请求体 req可读流
                var result = '';
                req.on('data',function (data) {
                    result+=data;
                });
                req.on('end',function () {
                    var book = JSON.parse(result); //获取数据后写入到json文件中
                    getBooks(function (data) {
                        book.id =data.length+1; //加一个id属性作为每本书唯一的标识
                        data.push(book);
                        setBooks(data,function () {
                            //增加方法需要返回增加的那一项
                            res.end(JSON.stringify(book));
                        });
                    });
                });
                break;
        }
    }else {
        fs.exists('.'+pathname,function (exists) {
            if(exists){
                res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf8');
                fs.createReadStream('.'+pathname).pipe(res);
            }else{
                res.statusCode = 404;
                res.end('');
            }
        });
    }
}).listen(3333);
//将内容写到book.json中
function setBooks(data,callback) {
    fs.writeFile('./book.json',JSON.stringify(data),callback);
}
//从book.json中读取
function getBooks(callback) {
    fs.readFile('./book.json','utf8',function (err,data) {
        var books = [];
        if(err){
            callback(books);
        }else{
            if(data.startsWith('[')){
                books = JSON.parse(data);
            }
            callback(books);
        }
    });
}


