const http = require('http');
const url  = require('url');
const util = require('util');
const querystring = require('querystring');

var server = new http.Server();

server.on('request',function(req,res){

    // console.log(req.httpVersion);//http版本1.0 或者 1.1
    // console.log(req.headers);
    // console.log(req.method);//post get

    // console.info(util.inspect(url.parse(req.url,true)));

    console.info(url.parse(req.url,true));
    /**
     * url.parse(req.url,true)=>
     * Url {protocol: null,slashes: null,auth: null,host: null,port: null,hostname: null,hash: null,search: '',query: {},pathname: '/postData',path: '/postData',href: '/postData' }
     *
     */
    var postStr = '';
    if(url.parse(req.url,true).pathname == '/index'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>hello world</h1> \n');
        res.write('<form enctype="text/plain" method="post" action="http://127.0.0.1:8888/postData"><input type="text" name="id" value="1"/> <input type="submit" value="提交"/></form> \n');

        res.end('<div>that’s all</div>');
    }else if (url.parse(req.url,true).pathname == '/postData'){
        res.writeHead(200,{'Content-Type':'application/json, text/plain, */*'});
        req.on('data',function(chunk){
            postStr+=chunk;
        });
        req.on('end',function(){
            console.info(postStr);
            var post  =  querystring.parse(postStr);
            //向前端返回字符串
            res.end(util.inspect(post));
        })

    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end('404了');
    }



})

server.on('connection',function(){
    console.info('连接了');
})

server.on('close',function(){
    // console.info('server will close');
});

// server.close();
server.listen(8888);

