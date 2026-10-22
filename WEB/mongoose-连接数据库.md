## 代码
```
var mongoose = require('mongoose');
var DB_URL = "mongodb://localhost:27017/blog";

//connect mongodb
mongoose.Promise = global.Promise;
mongoose.connect(DB_URL);

//mongodb status
mongoose.connection.on('connected', function() {
    console.log("mongodb connected success");
});
mongoose.connection.on('error', function(err) {
    console.log("mongodb connected error " + err);
});
mongoose.connection.on('disconnected', function() {
    console.log("mongodb disconnected");
});
```
