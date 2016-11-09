var http = require('http');
var url = require('url');
var fs = require('fs');
var mime = require('mime');
var users = [];
http.createServer(function (req,res) {
    var urlObj =  url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathname=='/reg'){
        //响应注册的内容 读取req中的数据
        var result = '';
        req.on('data',function (data) {
            result+=data;
        });
        req.on('end',function () {
            var user = JSON.parse(result);
            user.id = new Date().getTime(); //给每一个用户增加唯一标识
            users.push(user);
            //展示给前端的最新数据列表
            res.end(JSON.stringify(users)); //返回最新的用户列表
        });
    }else if(pathname=='/getuser'){
        res.end(JSON.stringify(users));
    }else if(pathname == '/del'){
        //获取前台传过来的id
        var id = urlObj.query.id;//获取查询字符串传过来的id,在数组中移除掉当前的id
        users = users.filter(function (item) {//删除users的某一个
            return item.id!=id;
        });
        res.end(JSON.stringify({}));//删除后默认返回一个空对象即可
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
}).listen(3000,'localhost');

