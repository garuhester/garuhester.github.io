方法一：
```
this.setAllExpand1(true); // 全部展开

setAllExpand1(state) {
    for (let i = 0; i < this.$refs.tree.store._getAllNodes().length; i++) {
        this.$refs.tree.store._getAllNodes()[i].expanded = state;
    }
},
```

方法二：
```
this.setAllExpand2(true); // 全部展开

setAllExpand2(state) {
    var nodes = this.$refs.tree.store.nodesMap;
    for (var i in nodes) {
        nodes[i].expanded = state;
    }
},
```
