```
var modeling = bpmnModeler.get("modeling");
var elementFactory = bpmnModeler.get("elementFactory");
var elementRegistry = bpmnModeler.get("elementRegistry");

// 总节点
var ProcessElement = elementRegistry.find((el) => el.type === "bpmn:Process")

// 创建开始节点
var startEvent = elementFactory.createShape({
    type: "bpmn:StartEvent",
    x: 0,
    y: 0,
});

// 创建用户任务节点
var userTask = elementFactory.createShape({
    type: "bpmn:UserTask",
    x: 0,
    y: 0,
});

// 添加到画布上
modeling.createShape(startEvent, { x: 200, y: 200 }, ProcessElement);
modeling.createShape(userTask, { x: 350, y: 200 }, ProcessElement);

// 连接开始节点和用户任务节点
modeling.connect(startEvent, userTask);
```

效果：
![](https://upload-images.jianshu.io/upload_images/2381669-3b1c431654278f27.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
