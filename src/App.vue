<template>
  <div>
    <new-food-item-form @send="addFood" />
    <food-inventory :food="inventory" />
  </div>
</template>

<script>
import NewFoodItemForm from "./components/NewFoodItemForm";
import FoodInventory from "./components/FoodInventory";

export default {
  name: "App",
  components: {
    NewFoodItemForm,
    FoodInventory
  },
  data() {
    return {
      inventory: []
    };
  },
  methods: {
    addFood(food) {
      this.inventory.unshift(food);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
