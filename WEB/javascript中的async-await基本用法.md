## 代码：
```
function show() {
	return new Promise(function(resolve,reject){
	    setTimeout(function() {
	        console.log(1);
	        resolve(1);
	    }, 2000);
	});
}

async function main() {
    await show();
    console.log(2);
}

main();
```

## 输出结果：
```
1
2
```
