<template>
  <div>
    <side-nav class="nav"></side-nav>
  </div>
</template>

<script>
import SideNav from "../components/SideNav";

export default {
  name: "App",
  components: {
    SideNav
  },
  data() {
    return { height: document.documentElement.clientHeight };
  }
};
</script>
<style type="text/less" lang="less"></style>
