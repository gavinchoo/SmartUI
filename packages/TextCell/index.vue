<!-- 输入单元 -->
<template>
  <li class="smart-section-cell">
    <label class="smart-section-cell-label">
      <i
        :style="{ display: required ? 'inline' : 'none' }"
        class="smart-section-cell-mark"
        >*</i
      >
      <span>{{ label }}</span>
    </label>
    <input
      :disabled="!editable"
      :placeholder="editable ? hint : ''"
      :type="type"
      :maxlength="maxlength"
      :value="value"
      class="smart-section-cell-input"
      @focus="inputFocus"
      @input="$emit('input', $event.target.value)"
    />
    <img
      v-if="showarrow"
      class="smart-section-cell-icon-arrow"
      src="./assets/right_arrow.svg"
      alt="rightArrow"
    />
  </li>
</template>
<script>
export default {
  name: "SmartTextCell",
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: null
    },
    hint: {
      type: String,
      default: "请输入"
    },
    required: {
      // 添加参数required 显示必填*号标记
      type: Boolean,
      default: false
    },
    editable: {
      // 是否可以编辑
      type: Boolean,
      default: false
    },
    showarrow: { type: Boolean, default: false },
    type: {
      type: String,
      default: "text"
    },
    maxlength: {
      type: String,
      default: "100"
    }
  },
  methods: {
    inputFocus() {
      if (document.activeElement.tagName === "INPUT") {
        document.activeElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.smart-section-cell {
  display: -webkit-box;
  display: flex;
  flex-basis: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 0;
  line-height: 1.3;
  border-bottom: 1px solid #e5e5e5;

  .smart-section-cell-label {
    font-size: 0.426666rem;
    width: 3.38666667rem;
    color: #384744;
  }

  .smart-section-cell-mark {
    color: #ff0000;
  }

  .smart-section-cell-value {
    -webkit-box-flex: 1;
    flex: 1;
    font-size: 0.42666667rem;
    text-align: right;
    color: #888888;
    margin-right: 0.58666667rem;
    padding-left: 0.53333333rem;
  }

  .smart-section-cell-input {
    -webkit-box-flex: 1;
    flex: 1;
    font-size: 0.42666667rem;
    color: #888;
    text-align: right;
    padding-right: 0.53333333rem;
  }
  .smart-section-cell-icon-arrow {
    width: 0.21333333rem;
    height: 0.37333333rem;
    margin-right: 0.58666667rem;
  }
}

.smart-section-cell:last-child {
  margin-bottom: 0;
  border-bottom: 0;
}
</style>
