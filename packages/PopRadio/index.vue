<template>
  <mt-popup v-model="popupVisible" position="bottom" class="pop-bg">
    <div class="pop-content pb90">
      <mt-radio v-model="selectValue" :options="options"></mt-radio>
    </div>
    <div class="bottom-button mt10">
      <button class="btn-ellipse big submit-button" @click="submit">
        确定
      </button>
    </div>
  </mt-popup>
</template>
<script>
export default {
  name: "SmartPopRadio",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      popupVisible: false,
      selectValue: []
    };
  },
  watch: {
    popupVisible(val) {
      this.$emit("input", val);
    },
    value(val) {
      this.popupVisible = val;
    }
  },
  methods: {
    submit() {
      this.popupVisible = false;
      this.$emit("confirm", this.selectValue);
    }
  }
};
</script>

<style lang="less" scoped>
.pop-bg {
  width: 100%;
  border-radius: 10px 10px 0 0;
}
.pop-content {
  margin-top: 20px;
  margin-left: 20px;
  max-height: 240px;
  overflow: auto;
}
</style>
