import { testPosts } from "./testPosts";
import { ref } from "vue";
export function usePosts() {
  const posts = ref(testPosts);
  const addPost = (post) => {
    posts.value.push(post);
  };
  return {
    posts,
    addPost,
  };
}
