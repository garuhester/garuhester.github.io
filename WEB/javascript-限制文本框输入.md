## 1.只能输入数字(不能输入小数点)
```
<input onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')">
```

## 2.只能输入数字（能输入小数点）
```
<input onkeyup="if(isNaN(value))execCommand('undo')" onafterpaste="if(isNaN(value))execCommand('undo')">
<input name=txt1 onchange="if(/\D/.test(this.value)){alert('只能输入数字');this.value='';}">
```

## 3.只能输入英文字母和数字，不能输入中文
```
<input onkeyup="value=value.replace(/[^\w\.\/]/ig,'')">
```

## 4.只能输入数字和英文
```
<input onKeyUp="value=value.replace(/[^\d|chun]/g,'')">
```
