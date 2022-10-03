<template>
  <div class="add-cart">
    <router-link to="/" class="add-cart--go-back" v-if="isSmallScreens()">←️ Voltar</router-link>
    <ItemRestaurant :item="item" class="add-cart--item"/>
    <div class="add-cart--container">
      <span>Quantidade</span>
      <QuantityRestaurant :item="item"/>
    </div>
    <p class="add-cart--observations">Observações</p>
    <textarea v-model="observations" rows="10"></textarea>
  </div>
</template>

<script>
import Mixin from '@/mixins/mixins';
import axios from 'axios';
import ItemRestaurant from "./ItemRestaurant.vue";
import QuantityRestaurant from './QuantityRestaurant';

export default {
    props: ['id'],
    mixins: [Mixin],
    components: {
      ItemRestaurant,
      QuantityRestaurant,
    },
    data() {
      return {
        item: {},
        observations: ''
      }
    },
    computed: {
      selectedCategory() {
        return this.$store.state.selectedCategory;
      }
    },
    created(){
      axios.get(`http://localhost:3000/${this.selectedCategory}/${this.id}`).then((response) => {
          this.item = response.data;
          //this.isLoading = false;
      });
    }
};
</script>

<style lang="less" scoped>

.add-cart {
  padding: 50px 20px;

  &--go-back {
      font-weight: 600;
      font-size: 18px;
      text-decoration: none;
      color: #000;
  }

  &--item{
    margin-top: 50px;
  }

  &--container {
    display: flex;
    border: 1px solid @light-grey;
    padding: 10px 20px;
    border-radius: 8px;
    margin: 20px 0;

    span {
      margin-right: auto;
      font-weight: 600;
      font-size: 16px;
    }
  }

  &--observations {
    font-weight: 600;
    font-size: 16px;
  }

  textarea {
    width: 100%;
    border-radius: 8px;
    border: 1px solid @light-grey;
  }
}

</style>