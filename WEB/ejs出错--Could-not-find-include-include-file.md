解决方法（ejs的options中传入filename）：
```
var path = "/src/demo1.ejs";
var renderData = this.$ejs.render(this.$fs.readFileSync(path, "utf-8"), {
    filename: path,
});
```
```
<%- include("./demo2.ejs") %>
```
