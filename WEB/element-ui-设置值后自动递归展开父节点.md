```
this.expandParents(this.$refs.tree.store.nodesMap[100].parent);

expandParents(node) {
    node.expanded = true;
    if (node.parent) {
        this.expandParents(node.parent);
    }
},
```
