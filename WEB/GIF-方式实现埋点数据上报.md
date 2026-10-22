优点：
1.gif图片格式体积小， 可使用1px*1px的空白gif图片
2.图片请求方式不会出现跨域问题
```
<button onclick="checkPoint">haorooms</button>
<script>
  function checkPoint(){
    new Image().src = './img.gif?name=hester&num='+Math.random() 
  }
</script>
```
