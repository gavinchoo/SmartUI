<template>
  <mt-header :title="title" fixed>
    <router-link slot="left" to="">
      <mt-button @click="back">
        <img
          slot="icon"
          src="./assets/icon_back.png"
          class="smart-titlebar-back"
        />
      </mt-button>
    </router-link>
    <slot slot="right" name="right"></slot>
  </mt-header>
</template>
<script>
export default {
  name: "SmartTitlebar",
  props: {
    title: {
      type: String,
      default: ""
    },
    onBack: {
      type: Function,
      default: null
    }
  },
  methods: {
    back() {
      if (this.onBack) {
        this.onBack();
      } else {
        this.$router.go(-1);
      }
    }
  }
};
</script>
<style lang="less" scoped>
.smart-titlebar-back {
  margin-left: 9px;
  width: 0.48rem;
  vertical-align: baseline;
}
/deep/.mint-button-icon {
  vertical-align: baseline;
  display: inline-block;
}
</style>
