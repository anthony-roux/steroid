<template>
  <div class="home-page">
    <section class="intro">
      <h2>Get the lasted tech news</h2>
    </section>
    <section class="featured-posts">
      <PostPreview
        id="1"
        title="Title 1"
        previewText="Preview text"
        thumbnail="https://img.freepik.com/photos-premium/toucher-monde-virtuel-reseau-connexion_50039-1565.jpg?w=2000"
      />
      <PostPreview
        id="2"
        title="Title 2"
        previewText="Preview text"
        thumbnail="https://img.freepik.com/photos-premium/toucher-monde-virtuel-reseau-connexion_50039-1565.jpg?w=2000"
      />
      <PostPreview
        id="3"
        title="Title 3"
        previewText="Preview text"
        thumbnail="https://img.freepik.com/photos-premium/toucher-monde-virtuel-reseau-connexion_50039-1565.jpg?w=2000"
      />
    </section>
  </div>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview.vue";
export default {
  components: {
    PostPreview,
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
