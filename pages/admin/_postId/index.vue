<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>
<script>
import axios from "axios";
export default {
  layout: "admin",

// asyncData fonctionne coté serveur donc le module $axios n'est pas disponible, il faut donc l'appeler avec le context.app
  asyncData(context) {
    return context.app.$axios
      .$get(process.env.baseUrl + "/posts/" + context.params.postId + ".json")
      .then((data) => {
        return {
          loadedPost: { ...data, id: context.params.postId },
        };
      })
      .catch((e) => context.error(e));
  },

  methods: {
    onSubmitted(editedPost) {
      this.$store
        .dispatch("editPost", editedPost)
        .then(() => this.$router.push("/admin"));
    },
  },
};
</script>
<style lang="css" scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
