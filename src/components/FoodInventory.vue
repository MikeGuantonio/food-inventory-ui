{% raw %}
<template>
  <ul>
    <li v-for="f in food" :key="f">
      {{ f }}
    </li>
  </ul>
</template>
{% endraw %}

<script>
export default {
  name: "FoodInventory",
  props: ["food"]
};
</script>
