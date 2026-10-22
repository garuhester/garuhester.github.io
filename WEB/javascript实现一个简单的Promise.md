## 代码：
```
function Promise(creator){
	this.status = "pending";
	this.reason = null;
	this.data = null;

	const _this = this;

	var resolve = function(data){
		if(_this.status == "pending"){
			_this.data = data;
			_this.status = "resolved";
		}
	}

	var reject = function(e){
		if(_this.status == "pending"){
			_this.reason = e;
			_this.status = "rejected";
		}
	}

	creator(resolve, reject);
}

Promise.prototype.then = function(res,rej){
	const _this = this;
	if(_this.status == "resolved"){
		res(_this.data);
		return ;
	}
	if(_this.status == "rejected"){
		res(_this.reason);
		return ;
	}
}
```

## 调用：
```
new Promise(function(resolve, reject){
	resolve("hello world");
}).then(function(data){
	console.log(data);
});
```

## 输出：
```
> hello world
```
