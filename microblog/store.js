import { reactive } from "vue";
import { testPosts } from "./testPosts";

class Store {
  constructor() {
    this.state = reactive({
      posts: testPosts,
      currentHashtag: null,
    });
  }

  setHashtag(hashtag) {
    this.state.currentHashtag = hashtag;
  }

  incrementLike(post) {
    const thePost = this.state.posts.find((x) => {
      return x.id === post.id;
    });

    if (!thePost) return;

    thePost.likes += 1;
  }

  get filteredPosts() {
    if (!store.state.currentHashtag) {
      return store.state.posts;
    }
    return store.state.posts.filter((post) =>
      post.hashtags.includes(store.state.currentHashtag)
    );
  }
}

export const store = new Store();
