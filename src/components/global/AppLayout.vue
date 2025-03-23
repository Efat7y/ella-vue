<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CartDrawer />
      <MenuDrawer />
      <v-main
        :style="`padding-top: ${
          $route.name == 'CheckOut'
            ? '0px'
            : windowWidth <= 990
            ? '60px'
            : '148px'
        }`"
      >
        <slot></slot>
      </v-main>
      <AppNavbar
        v-show="$route.name != 'CheckOut' && !showFixed && windowWidth > 990"
      />
      <ResponsiveNav v-show="windowWidth <= 990 && $route.name != 'CheckOut'" />
      <FixedNav
        v-show="$route.name != 'CheckOut' && !showFixed && windowWidth > 990"
      />
      <AppFooter v-show="$route.name != 'CheckOut'" />
    </v-layout>
  </div>
</template>

<script>
import AppNavbar from "./AppNavbar.vue";
import ResponsiveNav from "./ResponsiveNav.vue";
import FixedNav from "./FixedNav.vue";
import AppFooter from "./AppFooter.vue";
import CartDrawer from "./CartDrawer.vue";
import MenuDrawer from "./MenuDrawer.vue";
export default {
  components: {
    AppNavbar,
    ResponsiveNav,
    FixedNav,
    CartDrawer,
    AppFooter,
    MenuDrawer,
  },
  data: () => ({
    drawer: true,
    showFixed: false,
    windowWidth: 0,
  }),
  mounted() {
    this.windowWidth = window.innerWidth;
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
      console.log(this.windowWidth);
    };
    // window.onscroll = () => {
    //   if (window.scrollY >= 205) {
    //     this.showFixed = true;
    //   } else {
    //     this.showFixed = false;
    //   }
    // };
  },
};
</script>

<style></style>
