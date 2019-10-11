# ImageSelect 图片选择
----
### 概述
图片选择，支持图库选择，拍照。
### 基础布局
::: demo
```html

<smart-section title="现场照片" class="mb10">
  <smart-image-select
    slot="section-content"
    class="mt20"
    read-only
  ></smart-image-select>
</smart-section>

```

:::

### Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| readOnly | 只预览不可编辑 | Boolean | — | false |
| max | 最大选择图片数量 | number | — | 9 |
| fileList | 图片列表数量 | Array | - | [] |