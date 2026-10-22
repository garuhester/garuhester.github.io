>推荐学习网站：http://flexboxfroggy.com

- 间距设置
```
.parent {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    .child {
        width: 20%;
    }
}
```

```
.aaa {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: -10px 0 0 -10px;
    .bbb {
        width: 20%;
        margin: 10px 0 0 10px;
    }
}
```

# 属性：

- ## justify-content：
  - flex-start：元素和容器的左端对齐。
  - flex-end：元素和容器的右端对齐。
  - center：元素在容器里居中。
  - space-between（边距小）：元素之间保持相等的距离。
  - space-around（边距大）：元素周围保持相等的距离。
---
- ## align-items：
  - flex-start：元素与容器的顶部对齐。
  - flex-end：元素与容器的底部对齐。
  - center：元素纵向居中。
  - baseline：元素在容器的基线位置显示。
  - stretch：元素被拉伸以填满整个容器。
---
- ## flex-direction：
  - row：元素摆放的方向和文字方向一致。
  - row-reverse：元素摆放的方向和文字方向相反。
  - column：元素从上放到下。
  - column-reverse：元素从下放到上。
---
- ## align-self（针对单个元素）：
  - flex-start：元素与容器的顶部对齐。
  - flex-end：元素与容器的底部对齐。
  - center：元素纵向居中。
  - baseline：元素在容器的基线位置显示。
  - stretch：元素被拉伸以填满整个容器。
---
- ## flex-wrap：
  - nowrap: 所有的元素都在一行。
  - wrap: 元素自动换成多行。
  - wrap-reverse: 元素自动换成逆序的多行。
---
- ## order：调整元素顺序
---
- ## flex-flow（缩写属性）：flex-direction    flex-wrap  
---
- ## align-content（决定行间距）：
  - flex-start: 多行都集中在顶部。
  - flex-end: 多行都集中在底部。
  - center: 多行居中。
  - space-between: 行与行之间保持相等距离。
  - space-around: 每行的周围保持相等距离。
  - stretch: 每一行都被拉伸以填满容器。
---
>注意：
1.当```flex-direction：row```（即默认情况下）时：
  ```justify-content```控制**横向**
  ```align-items```控制**纵向**
  ```align-content```控制**行**之间的距离。
2.当```flex-direction：column```时：
  ```justify-content```控制**纵向**
  ```align-items```控制**横向**
  ```align-content```控制**列**之间的距离。
