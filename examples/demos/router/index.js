import Vue from "vue";
import Router from "vue-router";
import navConf from "../nav.config.json";

Vue.use(Router);

let routes = [{ path: "*", redirect: "/start" }];

Object.keys(navConf).forEach(header => {
  routes = routes.concat(navConf[header]);
});

let addComponent = router => {
  router.forEach(route => {
    if (route.items) {
      addComponent(route.items);
      routes = routes.concat(route.items);
    } else {
      route.component = r =>
        require.ensure([], () => r(require(`../pages/${route.name}.vue`)));
    }
  });
};

addComponent(routes);

export default new Router({
  routes: routes
});
