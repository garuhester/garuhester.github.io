```
function readFile(path, filename, func) {
    fs.readFile(path + "/" + filename, 'utf-8', function (err, data) {
        if (err) {
            console.log("读取失败");
        } else {
            func(data);
        }
    });
}

function writeFile(path, data, filename) {
    fs.writeFile(path + "/" + filename.split(".")[0] + "2." + filename.split(".")[1], data, function (error) {
        if (error) {
            throw error;
        } else {
            console.log("文件已保存");
        }
    });
}

//resPath源文件路径，desPath目标文件路径
function copyFile(resPath, desPath, filename) {
    readFile(resPath, filename, function (data) {
        writeFile(desPath, data, filename);
    });
}
```
