URL：`http://127.0.0.1:8080/index.html?name=abc&age=13#public/aaa`
#### 1、window.location.href(设置或获取整个 URL 为字符串)
var test = window.location.href;
alert(test);
返回：`http://127.0.0.1:8080/index.html?name=abc&age=13#public/aaa`

#### 2、window.location.protocol(设置或获取 URL 的协议部分)
var test = window.location.protocol;
alert(test);
返回：`http:`

#### 3、window.location.host(设置或获取 URL 的主机部分)
var test = window.location.host;
alert(test);
返回：`127.0.0.1:8080`

#### 4、window.location.port(设置或获取与 URL 关联的端口号码)
var test = window.location.port;
alert(test);
返回：`8080`（默认是80）

#### 5、window.location.pathname(设置或获取与 URL 的路径部分（就是文件地址）)
var test = window.location.pathname;
alert(test);
返回：`/index.html`

#### 6、window.location.search(设置或获取 href 属性中跟在问号后面的部分)
var test = window.location.search;
alert(test);
返回：`?name=abc&age=13`

>获得查询（参数）部分，除了给动态语言赋值以外，我们同样可以给静态页面，并使用javascript来获得相信应的参数值。

#### 7、window.location.hash(设置或获取 href 属性中在井号“#”后面的分段)
var test = window.location.hash;
alert(test);
返回：`#public/aaa`
