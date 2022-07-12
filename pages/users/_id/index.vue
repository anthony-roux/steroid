<template lang="">
  <div>
    <h2>a single user, with ID: {{ $route.params.id }}</h2>
  </div>
</template>
<script>
export default {
  layout: "users",

  // Ceci permet de verifier à travers une regex que l'entrée est bien et seulement de type number
  validate(data) {
    return /^\d+$/.test(data.params.id);
  },
};
</script>
<style lang=""></style>
