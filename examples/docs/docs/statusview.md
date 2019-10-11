# StatusView 状态显示页面
----
### 概述
状态显示页面。
### 基础布局

::: demo
```html

<smart-status-view
  status="loading"
  @refresh="onRefresh"
></smart-status-view>

```

:::

### Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| status | 状态 | loading/empty/failed | — | loading |
| message | 数据状态显示内容 | string | — | 这里暂时没有内容哦/数据加载失败 |

### Event
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|refresh         |点击刷新回调方法| —  |