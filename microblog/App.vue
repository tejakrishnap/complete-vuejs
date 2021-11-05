<template>
  <input :value="currentHashtag" @input="setHashtag" />
  <card v-for="post in filteredPosts" :key="post.id">
    <template v-slot:title>
      {{ post.title }}
    </template>
    <template v-slot:content> {{ post.content }} </template>
    <template v-slot:description>
      <controls :post="post" />
    </template>
  </card>
</template>

<script>
import { store } from "./store.js";
import Card from "../pokemon/Card.vue";
import Controls from "./Controls.vue";
import { computed } from "vue";

export default {
  emits: ["setHashtag"],
  components: {
    Card,
    Controls,
  },
  setup() {
    const setHashtag = ($event) => {
      store.setHashtag($event.target.value);
    };

    return {
      filteredPosts: computed(() => store.filteredPosts),
      currentHashtag: computed(() => store.state.currentHashtag),
      setHashtag,
    };
  },
};
</script>

<style scoped></style>
