- setTimeout(function,time)是超时调用，即在时间大于等于time后调用function
- setInterval(function,time)是间歇调用，每隔time调用一次function

setInterval有一个问题就是：
**如果定时器的function的运行时间大于了time，导致还没有执行完成，下一个function就添加到了队列中，最后function就连续执行了多次，中间没有间隔时间。**

---

下面使用setTimeout来代替setInterval：
```
setTimeout(function(){
	console.log(1);
	setTimeout(arguments.callee,500);
},500);
```
这样就能保证前一个定时器中的function执行完之前，不会向队列中插入新的定时器，并且在前一个定时器执行完后，能够等待的时间间隔。
