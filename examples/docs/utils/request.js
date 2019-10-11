import axios from "axios";
import { MessageBox, Toast } from "mint-ui";
import store from "@/store";
import { getToken } from "@/utils/auth";
import { hex_md5 } from "./md5";

let urlconfig = window.localStorage.getItem("urlconfig");
// create an axios instance
const service = axios.create({
  /*global process*/
  baseURL: urlconfig ? urlconfig : process.env.BASE_API, // url = base url + request url
  // withCredentials: false, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers["X-Token"] = getToken();
    }

    if (config.method == "post") {
      var myData = new Date();
      var time = myData.getTime() + "";
      var appKey = "ydjgApp";
      var pwd = "f11bbd4d0df54de0a0c0354383894e65";
      var sign = hex_md5(appKey + time + pwd);
      config.data = {
        ...config.data,
        sign: sign,
        time: time,
        appKey: appKey
      };
    }
    console.log("request params --> " + JSON.stringify(config));
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data;
    console.log("response data --> " + JSON.stringify(res));
    // if the custom code is not 200, it is judged as an error.
    if (response.status !== 200) {
      // 401: Token expired;
      if (response.status === 401) {
        // to re-login
        MessageBox.confirm("登录已过期，请重新登录", "重新登录", {
          confirmButtonText: "重新登录",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          store.dispatch("user/resetToken").then(() => {
            location.reload();
          });
        });
      } else {
        Toast({
          message: res.message || "Error",
          position: "bottom"
        });
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  error => {
    console.log("err" + error); // for debug
    Toast({
      message: error.message,
      position: "bottom"
    });
    return Promise.reject(error);
  }
);

export default service;
