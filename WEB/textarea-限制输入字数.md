```
<textarea placeholder="请输入内容" name="" id="textarea" cols="30" rows="10"
    maxlength="50" onchange="this.value=this.value.substring(0, 50)"
    onkeydown="this.value=this.value.substring(0, 50)"
    onkeyup="this.value=this.value.substring(0, 50)"></textarea>
```

关键部分：
```
maxlength="50" 
onchange="this.value=this.value.substring(0, 50)"
onkeydown="this.value=this.value.substring(0, 50)"
onkeyup="this.value=this.value.substring(0, 50)"
```
