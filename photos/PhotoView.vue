<template>
  <img v-for="photo in photos" :src="photo.thumbnailUrl" :key="photo.id" />
</template>

<script>
import { computed, watchEffect } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRoute();

    watchEffect(() => {
      const id = router.params.id;

      if (!id) return;
      store.dispatch("photos/getByAlbum", { albumId: id });
    });

    const photos = computed(() => {
      return store.state.photos.all;
    });

    return {
      photos,
    };
  },
};
</script>
