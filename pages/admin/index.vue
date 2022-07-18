<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post/')"
        >Create Post</AppButton
      >
    </section>
    <section class="existing-posts">
      <h2>Existing Posts</h2>
      <PostList isAdmin :posts="loadedPosts" />
    </section>
  </div>
</template>
<script>

export default {
  layout: "admin",

  //   asyncData(context, callback) {
  //   setTimeout(() => {
  //     callback(null, {
  //       loadedPosts: [
  //         {
  //           id: "1",
  //           title: "My 1st post !",
  //           previewText: "Super cool, thanks for that !",
  //           thumbnailLink:
  //             "https://img.freepik.com/photos-premium/toucher-monde-virtuel-reseau-connexion_50039-1565.jpg?w=2000",
  //         },
  //         {
  //           id: "2",
  //           title: "My 2nd post !",
  //           previewText: "Super cool, thanks for that !",
  //           thumbnailLink:
  //             "https://img.freepik.com/photos-premium/toucher-monde-virtuel-reseau-connexion_50039-1565.jpg?w=2000",
  //         },
  //         {
  //           id: "3",
  //           title: "My 3rd post !",
  //           previewText: "Super cool, thanks for that !",
  //           thumbnailLink:
  //             "https://img.freepik.com/photos-premium/toucher-monde-virtuel-reseau-connexion_50039-1565.jpg?w=2000",
  //         },
  //         {
  //           id: "4",
  //           title: "My 4th post !",
  //           previewText: "Super cool, thanks for that !",
  //           thumbnailLink:
  //             "https://img.freepik.com/photos-premium/toucher-monde-virtuel-reseau-connexion_50039-1565.jpg?w=2000",
  //         },
  //       ],
  //     });
  //   }, 1500);
  // },

  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    },
  },  
};
</script>
<style lang="css">
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
