<template lang="">
  <div>
    <h1>The users view</h1>
    <input type="text" name="" id="" v-model="userId" />
    <button @click="onLoadUser">Load user</button>
    <nuxt-child />
  </div>
</template>
<script>
export default {
  layout: 'users',
  data() {
    return {
      userId: "",
    };
  },
  methods: {
    onLoadUser() {
      this.$router.push("/users/" + this.userId);
    },
  },
};
</script>
<style lang=""></style>
