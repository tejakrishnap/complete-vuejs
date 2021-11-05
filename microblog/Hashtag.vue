<template>
  <div class="hashtag" @click="setHashtag">#{{ hashtag }}</div>
</template>

<script>
import { store } from "./store";

export default {
  emits: ["setHashtag"],
  props: {
    hashtag: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const setHashtag = () => {
      store.setHashtag(props.hashtag);
    };

    return {
      setHashtag,
    };
  },
};
</script>
<style>
.hashtag {
  text-decoration: underline;
}
.hashtag:hover {
  color: cornflowerblue;
}
</style>
