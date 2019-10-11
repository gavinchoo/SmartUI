// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Es6Promise from "es6-promise";
import Vue from "vue";
import App from "./App";
import router from "./router";
import "babel-polyfill";
import "lib-flexible";

import store from "@/demos/store";
import VeeValidate from "vee-validate";

import demoBlock from "./components/Block";
import demoPage from "./components/Page";
Vue.component("demo-page", demoPage);
Vue.component("demo-block", demoBlock);

// 引入自定义UI组件
import SmartUI from "../../src";
Vue.use(SmartUI);

// 引入自定义UI组件, 按需加载
// import { SmartPage, SmartTitleBar, SmartSection } from "../../src";
// Vue.component(SmartPage.name, SmartPage);
// Vue.component(SmartTitleBar.name, SmartTitleBar);
// Vue.component(SmartSection.name, SmartSection);

Es6Promise.polyfill();

Vue.use(VeeValidate);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  components: { App },
  template: "<App/>"
});
