<template>
  <div class="home">
    <CategoryMenu />
    <ItemsList />
    <CartRestaurant />
  </div>
</template>

<script>
import CategoryMenu from '@/components/CategoryMenu.vue';
import ItemsList from '@/components/ItemsList.vue';
import CartRestaurant from '@/components/CartRestaurant.vue';

export default {
  name: 'HomeView',
  components: {
    CategoryMenu,
    ItemsList,
    CartRestaurant
}
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
