<template>
  <div class="home-page">
    <section class="intro">
      <h2>Get the lasted tech news</h2>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>

export default {
  // asyncData(context, callback) {
  //   console.log("AsyncData is executed ! ")
  //   // console.log(context)
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
  data() {
    return {};
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    },
  },
};
</script>

<style scoped lang="css">
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  background-image: url("~assets/images/filters_quality-80.jpeg");
}

.intro h2 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h2 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
