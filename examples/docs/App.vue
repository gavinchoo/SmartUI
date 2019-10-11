<template>
  <div id="app" style="height:100%">
    <div style="height:inherit">
      <div v-if="!isIndex" class="container">
        <sideNav class="nav"></sideNav>
        <router-view class="view"></router-view>
        <section>
          <div class="phone">
            <iframe
              id="demo-iframe"
              src="/smart-ui/demos"
              class="demo-page"
            ></iframe>
          </div>
        </section>
      </div>
      <router-view v-else class="page"></router-view>
    </div>
  </div>
</template>

<script>
import mainHeader from "./components/header.vue";
import sideNav from "./components/SideNav/index";

export default {
  name: "App",
  components: {
    mainHeader,
    sideNav
  },
  data() {
    return {
      init: false,
      isIndex: true
    };
  },
  watch: {
    $route() {
      this.isIndex = this.$route.name === "index";
    }
  },
  mounted() {
    //  这里模拟数据请求
    setTimeout(() => {
      this.init = true;
    }, 250);
  }
};
</script>

<style lang="less" type="text/less">
@import "./assets/less/index";
</style>
