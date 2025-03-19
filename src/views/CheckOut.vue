<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row>
      <v-col cols="7"></v-col>
      <v-col cols="5">
        <v-card
          elevation="0"
          color="grey-lighten-3"
          width="100%"
          style="padding: 60px 120 0 40px"
        >
          <v-card
            elevation="0"
            v-for="item in CartItems"
            :key="item.id"
            width="100%"
            color="transparent"
            class="d-flex justify-space-between align-center"
          >
            <v-badge :content="item.quantity" color="gray-darken-1">
              <img
                :src="item.thumbnail"
                alt=""
                width="50"
                height="50"
                style="border-radius: 7px"
              />
            </v-badge>
            <div class="titile-parenr flex-grow-1">
              <v-card-title
                class="py-0"
                style="
                  font-weight: 700;
                  font-size: 14px;
                  color: #484848;
                  white-space: pre-wrap;
                  line-height: 1.2;
                "
                >({{ item.title }}) Sample - {{ item.category }} for
                sale</v-card-title
              >
              <v-card-text
                style="font-size: 12px; color: #777777; white-space: pre-wrap"
                >{{ item.category }}</v-card-text
              >
            </div>
            <v-card-text
              class="flex-grow-0"
              style="font-weight: 700; font-size: 14px; color: #777777"
              >${{
                Math.ceil(
                  item.price - item.price * (item.discountPercentage / 100)
                ) * item.quantity
              }}</v-card-text
            >
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-text
              ><span>TOTAL:</span><span>{{ calcTotalPrice }}</span></v-card-text
            >
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState } from "pinia";
import { cartStore } from "@/stores/Cart";
export default {
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
};
</script>

<style></style>
