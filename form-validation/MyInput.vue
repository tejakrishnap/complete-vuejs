<template>
  <div class="label">
    <label v-bind:for="name">{{ name }}</label>
    <div class="error">{{ error }}</div>
  </div>
  <input v-bind:id="name" :value="value" @input="input" :type="type" />
  <br />
</template>

<script>
export default {
  emits: ["update"], // this will get rid of all the emit warnings in the console
  props: {
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    rules: {
      type: Object,
      default: {},
    },
    error: {
      type: String,
    },
  },
  data() {},
  created() {
    this.$emit("update", {
      name: this.name.toLowerCase(),
      value: this.value,
      error: this.validate(this.value),
    });
  },
  methods: {
    input($event) {
      this.$emit("update", {
        name: this.name.toLowerCase(),
        value: $event.target.value,
        error: this.validate($event.target.value),
      });
    },
    validate(value) {
      if (this.rules.required && value.length === 0) {
        return "Please enter something in the input";
      }
      if (this.rules.min && value.length < this.rules.min) {
        return `The minimum length is ${this.rules.min}`;
      }
    },
  },
};
</script>

<style scoped>
.input {
  display: flex;
  flex-direction: column;
}
.label {
  display: flex;
}
.error {
  color: red;
  padding-left: 20px;
}
.input {
  width: 300px;
}
input {
  box-sizing: border-box;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid silver;
  margin: 2px;
  font-size: 16px;
  width: 300px;
  cursor: pointer;
}
</style>
