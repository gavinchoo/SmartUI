# Section 布局
----
### 概述
分块布局，标题，可展开、收起子内容。
### 基础布局

::: demo
```html

<smart-section title="展开收起" expendable>
  <smart-text-cell label="姓名" editable></smart-text-cell>
  <smart-text-cell label="电话" showarrow></smart-text-cell>
  <smart-mutil-line-text-cell
      label="描述"
      editable
      required
  ></smart-mutil-line-text-cell>
</smart-section>

```

:::

### Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题 | String | — | 0 |
| required | 显示必填*号标记 | Boolean | — | false |
| expendable | 是否可以点击展开，当为true时， 右侧显示展开图标 | Boolean | - | false |
| empty | 数据是否为空， 当为true时，右侧显示“暂无” | Boolean | - | false |
