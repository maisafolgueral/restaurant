<template>
  <div class="home">
    <CategoryMenu />
    <ItemsList />
    <CartRestaurant v-if="isDesktop()"/>
  </div>
</template>

<script>
import CategoryMenu from '@/components/CategoryMenu.vue';
import ItemsList from '@/components/ItemsList.vue';
import CartRestaurant from '@/components/CartRestaurant.vue';
import Mixin from '@/mixins/mixins';

export default {
  name: 'HomeView',
  components: {
    CategoryMenu,
    ItemsList,
    CartRestaurant
  },
  mixins: [Mixin]
}

</script>

<style scoped lang="less">
  .home {
    display: flex;

    @media @tablets {
      flex-direction: column;
    }
  }
</style>
