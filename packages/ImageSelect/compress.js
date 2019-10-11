const compressByWidth = function(rawBase64, width, quality, callback) {
  let img = new window.Image();
  img.src = rawBase64;
  img.onload = function() {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    let height = (this.height * width) / this.width;
    canvas.width = width;
    canvas.height = height;
    const suffix = rawBase64.split(";base64,")[0].replace("data", "");
    ctx.drawImage(this, 0, 0, width, height);
    let base64 = canvas.toDataURL(suffix, quality);
    const base64Nosuffix = base64.replace(/(data:){1}.*(base64,){1}/, "");
    let option = {
      base64Nosuffix: base64Nosuffix,
      base64: base64,
      suffix: suffix,
      head: `data:${suffix};base64,`
    };
    callback(option);
  };
};

const dataURLtoFile = function(dataUrl, fileName) {
  let arr = dataUrl.split(",");
  let mime = arr[0].match(/:(.*?);/)[1];
  let bstr = window.atob(arr[1]);
  let n = bstr.length;
  let u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new window.File([u8arr], fileName, { type: mime });
};

const compress = function(fileObj, config, callback) {
  config = Object.assign({}, config, {
    initWidth: 1080,
    maxLength: 1e5,
    quality: 1,
    speed: 0.9
  });
  let { initWidth, quality } = config;
  let reader = new window.FileReader();
  reader.readAsDataURL(fileObj);
  reader.onload = function() {
    let selt = this;
    let img = new window.Image();
    img.src = this.result;
    img.onload = function() {
      let width = this.width < initWidth ? this.width : initWidth;
      let sourceBase64;
      let that = this;
      let doCompress = function(base64, width) {
        !sourceBase64 && (sourceBase64 = that.result);
        compressByWidth(base64, width, quality, function(ret) {
          let nFile = dataURLtoFile(ret.base64, fileObj.name);
          if (nFile.size > 500 * 1024) {
            if (nFile.type.indexOf("png" !== -1)) {
              width = width * 0.8;
            } else {
              quality = quality * 0.8;
            }
            doCompress(ret.base64, width, quality);
          } else {
            callback(Object.assign({}, ret, { file: nFile }));
          }
        });
      };
      doCompress(selt.result, width, quality);
    };
  };
};

export default compress;
