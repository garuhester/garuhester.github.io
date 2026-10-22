微信网页 IOS不能使用**横杠连接**方式将字符串日期转为Date日期对象：
```
var str = "2019-10-30";
var date = new Date(str);
```
要使用斜杠("/")的方式
```
var str = "2019/10/30";
var date = new Date(str);
```
