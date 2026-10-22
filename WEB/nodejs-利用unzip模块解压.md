```
var unzip = require("unzip");
var fs = require('fs');

var extract = unzip.Extract({ path: '/demo.zip' });
extract.on('finish', function () {
	console.log("解压完成!!");
});
extract.on('error', function (err) {
	console.log(err);
});
fs.createReadStream('./demo').pipe(extract);
```
