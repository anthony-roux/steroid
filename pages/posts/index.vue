<template lang="">
  <div class="posts-page flex justify-center items-center">
    <PostList :posts="loadedPosts" />
  </div>
</template>
<script>
export default {
  middleware: 'log',
  // s'execute comme AsyncData sur le coté Serveur, lors du 1er chargement ou sur le client, il se comporte donc exactement comme les données asyncrones.
  // Il obtient aussi le meme objet context

  // fetch(context) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         loadedPosts: [
  //           {
  //             id: "1",
  //             title: "My 1st post !",
  //             previewText: "Super cool, thanks for that !",
  //             thumbnailLink:
  //               "https://img.freepik.com/photos-premium/toucher-monde-virtuel-reseau-connexion_50039-1565.jpg?w=2000",
  //           },
  //           {
  //             id: "2",
  //             title: "My 2nd post !",
  //             previewText: "Super cool, thanks for that !",
  //             thumbnailLink:
  //               "https://img.freepik.com/photos-premium/toucher-monde-virtuel-reseau-connexion_50039-1565.jpg?w=2000",
  //           },
  //           {
  //             id: "3",
  //             title: "My 3rd post !",
  //             previewText: "Super cool, thanks for that !",
  //             thumbnailLink:
  //               "https://img.freepik.com/photos-premium/toucher-monde-virtuel-reseau-connexion_50039-1565.jpg?w=2000",
  //           },
  //           {
  //             id: "4",
  //             title: "My 4th post !",
  //             previewText: "Super cool, thanks for that !",
  //             thumbnailLink:
  //               "https://img.freepik.com/photos-premium/toucher-monde-virtuel-reseau-connexion_50039-1565.jpg?w=2000",
  //           },
  //         ],
  //       });
  //     }, 1500);
  //   })
  //     .then((data) => {
  //       context.store.commit("setPosts", data.loadedPosts);
  //     })
  //     .catch((e) => {
  //       context.error(new Error());
  //     });
  // },

  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    },
  },
  // asyncData(context) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         loadedPosts: [
  //           {
  //             id: "1",
  //             title: "My 1st post !",
  //             previewText: "Super cool, thanks for that !",
  //             thumbnailLink:
  //               "https://img.freepik.com/photos-premium/toucher-monde-virtuel-reseau-connexion_50039-1565.jpg?w=2000",
  //           },
  //           {
  //             id: "2",
  //             title: "My 2nd post !",
  //             previewText: "Super cool, thanks for that !",
  //             thumbnailLink:
  //               "https://img.freepik.com/photos-premium/toucher-monde-virtuel-reseau-connexion_50039-1565.jpg?w=2000",
  //           },
  //           {
  //             id: "3",
  //             title: "My 3rd post !",
  //             previewText: "Super cool, thanks for that !",
  //             thumbnailLink:
  //               "https://img.freepik.com/photos-premium/toucher-monde-virtuel-reseau-connexion_50039-1565.jpg?w=2000",
  //           },
  //           {
  //             id: "4",
  //             title: "My 4th post !",
  //             previewText: "Super cool, thanks for that !",
  //             thumbnailLink:
  //               "https://img.freepik.com/photos-premium/toucher-monde-virtuel-reseau-connexion_50039-1565.jpg?w=2000",
  //           },
  //         ],
  //       });
  //     }, 1500);
  //   })
  //     .then((data) => {
  //       return data;
  //     })
  //     .catch((e) => {
  //       context.error(new Error());
  //     });
  // },

  // created() {
  //   this.$store.dispatch("setPosts", this.loadedPosts);
  //   // console.log(this.$store.getters.loadedPosts)
  // },
};
</script>
<style lang="css">
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
