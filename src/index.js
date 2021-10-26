import * as Vue from "vue/dist/vue.esm-bundler.js";

const NumberComponent = {
  props: ['numbers'],
  template: `
  <button 
    v-for="number in numbers"
    v-bind:class="getClass(number)"
    v-on:click="click(number)"
  >{{number}}</button>`,
  methods: {
    isEven(val) {
      return val % 2 === 0;
    },
    getClass(number) {
      return this.isEven(number) ? "blue" : "red";
    },
    click(number) {
      this.$emit('chosen', number); // passing data to parent using $emit function
    }
  }
};

const InputComponent = {
  props: ['value'],
  template: `
  <input 
    v-model = "val"
  /><br />
  {{val}}<br />
  <div class="red">{{error}}</div>
  `,
  data() {
    return {
      val: this.value
    }
  },
  methods: {
    input($event) {
      this.val = $event.target.value;
    }
  },
  computed: {
    error() {
      if (this.val.length < 4) {
        return "Input more than four letters";
      }
    }
  }
}

const IncreamentComponent = {
  props: ['count'],
  template: `
  <br />
  <button v-on:click="increment()">Increment</button>
  <p>{{val}}</p>
  `,
  data() {
    return {
      val: this.count
    }
  },
  methods: {
    increment() {
      this.val += 1;
    }
  }
}

const app = Vue.createApp({
  components: {
    NumberComponent,
    InputComponent,
    IncreamentComponent
  },
  template: `
    <inputComponent v-bind:value=value></inputComponent>
    <numberComponent v-bind:numbers=numbers v-on:chosen="addNumber"></numberComponent>
    <hr />
    <numberComponent v-bind:numbers=clickedNumbers v-on:chosen="addNumber"></numberComponent>
    <increamentComponent v-bind:count=count></increamentComponent>
  `,
  data() {
    // all the template variable are declared here
    return {
      count: 0,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      value: "user",
      clickedNumbers: []
    };
  },
  computed: {
    // these values can be directly used as variables in the template and they are also reactive
    evenList() {
      return this.numbers.filter((num) => this.isEven(num));
    },
  },
  methods: {
    // all the methods goes here, vue is smart enough to find methods without parentheses
    addNumber(number) {
      this.clickedNumbers.push(number);
    }
  },
});

app.mount("#app");


/* Notes */

// v-bind + v-on = v-model
// v-bind = attr
// v-on = event
// You should not mutate prop data because it is read-only
// if you wanna mutate prop create a new data() function variable and use that in the template
