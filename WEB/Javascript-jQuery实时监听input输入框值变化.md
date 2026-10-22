JQuery：
```
$("#input").bind("input propertychange",function(event){
       console.log($("#input").val())
});
```

Javascript：
```
<input type="text" oninput="show1(event)" onpropertychange="show2(event)" value="" />
<script type="text/javascript">
// Firefox, Google Chrome, Opera, Safari, Internet Explorer from version 9
function show1(event) {
    console.log(event.target.value);
}
// Internet Explorer
function show2(event) {
    if (event.propertyName.toLowerCase () == "value") {
        console.log(event.srcElement.value);
    }
}
</script>
```
