<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CartDrawer />
      <v-main style="padding-top: 148px">
        <slot></slot>
      </v-main>
      <AppNavbar />
      <FixedNav />
      <AppFooter />
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
