## 代码
参数：
```pageSize```：一页的总数
```currentPage```：当前的页数
```skipNum```：跳过的数量
```arr```：数组

返回值：
```newArr```分页后的数组
```
var pagination = function(pageSize, currentPage, arr) {
    var skipNum = (currentPage - 1) * pageSize;
    var newArr = (skipNum + pageSize >= arr.length) ? arr.slice(skipNum, arr.length) : arr.slice(skipNum, skipNum + pageSize);
    return newArr;
}
```
