<template>
  <div>
    <input type="text" data-test="foodName" v-model="food" />

    <button type="button" data-test="createButton" @click="send">
      Add Item
    </button>
  </div>
</template>

<script>
export default {
  name: "NewFoodItemForm",
  data() {
    return {
      food: ""
    };
  },
  methods: {
    send() {
      this.$emit("send", this.food);
      this.food = "";
    }
  }
};
</script>
