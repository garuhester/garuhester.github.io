```
// 后台进程
const {ipcMain} = require('electron')
ipcMain.on('create', (event, person) => {
  console.log('creating', person)    // 输出："creating harttle"
  event.sender.send('born', person)
});
 
// 渲染进程
const {ipcRenderer} = require('electron')
ipcRenderer.on('born', (event, person) => {
  console.log(person, 'born')       // 输出 "harttle born"
});
ipcRenderer.send('create', 'harttle')
```
