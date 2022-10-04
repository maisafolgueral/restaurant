<template>
  <div class="payment">
    <div class="payment--content">
      <router-link to="/" class="payment--go-back">←️ Voltar</router-link>
    </div>
    <CartRestaurant v-if="isDesktop()"/>
  </div>
</template>

<script>
import CartRestaurant from "@/components/CartRestaurant.vue";
import Mixin from "@/mixins/mixins";

export default {
  components: {
    CartRestaurant
  },
  mixins: [Mixin]
}
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
}

</style>