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
        if (
          this.$router.history.current &&
          this.$router.history.current.path == "/"
        ) {
          window.JSBridge.call("closeNativeView", {}, function() {});
        } else {
          this.$router.go(-1);
        }
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

/deep/.mint-header {
  background-color: #108ee9;
  font-size: 0.48rem;
  height: 1.2rem;
  line-height: 1;
}

/deep/.mint-header-title {
  font-size: 0.48rem;
  font-family: PingFangSC-Medium;
  font-weight: 500;
}

/deep/.mint-button-icon {
  vertical-align: baseline;
  display: inline-block;
}
</style>
