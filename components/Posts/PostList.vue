<template lang="">
  <section class="post-list">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :is-admin="isAdmin"
      :title="post.title"
      :previewText="post.previewText"
      :thumbnail="post.thumbnail"
    />
  </section>
</template>
<script>
export default {
  name: "PostList",
  props: {
    isAdmin: {
      type: Boolean,
      required: false,
    },
    posts: {
      type: Array,
      required: false,
    },
  },
};
</script>
<style lang="css" scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
