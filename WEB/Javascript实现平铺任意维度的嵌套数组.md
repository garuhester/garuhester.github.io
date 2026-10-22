```
function flattenArray(arr) {
    const flattened = [].concat(...arr);
    return flattened.some(item => Array.isArray(item)) ?
        flattenArray(flattened) : flattened;
}
const arr = [11, [22, 33],
    [44, [55, 66, [77, [88]], 99]]
];
const flatArr = flattenArray(arr);
console.log(flatArr);//=> [11, 22, 33, 44, 55, 66, 77, 88, 99]
```
