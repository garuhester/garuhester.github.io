#纯html中：
- #父html调用子iframe内方法： 
```
document.getElementById("iframe").contentWindow.func(data1,data2...);
 ```

- #子Iframe中调用父html中方法：
```
parent.func(data1,data2...)
```
---
#VUE中：
- #父html调用子iframe内方法： 
```
this.$refs.iframe.contentWindow.func(data1,data2...);
 ```

- #子Iframe中调用父html中方法：
```
//父vue页面中映射方法
created() {
  window["func"] = () => {
}
//子iframe
parent.func(data1,data2...)
```
