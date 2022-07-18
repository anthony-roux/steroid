<template lang="">
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
    <nuxt />
  </div>
</template>
<script>
export default {
  data() {
    return {
      displaySidenav: false,
    };
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
