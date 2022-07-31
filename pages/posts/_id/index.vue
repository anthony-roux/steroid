<template lang="">
  <div class="single-post-page">
    <section class="post">
      <h2 class="post-title">{{ loadedPost.title }}</h2>
      <div class="post-details">
        <div class="post-detail">
          Last updated on {{ loadedPost.updatedDate | date }}
        </div>
        <div class="post-detail">Written by {{ loadedPost.author }}</div>
      </div>
      <p class="post-content">{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
      <p>
        Let me know if you like this kind of content, send a mail to
        <a href="mailto:gallisomniator@gmail.com">gallisomniator@gmail.com</a>
      </p>
    </section>
  </div>
</template>
<script>
import axios from "axios";

// asyncData fonctionne coté serveur donc le module $axios n'est pas disponible, il faut donc l'appeler avec le context.app

export default {
  asyncData(context) {
    return context.app.$axios
      .$get("/posts/" + context.params.id + ".json")
      .then((data) => {
        return {
          loadedPost: data,
        };
      })
      .catch((e) => context.error(e));
  },
  // asyncData(context, callback) {
  //   setTimeout(() => {
  //     callback(null, {
  //       loaddedPost: {
  //         id: "1",
  //         title: "My 1st post ! (ID: " + context.params.id + ")",
  //         previewText: "Super cool, thanks for that !",
  //         author: "Anthony",
  //         updatedDate: new Date(),
  //         content:
  //           "Consectetur laboris reprehenderit dolor adipisicing incididunt est est tempor.",
  //         thumbnailLink:
  //           "https://img.freepik.com/photos-premium/toucher-monde-virtuel-reseau-connexion_50039-1565.jpg?w=2000",
  //       },
  //     });
  //   }, 1000);
  // },
};
</script>
<style lang="css" scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
