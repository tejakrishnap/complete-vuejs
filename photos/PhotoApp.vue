<template>
  <layout>
    <template v-slot:header> Header </template>
    <template v-slot:sidebar>
      <album v-for="album in albums" :key="album.id" :album="album" />
    </template>
    <template v-slot:content>
      <router-view />
    </template>
  </layout>
</template>

<script>
import Layout from "./Layout.vue";
import Album from "./Album.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    Layout,
    Album,
  },
  setup() {
    const store = useStore();

    onMounted(async () => {
      store.dispatch("albums/fetch");
    });

    const albums = computed(() => {
      return store.state.albums.all;
    });

    const photos = computed(() => {
      return store.state.photos.all;
    });

    return {
      albums,
      photos,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
