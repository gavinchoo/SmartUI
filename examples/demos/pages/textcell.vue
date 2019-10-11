<template>
  <demo-page title="Section 布局">
    <smart-section title="人员信息" expendable>
      <smart-text-cell label="姓名" editable></smart-text-cell>
      <smart-text-cell label="电话" showarrow></smart-text-cell>
      <smart-mutil-line-text-cell
        label="描述"
        value="1231231232131"
      ></smart-mutil-line-text-cell>
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
