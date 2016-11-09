var http = require('http');//创建http的模块
var url = require('url');//处理请求路径的模块
var fs = require('fs');//file system 主要是操作文件的
var mime = require('mime');//检查文件类型
http.createServer(function (req,res) {
    //当浏览器发送请求时执行此函数
    //后端路由，通过路径响应不同的内容
    var urlObj =  url.parse(req.url,true);//将请求路径的查询字符串转换成对象格式指定true
    //console.log(urlObj.query); 获取查询参数
    var pathname = urlObj.pathname;//获取的是请求路径
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else{
        //第一步我们访问html是可能加载其他的文件，会在次向服务器端发送请求，如果服务器端有文件则返回如果没有，404
        /*
            npm init -y    npm install mime --save
        */
       fs.exists('.'+pathname,function (exists) {//判断文件是否存在
           if(exists){
                //读出文件设置响应头，返回给客户端  mime查看类型
               res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf8');
               fs.createReadStream('.'+pathname).pipe(res);
           }else{
                res.statusCode = 404;
                res.end('');
           }
       })
    }
}).listen(3000,'localhost');
/*
var STATUS_CODE = require('_http_server').STATUS_CODES;
console.log(STATUS_CODE);*/
