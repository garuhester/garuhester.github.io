tool.wxs:
```
function indexOf(arr, value) {
    if (arr.indexOf(value) < 0) {
        return false;
    } else {
        return true;
    }
}
module.exports.indexOf = indexOf;
```

index.wxml:
```
<wxs src="../../utils/WxmlFunc.wxs" module="tools" />

<view>{{tools.indexOf(arr, 1) ? 'yes' : 'no'}}</view>
```
