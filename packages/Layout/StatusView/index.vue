<template>
  <div class="smart-statusview-wrapper">
    <div v-if="status == 'loading'" class="smart-statusview-loading-ctn">
      <div class="smart-statusview-loading"></div>
      <div class="smart-statusview-loading-txt">加载中...</div>
    </div>
    <div
      v-if="status == 'empty' || status == 'failed'"
      class="smart-statusview-loading-ctn"
      @click="refresh"
    >
      <img
        v-if="status == 'empty'"
        src="./assets/empty.png"
        class="smart-statusview-img"
      />
      <img
        v-if="status == 'failed'"
        src="./assets/failed.png"
        class="smart-statusview-img"
      />
      <div class="smart-statusview-content">
        {{
          message == ""
            ? status == "empty"
              ? "这里暂时没有内容哦"
              : "数据加载失败"
            : message
        }}
      </div>
      <div class="smart-statusview-content">轻触屏幕刷新</div>
    </div>
  </div>
</template>
<script>
/**
 * 页面全局状态显示
 * status  : loading, empty, failed
 * message : 显示的文案
 * refresh : 点击刷新回调方法
 */
export default {
  name: "SmartStatusView",
  props: {
    status: {
      type: String,
      default: "loading"
    },
    message: {
      type: String,
      default: ""
    }
  },
  methods: {
    refresh() {
      this.$emit("refresh");
    }
  }
};
</script>

<style lang="less" scoped>
.smart-statusview-wrapper {
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  .smart-statusview-img {
    width: 227px;
  }
  .smart-statusview-content {
    margin-top: 10px;
    font-size: 14px;
    opacity: 0.6;
    color: #302c48;
  }

  .smart-statusview-loading-ctn {
    justify-items: center;
    display: grid;
  }
  .smart-statusview-loading {
    width: 1.4rem;
    height: 1.4rem;
    background: url(~./assets/loading.png);
    background-size: 1.4rem;
    animation: loading 1s linear infinite;
  }

  .smart-statusview-loading-txt {
    margin-top: 10px;
    font-size: 14px;
    color: #888888;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
