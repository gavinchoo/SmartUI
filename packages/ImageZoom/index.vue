<template>
  <div :class="`smart-imagezoom-wrapper ${className}`">
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in swiperData" :key="index">
        <div class="swiper-zoom-container">
          <img :src="item" class="swiper-item_img smart-imagezoom-img" />
        </div>
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "ImagesZoom",
  components: {
    swiper,
    swiperSlide
  },
  props: {
    className: {
      type: String,
      default: ""
    },
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
      swiperOption: {
        zoom: true,
        initialSlide: this.initIndex,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        }
      }
    };
  }
};
</script>
<style lang="less" scoped>
.smart-imagezoom-wrapper {
  background-color: #000000;
  .swiper-container {
    height: 100%;
  }
  .swiper-slide {
    overflow-y: auto;
  }
  .swiper-zoom-container {
    align-items: flex-start;
    width: 100%;
    .swiper-item_img {
      width: 100%;
      margin: auto;
    }
  }
}
.smart-imagezoom-img {
  max-height: 100%;
}
.swiper-zoom-container {
  > img {
    max-height: none;
    object-fit: contain;
  }
}
.swiper-pagination {
  font-size: 16px;
  color: #ffffff;
}
</style>
