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
      console.log(iframe);
      if (iframe) {
        iframe.src = "/smart-ui/demos/#/start";
        iframe.contentWindow.location.reload(true);
      } else {
        this.$router.go(-1);
      }
    }
  }
};
</script>
