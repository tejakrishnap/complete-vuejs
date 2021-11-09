<template>
  <button v-for="post in posts" :key="post.id" @click="click(post)">
    {{ post.title }}
  </button>
  <div v-if="currentPost">
    <h2>{{ currentPost.title }}</h2>
    <h4>{{ currentPost.content }}</h4>
  </div>
  {{ postId }}
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const click = (post) => {
      store.commit("posts/setPostId", post.id);
    };

    const fetchData = () => {
      store.dispatch("posts/fetch");
    };

    onMounted(() => {
      fetchData();
    });

    return {
      click,
      posts: computed(() => store.state.posts.posts),
      postId: computed(() => store.state.posts.postId),
      currentPost: computed(() => store.getters["posts/currentPost"]),
    };
  },
};
</script>

<style scoped></style>
