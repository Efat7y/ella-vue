<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CartDrawer />
      <v-main
        :style="`padding-top: 148px ${
          $router.name == 'check_out' ? '0' : '148px'
        }`"
      >
        <slot></slot>
      </v-main>
      <AppNavbar v-if="$router.name != 'check_out'" />
      <FixedNav v-if="$router.name != 'check_out'" />
      <AppFooter v-if="$router.name != 'check_out'" />
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
