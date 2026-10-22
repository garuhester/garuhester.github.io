## 代码：
```
function format(num) {
    num = num + ''; //数字转字符串  
    var str = ""; //字符串累加  
    for (var i = num.length - 1, j = 1; i >= 0; i--, j++) {
        if (j % 3 == 0 && i != 0) { //每隔三位加逗号，过滤正好在第一个数字的情况  
            str += num[i] + ","; //加千分位逗号  
            continue;
        }
        str += num[i]; //倒着累加数字  
    }
    return str.split('').reverse().join(""); //字符串=>数组=>反转=>字符串  
}
```
## 效果：
```
console.log(format(1000000000)); // 1,000,000,000
```
![](http://upload-images.jianshu.io/upload_images/2381669-f69e79a38fef3491.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
