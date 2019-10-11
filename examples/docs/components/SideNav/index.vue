<style lang="less" type="text/less">
@import "./index";
</style>
<template>
  <div class="side-nav">
    <div
      v-for="title in Object.keys(data)"
      :key="title"
      class="group-container"
    >
      <p class="side-nav-title">{{ title }}</p>
      <div
        v-for="nav in data[title]"
        v-if="nav.desc"
        :key="nav.name"
        class="side-nav-items"
      >
        <router-link
          v-if="nav.name"
          :class="$route.name === nav.name ? 'active' : ''"
          :to="{ name: nav.name }"
          >{{ nav.desc }}</router-link
        >
        <p v-else class="side-nav-group">{{ nav.desc }}</p>
        <div v-for="item in nav.items" :key="item.name">
          <router-link
            :to="{ name: item.name }"
            :class="$route.name === item.name ? 'active' : ''"
            class="slid-nav-component"
            >{{ item.desc }}</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navConf from "../../nav.config.json"; export default { data() { return {
data: navConf }; } };
</script>
