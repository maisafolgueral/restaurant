<template>
  <div class="payment">
    <div class="payment--content">
      <router-link to="/" class="payment--go-back">←️ Voltar</router-link>
      <OrderRestaurant />
    </div>
    <CartRestaurant class="cart-menu" />
  </div>
</template>

<script>
import CartRestaurant from "@/components/CartRestaurant.vue";
import Mixin from "@/mixins/mixins";
import OrderRestaurant from "@/components/OrderRestaurant.vue";

export default {
  components: {
    CartRestaurant,
    OrderRestaurant,
  },
  mixins: [Mixin],
};
</script>

<style lang="less" scoped>
.payment {
  display: flex;

  &--content {
    flex-grow: 1;
    padding: 50px;

    .payment--go-back {
      font-weight: 600;
      font-size: 18px;
      text-decoration: none;
      color: #000;
    }
  }

  @media @small-desktops {
    .cart-menu {
      display: none;
    }

    &--content {
      padding: 50px 20px;
    }
  }
}
</style>
