import SmartTitleBar from "../packages/Layout/TitleBar";
import SmartPage from "../packages/Layout/Page";
import SmartStatusView from "../packages/Layout/StatusView";
import SmartSection from "../packages/Section";
import SmartTextCell from "../packages/TextCell";
import SmartPopRadio from "../packages/PopRadio";
import SmartImageSelect from "../packages/ImageSelect";
import SmartMutilLineTextCell from "../packages/MutilLineTextCell";
import SmartHorizontalRadioCell from "../packages/HorizontalRadioCell";

import "./styles/index.less";
import "./utils/jsbridge";

import mintui from "./mintui";

export {
  SmartPage,
  SmartTitleBar,
  SmartStatusView,
  SmartSection,
  SmartTextCell,
  SmartPopRadio,
  SmartImageSelect,
  SmartMutilLineTextCell,
  SmartHorizontalRadioCell
};

const components = [
  SmartPage,
  SmartTitleBar,
  SmartStatusView,
  SmartSection,
  SmartTextCell,
  SmartPopRadio,
  SmartImageSelect,
  SmartMutilLineTextCell,
  SmartHorizontalRadioCell
];

const version = "1.0.0";
const install = function(Vue) {
  if (install.installed) return;
  mintui.install(Vue);
  components.map(component => Vue.component(component.name, component));
};

// auto install
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  version
};
