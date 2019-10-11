import Vue from "vue";

import {
  Toast,
  Indicator,
  MessageBox,
  Header,
  Button,
  Field,
  Radio,
  Checklist,
  Popup,
  Actionsheet
} from "mint-ui";

Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Field.name, Field);
Vue.component(Radio.name, Radio);
Vue.component(Checklist.name, Checklist);
Vue.component(Popup.name, Popup);
Vue.component(Actionsheet.name, Actionsheet);

Vue.$messagebox = Vue.prototype.$messagebox = MessageBox;
Vue.$indicator = Vue.prototype.$indicator = Indicator;
Vue.$toast = Vue.prototype.$toast = Toast;
