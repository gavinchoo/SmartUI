/** 适用单行两到三个的radio选项组件 */
<template>
  <li
    class="smart-section-vertical-cell"
    style="border-bottom: 0.026667rem solid #e5e5e5"
  >
    <label style="margin-bottom: 0.53rem">
      <i
        :style="{ display: required ? 'inline' : 'none' }"
        class="smart-section-cell-mark"
        style="font-size: 0.426666rem; font-weight: 500; font-family: PingFangSC-Medium;"
        >*
      </i>
      <span class="smart-section-cell-label">{{ label }}</span>
    </label>
    <mt-radio v-model="value" :options="options" class="mint-radiolist">
    </mt-radio>
  </li>
</template>

<script>
export default {
  name: "SmartHorizontalRadio",
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    hint: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: true
    },
    options: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
};
</script>

<style lang="less" scoped>
/deep/.mint-radiolist {
  margin-left: 0.24rem;
  /deep/.mint-cell {
    float: left;
    /deep/.mint-cell-wrapper {
      background: none;
      padding: 0 0;
    }
    min-height: 0;
  }
  /deep/.mint-cell:last-child {
    background-image: none;
  }
  /deep/.mint-radiolist-title {
    display: none;
  }
  /deep/.mint-radiolist-label {
    font-size: 0.426666rem;
    padding: 0 1.2rem 0 0;
  }
}
</style>
<style lang="less" scoped></style>
