<template>
  <div class="smart-section">
    <div
      :class="{
        'smart-section-title': true,
        'smart-section-title-no-border': !isExpend || empty
      }"
    >
      <i class="smart-section-title-mark vm"></i>
      <span class="vm ml10">{{ title }}</span>
      <i
        :style="{ display: required ? 'inline' : 'none' }"
        class="smart-section-title-required"
        >*</i
      >
      <div
        :style="{ display: expendable && !empty ? 'inline' : 'none' }"
        class="smart-section-expend"
        @click="handleExpend"
      >
        <a :class="{ 'smart-section-down': true, active: isExpend }"></a>
      </div>
      <div
        :style="{ display: empty ? 'inline' : 'none' }"
        class="smart-section-empty"
      >
        暂无
      </div>
    </div>
    <div :style="{ display: isExpend ? 'inline' : 'none' }">
      <slot></slot>
    </div>
  </div>
</template>
<script>
/**
 * 详情页面分块显示单元
 * slot 插槽名称 section-content
 */
export default {
  name: "SmartSection",
  props: {
    // 标题
    title: {
      type: String,
      default: ""
    },
    // 添加参数required 显示必填*号标记
    required: {
      type: Boolean,
      default: false
    },
    // 是否可以点击展开，当为true时， 右侧显示展开图标
    expendable: {
      type: Boolean,
      default: false
    },
    // 数据是否为空， 当为true时，右侧显示“暂无”
    empty: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isExpend: true
    };
  },
  methods: {
    handleExpend() {
      this.isExpend = !this.isExpend;
    }
  }
};
</script>
<style lang="less">
/** 编辑页面样式 */
.smart-section {
  background-color: #fff;
  padding: 0 0 0 0.58666667rem;

  .smart-section-title {
    font-size: 0.48rem;
    font-weight: 500;
    color: #0c87e4;
    border-bottom: 1px solid #e5e5e5;
    padding: 0.4rem 0;

    .smart-section-title-mark {
      display: inline-block;
      height: 0.3733333333rem;
      border-left: 0.133333333rem solid #0c87e4;
    }

    .smart-section-title-required {
      color: #ff0000;
    }
  }

  .smart-section-title-no-border {
    border-bottom: 0px;
  }

  .smart-section-expend {
    float: right;
    margin-right: 20px;

    .smart-section-down {
      text-align: right;
      color: #999;
      padding-right: 1rem;
      background: url(~./assets/arrow-down.png) no-repeat right center;
      background-size: 0.45rem auto;
    }

    /*收起状态*/
    .active {
      background: url(~./assets/arrow-up.png) no-repeat right center;
      background-size: 0.45rem auto;
    }
  }

  .smart-section-empty {
    float: right;
    margin-right: 20px;
    color: #888888;
    font-size: 14px;
  }
}
</style>
