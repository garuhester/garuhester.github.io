
html:
```
<div id="box"></div>
```

js:
```
var dom = document.getElementById('box');
var clickEvent = document.createEvent("MouseEvents");
clickEvent.initEvent('click',false,false);
dom.dispatchEvent(clickEvent);
```
