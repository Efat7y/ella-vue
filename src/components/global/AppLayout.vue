<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CartDrawer />
      <v-main
        :style="`padding-top: ${$route.name == 'CheckOut' ? '0px' : '148px'}`"
      >
        <slot></slot>
      </v-main>
      <AppNavbar v-show="$route.name !== 'CheckOut'" />
      <FixedNav v-if="$route.name !== 'CheckOut'" />
      <AppFooter v-if="$route.name !== 'CheckOut'" />
    </v-layout>
  </div>
</template>

<script>
import AppNavbar from "./AppNavbar.vue";
import FixedNav from "./FixedNav.vue";
import AppFooter from "./AppFooter.vue";
import CartDrawer from "./CartDrawer.vue";
export default {
  components: {
    AppNavbar,
    FixedNav,
    CartDrawer,
    AppFooter,
  },
};
</script>

<style></style>
