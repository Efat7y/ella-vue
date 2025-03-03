<template>
  <app-layout>
    <router-view />
    <QuickView />
    <v-snackbar v-model="bar" location="bottom left" max-width="500">
      {{ ProductTitle }} has been added to your cart Successfully!
      <template v-slot:actions>
        <v-icon size="20" @click="bar = false">mdi-close</v-icon>
      </template>
    </v-snackbar>
  </app-layout>
</template>
<script>
import AppLayout from "@/components/global/AppLayout.vue";
import QuickView from "@/components/global/QuickView.vue";

export default {
  inject: ["Emitter"],
  components: {
    AppLayout,
    QuickView,
  },
  data: () => ({
    bar: false,
    ProductTitle: "",
  }),
  mounted() {
    this.Emitter.on("showMessage", (data) => {
      this.ProductTitle = data;
      this.bar = true;
    });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
::-webkit-scrollbar {
  width: 5px;
  // background: #f1f1f1;
}

::-webkit-scrollbar-track {
  // background-color: ;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: rgb(136, 138, 137);
  border-radius: 10px;
  // box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
}
::-webkit-scrollbar-thumb:hover {
  background: rgb(71, 71, 71);
}
// .v-rating__wrapper {
//   margin-right: 5px !important;
// }
</style>
