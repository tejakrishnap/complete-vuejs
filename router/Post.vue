<template>
  <h4>{{ post.title }}</h4>
  <p>{{ post.content }}</p>
</template>

<script>
import { usePosts } from "./usePosts";
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  setup() {
    const router = useRoute();
    const postStore = usePosts();
    const post = computed(() =>
      postStore.posts.value.find((x) => x.id === parseInt(router.params.id))
    );
    return {
      post,
    };
  },
};
</script>

<style></style>
