<template style="z-index: 9999">
  <div class="drawer">
    <v-navigation-drawer
      class="pr-1"
      width="400"
      location="right"
      temporary
      v-model="drawer"
    >
      <v-card class="px-0" elevation="0">
        <v-card-title
          class="pl-0 pr-2 d-flex justify-space-between align-center w-100"
          style="font-weight: bold; font-size: 18px"
          >Shopping Cart
          <v-icon icon="mdi-close" @click="drawer = false"></v-icon
        ></v-card-title>
        <v-card-text class="px-0" style="color: #6f6f6f"
          >{{ CartItems.length }} items</v-card-text
        >
        <v-card-text
          class="px-0"
          style="color: #6f6f6f"
          v-if="!CartItems.length"
          >Free shipping For all Order Over $10000.00</v-card-text
        >
        <v-card-text
          class="px-0"
          style="color: #6f6f6f"
          v-if="!CartItems.length"
          >Your Cart Is Empty</v-card-text
        >
        <div
          class="bar-parent mt-5 position-relative mr-3"
          v-if="CartItems.length"
        >
          <svg
            class="icon-shipping-truck"
            viewBox="0 0 40.55 24"
            width="25"
            fill="#f44336"
            :style="` position: absolute;
              bottom: 100%;
              left: calc(${
                parseInt((calcTotalPrice / 10000) * 100) <= 100
                  ? parseInt((calcTotalPrice / 10000) * 100)
                  : 100
              }% - 25px);
              z-index: 1;
              transition: 0.15s all ease-in-out;
            `"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  class="truck-body"
                  d="M40.43,11a3.86,3.86,0,0,0-3.68-2.65H28a1.25,1.25,0,0,1-1.43-1.43c0-2.18,0-4.35,0-6.53,0-.31-.08-.36-.37-.36H5.11a1.18,1.18,0,0,0-1.3,1.32c0,.74,0,1.48,0,2.22,0,.21-.06.27-.26.26-.36,0-.71,0-1.07,0a1.19,1.19,0,1,0,0,2.37H7.19c.43,0,.85,0,1.27,0a1,1,0,0,1,1.07,1A1.19,1.19,0,0,1,8.24,8.48H1.35a1.83,1.83,0,0,0-.47,0A1.19,1.19,0,0,0,0,9.85a1.18,1.18,0,0,0,1.19,1h9.66c.34,0,.68,0,1,0A1.19,1.19,0,0,1,13,12.47a1.26,1.26,0,0,1-1.26.76H1.24a1.19,1.19,0,1,0,0,2.38c.76,0,1.51,0,2.26,0,.26,0,.33.07.32.32,0,1,0,2.09,0,3.13A1.18,1.18,0,0,0,5.1,20.36c.63,0,1.26,0,1.9,0,.27,0,.39.06.47.36a4.55,4.55,0,0,0,8.78-.11.29.29,0,0,1,.32-.25H28.09a.3.3,0,0,1,.34.27,4.55,4.55,0,0,0,8.8,0,.31.31,0,0,1,.35-.26c.49,0,1,0,1.47,0a1.37,1.37,0,0,0,1.5-.87V11.41C40.41,11.29,40.47,11.12,40.43,11ZM32.84,21.62A2.18,2.18,0,1,1,35,19.45,2.21,2.21,0,0,1,32.84,21.62Zm-21,0A2.18,2.18,0,1,1,14,19.45,2.2,2.2,0,0,1,11.86,21.62Z"
                ></path>
                <path
                  class="truck-body"
                  d="M29.27,6h5.85c.1,0,.2,0,.29,0C33.64,2.72,32,.91,28.91.26V.57c0,1.68,0,3.35,0,5C28.9,5.9,29,6,29.27,6Z"
                ></path>
                <path
                  class="wheel"
                  fill="white"
                  d="M11.87,17.27A2.18,2.18,0,1,0,14,19.45,2.2,2.2,0,0,0,11.87,17.27Z"
                ></path>
                <path
                  class="wheel"
                  fill="white"
                  d="M32.85,17.27A2.18,2.18,0,1,0,35,19.45,2.22,2.22,0,0,0,32.85,17.27Z"
                ></path>
              </g>
            </g>
          </svg>
          <v-progress-linear
            color="red"
            height="8"
            :model-value="
              parseInt((calcTotalPrice / 10000) * 100) <= 100
                ? parseInt((calcTotalPrice / 10000) * 100)
                : 100
            "
            striped
          >
          </v-progress-linear>
          <v-card-text
            v-if="CartItems.length && 10000 - calcTotalPrice > 0"
            class="px-0"
            style="color: #6f6f6f"
          >
            Only ${{ 10000 - calcTotalPrice }} away from free shipping
          </v-card-text>
          <v-card-text
            v-if="CartItems.length && 10000 - calcTotalPrice <= 0"
            class="px-0"
            style="color: #6f6f6f"
          >
            Your Order Now Is included Free Shipping
          </v-card-text>
        </div>
        <v-cart-actions v-if="!CartItems.length">
          <v-btn
            variant="outlined"
            class="w-100 mt-5"
            height="40"
            density="compact"
            style="
              text-transform: none;
              border-radius: 30px;
              border-color: #6f6f6f;
            "
            @click="drawer = false"
            >Continue Shopping</v-btn
          >
        </v-cart-actions>
      </v-card>
      <v-card
        class="pa-0"
        max-height="350"
        style="overflow-y: auto"
        elevation="0"
        v-if="CartItems.length"
      >
        <v-container class="px-1">
          <v-row
            v-for="item in CartItems"
            :key="item.id"
            class="align-center mb-5"
          >
            <v-col cols="5">
              <img :src="item.thumbnail" alt="" class="w-100" />
            </v-col>
            <v-col cols="7">
              <v-card-title
                class="px-0"
                style="
                  white-space: pre-wrap;
                  line-height: 1.2;
                  font-size: 14px;
                  color: #6f6f6f;
                "
                >{{ item.title }} Sample {{ item.category }}</v-card-title
              >
              <v-card-text class="px-0" style="color: #6f6f6f"
                >Category: {{ item.category }}</v-card-text
              >
              <v-card-text class="px-0" style="color: #6f6f6f; font-weight: 700"
                >Price: ${{
                  Math.ceil(
                    item.price - item.price * (item.discountPercentage / 100)
                  ) * item.quantity
                }}</v-card-text
              >
              <div
                class="item-footer d-flex justify-space-between align-center"
              >
                <div
                  class="counter px-1"
                  style="
                    border-radius: 30px;
                    border: 1px solid #858585;
                    width: fit-content;
                  "
                >
                  <v-icon
                    size="18"
                    color="#6f6f6f"
                    @click="item.quantity > 1 ? item.quantity-- : false"
                    >mdi-minus</v-icon
                  >
                  <input
                    type="number"
                    class="text-center py-2"
                    style="
                      outline: none;
                      width: 30px;
                      border: none;
                      font-size: 12px;
                      color: #6f6f6f;
                    "
                    min="1"
                    v-model="item.quantity"
                  />
                  <v-icon size="18" color="#6f6f6f" @click="item.quantity++"
                    >mdi-plus</v-icon
                  >
                </div>
                <v-icon
                  class=""
                  size="22"
                  color="#606060"
                  @click="deleteItem(item.id)"
                  >mdi-close</v-icon
                >
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <v-card class="pa-0" elevation="0" v-if="CartItems.length">
        <v-card-actions
          class="px-0 mt-5 flex-column justify-center align-center"
          style="gap: 15px"
        >
          <v-btn
            variant="elevated"
            density="compact"
            elevation="0"
            class="w-100"
            height="40"
            color="blue"
            style="
              text-transform: none;
              border-radius: 30px;
              border-color: #6f6f6f;
            "
            >Check Out</v-btn
          >
          <v-btn
            variant="outlined"
            density="compact"
            class="w-100"
            height="40"
            style="
              text-transform: none;
              border-radius: 30px;
              border-color: #6f6f6f;
            "
            @click="$router.push({ name: 'CartPage' })"
            >View Cart</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { cartStore } from "@/stores/Cart";
import { mapActions, mapState } from "pinia";
export default {
  inject: ["Emitter"],
  methods: {
    ...mapActions(cartStore, ["getCartItems", "deleteItem"]),
  },
  computed: {
    ...mapState(cartStore, ["CartItems"]),
    calcTotalPrice() {
      let total = 0;
      this.CartItems.forEach((product) => {
        total +=
          Math.ceil(
            product.price - product.price * (product.discountPercentage / 100)
          ) * product.quantity;
      });
      return total;
    },
  },

  data: () => ({
    drawer: false,
  }),
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drawer = true;
    });
    this.Emitter.on("closeCart", () => {
      this.drawer = false;
    });
    this.getCartItems();
  },
};
</script>

<style lang="scss">
.v-navigation-drawer__content {
  ::-webkit-scrollbar {
    width: 5px;
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgb(136, 138, 137);
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    transition: all 0.5s ease-in-out;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(71, 71, 71);
  }
}
</style>
