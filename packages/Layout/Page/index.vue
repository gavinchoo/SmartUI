<template>
  <div class="smart-page-wrapper">
    <div class="smart-page-header">
      <!-- 顶部导航栏 slot header -->
      <slot name="header"></slot>
    </div>
    <div class="smart-page-content">
      <!-- 填充内容 slot content -->
      <slot name="content"></slot>
    </div>
    <div class="smart-page-footer">
      <!-- 底部按钮 slot footer -->
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
/**
 * smart-page
 * @module components/layout/page
 * @desc 页面模板，定义标题栏，内容，底部栏位置
 *
 * @author zhujiawei
 * @date 2019-8-7
 *
 * @example
 * <smart-page>
 *  <!-- 标题栏 -->
 *  <smart-titlebar slot="header" title="SmartPage"></smart-titlebar>
 *  <!-- 表单信息 -->
 *  <div slot="content" class="pb90"></div>
 *  <!-- 底部按钮，没有则不写 -->
 *  <div slot="footer"></div>
 * </smart-page>
 */
export default {
  name: "SmartPage"
};
</script>
<style lang="less" scoped>
.smart-page-wrapper {
  line-height: 0.58666667rem;
  padding-top: 45px;
}
.smart-page-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
