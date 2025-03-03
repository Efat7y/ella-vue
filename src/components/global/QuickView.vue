<template>
  <div class="quick-view pt-14">
    <!-- <h1>Product Details</h1> -->
    <v-dialog v-model="dialog" class="" max-width="1000" max-height="550">
      <v-icon
        class="py-2 px-2"
        style="
          z-index: 9;
          font-size: 18px;
          position: absolute;
          top: -15px;
          right: -15px;
          background: black;
          color: #fff;
        "
        @click="dialog = false"
        >mdi-close</v-icon
      >
      <v-card class="content-card" elevation="0">
        <v-container fluid class="bg-white pt-10">
          <v-row>
            <v-col cols="7" class="text-center">
              <img
                :src="tab ? tab : product.thumbnail"
                class="w-75"
                height="500"
                v-if="!loading"
              />
              <v-skeleton-loader
                v-if="loading"
                type="image, image, image"
              ></v-skeleton-loader>
              <v-tabs
                center-active
                height="200"
                v-model="tab"
                class="mt-5 text-center"
              >
                <v-tab
                  v-for="(img, i) in product.images"
                  :key="i"
                  class="mx-2"
                  :value="img"
                >
                  <img :src="img" width="100" height="100" />
                  <v-skeleton-loader
                    v-if="loading"
                    type="image, image, image"
                  ></v-skeleton-loader>
                </v-tab>
              </v-tabs>
            </v-col>
            <v-col cols="5" class="pt-0 pl-6">
              <v-skeleton-loader
                v-if="loading"
                type="article, article, article, button"
              ></v-skeleton-loader>
              <v-card elevation="0">
                <v-card-title class="px-0" style="white-space: pre-wrap"
                  >({{ product.title }}) Sample - {{ product.category }} For
                  Sale</v-card-title
                >
                <div
                  class="rating-parent d-flex align-center px-0"
                  style="gap: 10px"
                >
                  <v-rating
                    v-model="product.rating"
                    half-increments
                    readonly
                    color="yellow-darken-2"
                    size="x-small"
                    density="compact"
                    class="pt-0 pb-0 px-0"
                  ></v-rating>
                  <span class="stock" style="font-size: 12px; color: #858585"
                    >stock: {{ product.stock }}</span
                  >
                </div>
                <v-card-text
                  class="px-0"
                  style="font-size: 12px; color: #858585"
                  >{{ product.description }}</v-card-text
                >
                <v-card-text
                  class="px-0 pt-0"
                  style="font-size: 12px; color: #858585"
                  >Brand: {{ product.brand }}</v-card-text
                >
                <v-card-text
                  class="px-0 pt-0"
                  style="font-size: 12px; color: #858585"
                  >Availability: {{ product.availabilityStatus }}</v-card-text
                >
                <v-card-text class="px-0 pb-0 pt-0">
                  <del>${{ product.price }}</del> From
                  <span class=""
                    ><strong
                      >${{
                        Math.ceil(
                          product.price -
                            product.price * (product.discountPercentage / 100)
                        )
                      }}</strong
                    ></span
                  >
                </v-card-text>
                <v-card-actions class="px-0">Quantity</v-card-actions>
                <div
                  class="counter px-1"
                  style="
                    border-radius: 30px;
                    border: 1px solid #858585;
                    width: fit-content;
                  "
                >
                  <v-icon size="22" @click="quantity > 1 ? quantity-- : false"
                    >mdi-minus</v-icon
                  >
                  <input
                    type="number"
                    class="text-center py-2"
                    style="
                      outline: none;
                      width: 50px;
                      border: none;
                      font-size: 12px;
                    "
                    min="1"
                    v-model="quantity"
                  />
                  <v-icon size="22" @click="quantity++">mdi-plus</v-icon>
                </div>
                <v-card-text class="px-0"
                  >Subtotal: ${{
                    Math.ceil(
                      product.price -
                        product.price * (product.discountPercentage / 100)
                    ) * quantity
                  }}</v-card-text
                >
                <v-card-actions class="mt-7 w-100 px-0">
                  <v-btn
                    variant="elevated"
                    style="
                      text-transform: none;
                      border-radius: 30px;
                      color: #fff;
                      background: #000;
                    "
                    class="w-75 animation"
                    density="compact"
                    height="40"
                    @click="addToCart(product)"
                    :loading="btnLoading"
                    >Add to Cart</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { cartStore } from "@/stores/Cart";
import { mapActions } from "pinia";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
export default {
  inject: ["Emitter"],
  components: { VSkeletonLoader },
  methods: {
    ...mapActions(cartStore, ["addItems"]),
    addToCart(product) {
      product.quantity = this.quantity;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addItems(product);
        this.Emitter.emit("openCart");
        this.Emitter.emit("showMessage", product.title);
        this.dialog = false;
      }, 1000);
    },
  },
  data: () => ({
    dialog: false,
    loading: false,
    tab: "",
    quantity: 1,
    product: "",
    btnLoading: false,
  }),
  mounted() {
    this.Emitter.on("openQuickView", (data) => {
      this.loading = true;
      this.product = data;
      this.dialog = true;
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    });
  },
};
</script>

<style lang="scss"></style>
