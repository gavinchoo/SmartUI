<template>
  <demo-page title="StatusView状态页">
    <smart-status-view
      :status="status"
      @refresh="onRefresh"
    ></smart-status-view>

    <div class="btn-wrapper">
      <mt-button @click="changeStatus('loading')">加载中</mt-button>
      <mt-button @click="changeStatus('empty')">数据为空</mt-button>
      <mt-button @click="changeStatus('failed')">获取失败</mt-button>
    </div>
  </demo-page>
</template>
<script>
export default {
  data() {
    return {
      status: "loading"
    };
  },
  methods: {
    changeStatus(status) {
      this.status = status;
    },
    onRefresh() {
      this.status = "loading";
    }
  }
};
</script>
<style lang="less" scoped>
.btn-wrapper {
  margin-top: 20px;
  margin-left: 20px;
}
</style>
