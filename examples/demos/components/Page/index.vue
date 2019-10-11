<template>
  <smart-page>
    <smart-titlebar
      slot="header"
      :on-back="onBack"
      :title="title"
    ></smart-titlebar>
    <div slot="content">
      <slot></slot>
    </div>
  </smart-page>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  methods: {
    onBack() {
      let iframe = parent.document.getElementById("demo-iframe");
      if (iframe) {
        iframe.contentWindow.history.go(-1);
      } else {
        this.$router.go(-1);
      }
    }
  }
};
</script>
