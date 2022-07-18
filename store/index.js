import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          (post) => post.id === editedPost.id
        );
        state.loadedPosts[postIndex] = editedPost;
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get(process.env.baseUrl + "/posts.json")
          .then((res) => {
            const postsArray = [];
            for (const key in res.data) {
              postsArray.push({ ...res.data[key], id: key });
            }
            vuexContext.commit("setPosts", postsArray);
          })
          .catch((e) => context.error(e));
        // return new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     vuexContext.commit("setPosts", [
        //       {
        //         id: "1",
        //         title: "My 1st post !",
        //         previewText: "Super cool, thanks for that !",
        //         thumbnailLink:
        //           "https://img.freepik.com/photos-premium/toucher-monde-virtuel-reseau-connexion_50039-1565.jpg?w=2000",
        //       },
        //       {
        //         id: "2",
        //         title: "My 2nd post !",
        //         previewText: "Super cool, thanks for that !",
        //         thumbnailLink:
        //           "https://img.freepik.com/photos-premium/toucher-monde-virtuel-reseau-connexion_50039-1565.jpg?w=2000",
        //       },
        //       {
        //         id: "3",
        //         title: "My 3rd post !",
        //         previewText: "Super cool, thanks for that !",
        //         thumbnailLink:
        //           "https://img.freepik.com/photos-premium/toucher-monde-virtuel-reseau-connexion_50039-1565.jpg?w=2000",
        //       },
        //       {
        //         id: "4",
        //         title: "My 4th post !",
        //         previewText: "Super cool, thanks for that !",
        //         thumbnailLink:
        //           "https://img.freepik.com/photos-premium/toucher-monde-virtuel-reseau-connexion_50039-1565.jpg?w=2000",
        //       },
        //     ]);
        //     resolve();
        //   }, 1500);
        // });
      },
      addPost(vuexContext, post) {
        const createdPost = { ...post, updatedDate: new Date() };
        axios
          .post(
            "https://steroid-4e07e-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
            createdPost
          )
          .then((result) =>
            vuexContext.commit("addPost", {
              ...createdPost,
              id: result.data.name,
            })
          )
          .catch((e) => console.log(e));
      },
      editPost(vuexContext, editedPost) {
        return axios
          .put(
            "https://steroid-4e07e-default-rtdb.europe-west1.firebasedatabase.app/posts/" +
              editedPost.id +
              ".json",
            editedPost
          )
          .then((res) => vuexContext.commit("editPost", editedPost))
          .catch((e) => console.log(e));
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
    },
  });
};

export default createStore;
