<template>
  <div class="docs-demo-wrapper">
    <div :style="{ height: isExpand ? 'auto' : '0' }" class="demo-container">
      <div span="14">
        <div class="docs-demo docs-demo--expand">
          <div class="highlight-wrapper">
            <slot name="highlight"></slot>
          </div>
        </div>
      </div>
    </div>
    <span class="docs-trans docs-demo__triangle" @click="toggle">{{
      isExpand ? "隐藏代码" : "显示代码"
    }}</span>
  </div>
</template>

<script>
/* eslint-disable */
  import Vue from 'vue' 
  export default { 
    data() { 
      return { 
        isExpand: true 
      }; 
    }, 
    methods: { 
      toggle() { 
        this.isExpand = !this.isExpand; 
      } 
    }
  };

</script>

<style lang="less" type="text/less">
@import "./index";
</style>

