<template>
  <li class="smart-section-vertical-cell">
    <label>
      <i
        :style="{ display: required ? 'inline' : 'none' }"
        class="smart-section-cell-mark"
        >*</i
      >
      <span class="smart-section-cell-label">{{ label }}</span>
    </label>
    <textarea
      :disabled="!editable"
      :placeholder="editable ? hint : ''"
      :class="
        editable
          ? 'smart-section-cell-mutil-input'
          : 'smart-section-cell-mutil-input-disable'
      "
      :value="value"
      type="text"
      @focus="textareaFocus"
      @input="$emit('input', $event.target.value)"
    />
    <!-- @focus="textareaFocus" -->
  </li>
</template>

<script>
export default {
  name: "SmartMutilLineTextCell",
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
      default: "请输入"
    },
    required: {
      // 添加参数required 显示必填*号标记
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    textareaFocus() {
      if (document.activeElement.tagName === "TEXTAREA") {
        document.activeElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.smart-section-vertical-cell {
  display: -webkit-box;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0.4rem 0;

  .smart-section-cell-mutil-input {
    margin: 0.4rem 0.58666667rem 0 0;
    border: 1px solid #e5e5e5;
    font-size: 16px;
    padding: 0.32rem;
    border-radius: 6px;
    height: 3.653333rem;
    background: none;
  }

  .smart-section-cell-mutil-input-disable {
    margin: 0.4rem 0.58666667rem 0 0;
    border: 0px;
    font-size: 16px;
  }

  .smart-section-cell-mark {
    color: #ff0000;
  }

  .smart-section-cell-label {
    font-size: 0.426666rem;
    width: 3.38666667rem;
    color: #384744;
  }
}
</style>
