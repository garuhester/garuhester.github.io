# 写法一：
```
aaa | bbb | ccc
----|------|----
ddd | eee  | fff
ggg | hhh  | iii
jjj | kkk  | lll
```
aaa | bbb | ccc
----|------|----
ddd | eee  | fff
ggg | hhh  | iii
jjj | kkk  | lll

---

#写法二：
```
| #        | 浏览器           | Node  |
| ------------- |:-------------:| -----:|
| I/O      | ✅ | ✅ |
| setTimeout   | ✅   | ✅ |
| setInterval | ✅     |    ✅ |
| setImmediate | ❌     |    ✅ |
| requestAnimationFrame | ✅     |    ❌ |
```
| #        | 浏览器           | Node  |
| ------------- |:-------------:| -----:|
| I/O      | ✅ | ✅ |
| setTimeout   | ✅   | ✅ |
| setInterval | ✅     |    ✅ |
| setImmediate | ❌     |    ✅ |
| requestAnimationFrame | ✅     |    ❌ |


