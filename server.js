const http = require('http');
const url  = require('url');
const util = require('util');
const querystring = require('querystring');

http.createServer(function(req,res){
    console.info(req.url);//  /
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<div>that’s all</div>');
}).on('connection',function(){
    console.info('连接了');
}).listen(8888);

