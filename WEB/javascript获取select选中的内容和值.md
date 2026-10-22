## 代码：
html：
```
<select name="" id="sel">
	<option value="1">a</option>
	<option value="2">b</option>
	<option value="3">c</option>
	<option value="1">d</option>
</select>
<button onclick="get()">get</button>
```
javascript ：
```
function get(){
	var obj = document.getElementById('sel');
	console.log(obj.value);//选中值
	console.log(obj.options[obj.selectedIndex].text);//选中内容
}
```
