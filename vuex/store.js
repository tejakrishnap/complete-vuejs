import { createStore } from "vuex";
import { testPosts } from "./testPosts";

const delay = () => new Promise((res) => setTimeout(res, 1000)); // simulating a server delay

const posts = {
  namespaced: true,
  state() {
    return {
      postId: null,
      posts: [],
    };
  },
  mutations: {
    setPostId(state, postId) {
      state.postId = postId;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    async fetch(ctx) {
      await delay();
      ctx.commit("setPosts", testPosts); // commiting a mutation from an action
    },
  },
  getters: {
    currentPost(state) {
      return state.posts.find((x) => {
        return x.id === state.postId;
      });
    },
  },
};

export const store = createStore({
  modules: {
    posts,
  },
});
