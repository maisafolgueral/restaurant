<template>
  <div class="items-list">
    <ItemRestaurant 
        v-for="item in itemsList" :key="item.id"
        :item="item"
    />
  </div>
</template>

<script>
import axios from "axios";
import ItemRestaurant from './ItemRestaurant.vue';

export default {
  name: "ItemsList",
  components: {
    ItemRestaurant
  },
  data() {
    return {
        itemsList: []
    }
  },
  created() {
    axios.get("http://localhost:3000/burguers").then((response) => {
      this.itemsList = response.data;
    });
  },
};
</script>

<style lang="less" scoped>
  .items-list {
      margin: 50px;
      display: flex;

      @media @tablets {
        flex-wrap: wrap;
        margin: 20px;
      }
        
  }
</style>
