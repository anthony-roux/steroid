<template lang="">
  <div>
    <Header />
    <nuxt />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>
<style lang="css">
html {
  font-family: "Lato", sans-serif !important;
}
body {
  margin: 0;
}
</style>
