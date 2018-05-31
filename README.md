# server-test
试试node搭的server


# learn what
引入四个node自带模块，http,url,util,querystring，没有使用express

# 监听req请求(http模块)
## 第一种 index.js
var server = new http.Server();
server.on('request',function(req,res){})
## 第二种 server.js  ( .on('connection',function) 返回server对象,所以可以再点)
http.createServer(function(req,res){}).listen(8888);

# 处理路由访问的url(url模块)
访问127.0.0.1:8888 打印req.url，console.info(req.url)  打印出 /
访问127.0.0.1:8888/index 打印req.url，console.info(req.url)  打印出 /index
访问127.0.0.1:8888/index 打印url.parse(req.url,true),结果是:
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '',
  query: {},
  pathname: '/index',
  path: '/index',
  href: '/index'
}
根据不同的路由，进入不同的if   index/postData

# 设置响应头
res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
res.writeHead(200,{'Content-Type':'application/json, text/plain, */*'});
第一个参数，HTTP状态码
第二个参数:
1.设置浏览器编码方式uff-8
2.设置处理方式，常用的还有
json : application/json
html : text/html
text : text/plain   (就算res.write('<h1>hello world</h1> \n'))  也会整段字符串打印出来，不编译html代码

# 当请求结束之后，一定要调用res.end()方法，否则客户端无法回调一直处理请求状态，直至超时

# 处理post和get
## get获得参数可以直接监听url的参数
## post要获得参数，
可以通过同时监听   //参考index.js
<li>.on('data') //监听请求的data</li>
<li>.on('end')  //监听请求结束</li>

可以通过querystring模块的parse ，来parse成对象的形式









