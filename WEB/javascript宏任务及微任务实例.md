首先看一段代码，请写出输出结果：
```
console.log("Start");

setTimeout(function(){
  console.log("SetTimeout");
});

new Promise(function(resolve,reject){
  console.log("Promise");
  resolve();
}).then(function(){
  console.log("Then");
});

console.log("End");
```
输出结果：[宏任务及微任务实例输出结果](http://hlz.space/labs/task.html)

---

### 宏任务和微任务分类：
- 宏任务（macrotask）：主代码块，setTimeout，setInterval等（可以看到，事件队列中的每一个事件都是一个macrotask）
- 微任务（microtask）：Promise，process.nextTick等

### 运行机制：
1.执行一个宏任务（栈中没有就从事件队列中获取）
2.执行过程中如果遇到微任务，就将它添加到微任务的任务队列中
3.宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）
4.当前宏任务执行完毕，开始检查渲染，然后GUI线程接管渲染
5.渲染完毕后，JS线程继续接管，开始下一个宏任务（从事件队列中获取）

### 图解：
![](http://upload-images.jianshu.io/upload_images/2381669-a77cc16fa52309c2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 上面代码运行过程：
1. 主代码块：宏任务开始执行
2. `console.log("Start");`：同步任务，主线程，立即执行
3. 异步宏任务，等待主线程执行完毕
```
setTimeout(function(){
  console.log("SetTimeout");
});
```
4. 同步任务，主线程，立即执行
```
new Promise(function(resolve,reject){
  console.log("Promise");
  resolve();
});
```
5. 异步微任务，等待主线程执行完毕
```
.then(function(){
  console.log("Then");
});
```
6. `console.log("End");`：同步任务，主线程，立即执行
7. 主代码块执行完毕，判断是否有微任务，执行异步微任务`then()`，最后执行下一个宏任务`setTimeout()`
