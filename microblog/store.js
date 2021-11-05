import { reactive } from "vue";

class Store {
  constructor() {
    this.state = reactive({
      posts: [
        {
          id: 1,
          title: "First",
          content: "Some dummy data",
        },
      ],
    });
  }
}

export const store = new Store();
