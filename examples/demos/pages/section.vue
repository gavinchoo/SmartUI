<template>
  <demo-page title="Section 布局">
    <smart-section title="默认">
      <smart-text-cell label="姓名" editable></smart-text-cell>
      <smart-text-cell label="电话" showarrow></smart-text-cell>
      <smart-mutil-line-text-cell
        label="描述"
        editable
        required
      ></smart-mutil-line-text-cell>
    </smart-section>
    <smart-section title="展开收起" expendable>
      <smart-text-cell label="姓名" editable></smart-text-cell>
      <smart-text-cell label="电话" showarrow></smart-text-cell>
      <smart-mutil-line-text-cell
        label="描述"
        editable
        required
      ></smart-mutil-line-text-cell>
    </smart-section>
  </demo-page>
</template>
<script>
export default {
  methods: {}
};
</script>
