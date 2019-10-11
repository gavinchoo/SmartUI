// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Es6Promise from "es6-promise";
import Vue from "vue";
import App from "./App";
import router from "./router";
import "babel-polyfill";
import "lib-flexible";

// 引入自定义UI组件
import "../../src";

import store from "@/docs/store";

import demoBlock from "./components/Block";
Vue.component("demo-block", demoBlock);

Es6Promise.polyfill();
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  components: { App },
  template: "<App/>"
});
