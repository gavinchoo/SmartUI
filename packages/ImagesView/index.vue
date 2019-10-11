<template>
  <div class="smart-imageview-wrapper">
    <div class="smart-imageview-tool smart-imageview-header">
      <img class="close" src="./assets/icon_close.png" @click="handleClose" />
    </div>
    <div class="smart-imageview-container">
      <div
        v-if="swiperData.length"
        ref="imgrefctn"
        class="video-img-ctn imgs-c active"
      >
        <span>
          <smart-images-zoom
            :class="swiperClassName"
            :init-index="initIndex"
            :swiper-data="swiperData"
            :zoom-class-name="zoomClassName"
          ></smart-images-zoom>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import SmartImagesZoom from "../ImageZoom";
export default {
  name: "SmartImagesView",
  components: {
    SmartImagesZoom
  },
  props: {
    initIndex: {
      type: Number,
      default: 0
    },
    swiperData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      swiperClassName: "task-swiper",
      zoomClassName: "task-zoom_swiper",
      imgClass: "img-class"
    };
  },
  methods: {
    handleClose() {
      this.$emit("close");
    }
  }
};
</script>
<style lang="less" scoped>
.smart-imageview-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #000000;
  z-index: 666;
  box-sizing: border-box;
  .smart-imageview-container {
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    .task-swiper {
      height: 100%;
      box-sizing: border-box;
      padding: 75px 0;
    }
    .video-img-ctn {
      transition: all 0.3s;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .imgs-c {
      left: -100%;
    }
    .active {
      left: 0;
    }
  }
  .smart-imageview-tool {
    color: rgba(255, 255, 255, 0.5);
    height: 24px;
    line-height: 24px;
    font-size: 14px;
    text-align: center;
    position: absolute;
    width: 100%;
    z-index: 100;
    .active {
      color: #fff;
      .border-line {
        opacity: 1 !important;
      }
    }
    .item {
      display: inline-block;
      margin: 0 20px;
      position: relative;
      .border-line {
        position: absolute;
        height: 2px;
        width: 10px;
        background: #fff;
        left: 8px;
        opacity: 0;
      }
    }
  }
  .smart-imageview-header {
    margin-top: 30px;
    .close {
      width: 30px;
      right: 20px;
      position: absolute;
    }
  }
}
</style>
