<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>
<script>
import axios from "axios";
export default {
  layout: "admin",
  middleware: "auth",

  data() {
    return {};
  },

  methods: {
    onSubmitted(postData) {
      this.$store
        .dispatch("addPost", postData)
        .then(() => this.$router.push("/admin"));
    },
  },
};
</script>
<style lang="css" scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
