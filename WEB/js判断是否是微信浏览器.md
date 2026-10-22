```
function isWeixinBrowser() {
    var ua = navigator.userAgent.toLowerCase();
    var result = (/micromessenger/.test(ua)) ? true : false;
    if (result) {
        console.log('你正在访问微信浏览器');
    }
    else {
        console.log('你访问的不是微信浏览器');
    }
    return result;
}
```
