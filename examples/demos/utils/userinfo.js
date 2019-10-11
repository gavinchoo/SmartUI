export function getSysUserId() {
  try {
    var userInfo = JSON.parse(getUserLocalStorage("userInfo"));
    return userInfo.sys_right_user_id;
  } catch (e) {
    return "";
  }
}

function getUserLocalStorage(key) {
  if (window.localStorage.getItem("username")) {
    var userName = window.localStorage.getItem("username");
    return window.localStorage.getItem(userName + "_" + key);
  }
}
