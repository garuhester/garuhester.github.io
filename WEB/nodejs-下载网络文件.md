```
var request = require('request');
var fs = require('fs');

function download(uri, filename, callback){
  var stream = fs.createWriteStream(filename);
  request(uri).pipe(stream).on('close', callback);
}

download("http://.../demo.zip", "demo.zip", function(){
  console.log("下载成功");
});
```
