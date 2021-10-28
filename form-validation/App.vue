<template>
  <!-- 3. Use custom components here -->
  <form @submit.prevent="submit">
    <my-input
      name="Username"
      :rules="{ required: true, min: 5 }"
      :value="username.value"
      :error="username.error"
      @update="update"
    />
    <my-input
      name="Password"
      :rules="{ required: true, min: 10 }"
      :value="password.value"
      :error="password.error"
      type="password"
      @update="update"
    />
    <my-button
      background="darkslateblue"
      color="white"
      v-bind:disabled="!valid"
    />
  </form>
</template>

<script>
// 1. import your components here
import MyButton from "./MyButton.vue";
import MyInput from "./MyInput.vue";
export default {
  components: {
    // 2. Register your components here
    MyButton,
    MyInput,
  },
  data() {
    return {
      valid: true,
      username: {
        value: "user",
        error: "",
      },
      password: {
        value: "pass",
        error: "",
      },
    };
  },
  computed: {
    valid() {
      return !this.username.error && !this.password.error;
    },
  },
  methods: {
    update({ name, value, error }) {
      this[name].value = value;
      this[name].error = error;
    },
  },
};
</script>

<style scoped></style>
