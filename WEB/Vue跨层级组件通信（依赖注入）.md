```
// 父组件：
import { ref, provide } from "vue";
const theme = ref("light");
provide("THEME", theme);

// 其他组件：
import { ref, provide } from "vue";
const theme = inject("THEME")
```

局限性：
1. 无法跨路由组件通信
2. 无法持久化
3. 调试困难
