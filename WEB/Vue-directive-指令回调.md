```
Vue.directive('my-directive', {
  bind: function () {},// 指令与被绑定元素第一次绑定时触发，通常做一些事件监听的初始化
  inserted: function () {},// 绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
  update: function () {},// 被绑定元素内容发生变化时触发，可接受参数，在这里也可以进行事件监听的初始化
  componentUpdated: function () {},// 被绑定元素所在模板完成一次更新周期时调用。
  unbind: function () {}// 指令与元素解绑时触发，比如通过路由转跳页面时需要解绑指令
})
```
