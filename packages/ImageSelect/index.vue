<template>
  <div class="smart-imageselect-wrapper mt20">
    <dl class="smart-imageselect-list">
      <dd
        v-for="(item, index) in uploadList"
        :key="index"
        class="smart-imageselect-list-item"
      >
        <img
          v-show="!readOnly"
          class="smart-imageselect-icon-close"
          src="./assets/icon_close.png"
          @click.stop="handleRemove(index)"
        />
        <img
          :src="item"
          class="smart-imageselect-list-item-image"
          alt="picture"
          @click="handleImageView(item, index)"
        />
      </dd>
      <dd v-if="isMax && !readOnly">
        <label v-if="isAndroid">
          <img
            class="smart-imageselect-image-default"
            src="./assets/icon_camera.png"
            @click="handleChange"
          />
        </label>
        <label v-else>
          <input
            ref="fileInput"
            :multiple="multiple"
            type="file"
            capture="camera"
            accept="image/*"
            style="display:none"
            @change="handleChange($event)"
          />
          <img class="upload-image-default" src="./assets/icon_camera.png" />
        </label>
      </dd>
    </dl>
    <div v-if="showImgVideo">
      <smart-images-view
        :swiper-data="uploadList"
        :init-index="initIndex"
        @close="handleCloseImgView"
      >
      </smart-images-view>
    </div>
    <mt-actionsheet :actions="actions" v-model="showActionSheet">
    </mt-actionsheet>
  </div>
</template>
<script>
import SmartImagesView from "../ImagesView";
import compress from "./compress";

export default {
  name: "SmartImageSelect",
  components: {
    SmartImagesView
  },
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: 9
    },
    fileList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      uploadList: [],
      initIndex: 0,
      showImgVideo: false,
      showActionSheet: false,
      actions: [
        {
          name: "拍照",
          method: () => {
            this.showActionSheet = false;
            this.openCamera();
          }
        },
        {
          name: "从相册中选择",
          method: () => {
            this.showActionSheet = false;
            this.openFilePicker();
          }
        }
      ]
    };
  },
  computed: {
    isMax() {
      return this.uploadList.length < this.max;
    },
    isAndroid() {
      let u = navigator.userAgent;
      let android = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1;
      return android;
    }
  },
  created() {
    this.uploadList = this.fileList;
    console.log(this.uploadList);
  },
  methods: {
    handleRemove(index) {
      this.$messagebox.confirm("确定要删除吗？", "").then(action => {
        if (action == "confirm") {
          let file = this.uploadList[index];
          // 网络图片
          if (file.indexOf("http") > -1) {
            this.$emit("onRemove", file, index);
          } else {
            this.uploadList.splice(index, 1);
            this.$emit("onChange", file, this.uploadList);
          }
        }
      });
    },
    handleChange(event) {
      if (this.isAndroid) {
        this.showActionSheet = true;
      } else {
        this.readImage(event.target, event.target.files);
        this.$refs.fileInput.value = "";
      }
    },
    handleCloseImgView() {
      this.showImgVideo = false;
    },
    handleImageView(item, index) {
      this.showImgVideo = true;
      this.initIndex = index;
      console.log(item);
    },
    openFilePicker() {
      window.imagePicker.getPictures(
        result => {
          for (var i = result.length - 1; i >= 0; i--) {
            this.uploadList.push(result[i].data);
            this.$emit("onChange", result[i].data, this.uploadList);
          }
        },
        null, // 失败调用
        {
          maximumImagesCount: 9 - this.uploadList.length, // 参数
          type: "base64"
        }
      );
    },
    openCamera() {
      navigator.camera.getPicture(
        result => {
          this.uploadList.push(result.data);
          this.$emit("onChange", result.data, this.uploadList);
        },
        null,
        {
          maximumImagesCount: 9 - this.uploadList.length, //参数
          quality: 25,
          type: "base64",
          destinationType: navigator.camera.DestinationType.FILE_URI,
          sourceType: navigator.camera.PictureSourceType.CAMERA
        }
      );
    },
    readImage(target, fs) {
      let _length = fs.length;
      if (this.uploadList.length + fs.length <= this.max) {
        for (let i = 0; i < _length; i++) {
          console.log("readImage", fs[i]);
          if (fs[i].type.indexOf("image") !== -1) {
            let fr = new FileReader();
            fr.readAsDataURL(fs[i]);
            this.loaded(fr, fs[i]);
            this.loadError(fr);
          }
        }
      } else {
        this.$toast(`最多上传${this.max}张图片`);
      }
    },
    loaded(load, file) {
      load.onload = e => {
        console.log(e.target);
        compress(file, {}, ret => {
          console.log(ret.base64);
          this.uploadList.push(ret.base64);
          this.$emit("onChange", ret.base64, this.uploadList);
        });
      };
    },
    loadError(load) {
      load.onerror = () => {
        this.$toast("获取图片失败");
      };
    }
  }
};
</script>

<style lang="less" scoped>
.smart-imageselect-wrapper {
  .smart-imageselect-list {
    display: flex;
    flex-wrap: wrap;
    .smart-imageselect-list-item {
      width: 105px;
      height: 79px;
      margin: 0 10px 10px 0;
      display: inline-block;
      font-size: 0;
      position: relative;
      &:nth-child(3n) {
        margin-right: 0;
      }
      .smart-imageselect-list-item-image {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        background-size: cover !important;
      }
      .smart-imageselect-icon-close {
        width: 26px;
        height: 26px;
        position: absolute;
        right: -6px;
        top: -6px;
        border-radius: 50%;
      }
    }
  }
  .smart-imageselect-image-default {
    width: 105px;
    height: 79px;
    margin-bottom: 20px;
  }
}
</style>
