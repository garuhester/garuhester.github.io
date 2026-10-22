## 方法一：
```
document.getElementById('form').action = "/upload";
document.getElementById("form").submit();
```

## 方法二：
```
var form = document.getElementById('form'),
    formData = new FormData(form);
$.ajax({
    url: "/uploadTemplate",
    type: "post",
    data: formData,
    processData: false,
    contentType: false,
    success: function (res) {
        console.log(res);
    }
});
```
