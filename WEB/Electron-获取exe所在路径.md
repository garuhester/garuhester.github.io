### Index.html 中获取方式：
```
<script>
const { remote } = require('electron');
var path = require('path');
var exePath = path.dirname(remote.app.getPath('exe'));
console.log(exePath);
</script>
```

### Index.js 中获取方式
```
const { app } = electron;
var path = require('path');
var exePath = path.dirname(app.getPath('exe'));
console.log(exePath);
```
