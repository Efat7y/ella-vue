<template>
  <div class="product-details pt-14">
    <h1 class="px-2">Product Details</h1>
    <v-container fluid>
      <v-row>
        <v-col cols="7" class="text-center">
          <img
            :src="tab ? tab : SingleProduct.thumbnail"
            class="w-75"
            height="450"
            v-if="!loading"
          />
          <v-skeleton-loader
            v-if="loading"
            type="image, image, image"
          ></v-skeleton-loader>
          <v-tabs
            center-active
            height="150"
            v-model="tab"
            class="mt-5 text-center"
          >
            <v-tab
              v-for="(img, i) in SingleProduct.images"
              :key="i"
              class="mx-10"
              :value="img"
            >
              <img :src="img" width="150" height="100" />
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
            <v-card-title class="px-0"
              >({{ SingleProduct.title }}) Sample -
              {{ SingleProduct.category }} For Sale</v-card-title
            >
            <div
              class="rating-parent d-flex align-center px-0"
              style="gap: 10px"
            >
              <v-rating
                v-model="SingleProduct.rating"
                half-increments
                readonly
                color="yellow-darken-2"
                size="x-small"
                density="compact"
                class="pt-0 pb-0 px-0"
              ></v-rating>
              <span class="stock" style="font-size: 12px; color: #858585"
                >stock: {{ SingleProduct.stock }}</span
              >
            </div>
            <v-card-text class="px-0" style="font-size: 12px; color: #858585">{{
              SingleProduct.description
            }}</v-card-text>
            <v-card-text
              class="px-0 pt-0"
              style="font-size: 12px; color: #858585"
              >Brand: {{ SingleProduct.brand }}</v-card-text
            >
            <v-card-text
              class="px-0 pt-0"
              style="font-size: 12px; color: #858585"
              >Availability: {{ SingleProduct.availabilityStatus }}</v-card-text
            >
            <v-card-text class="px-0 pb-0 pt-0">
              <del>${{ SingleProduct.price }}</del> From
              <span class=""
                ><strong
                  >${{
                    Math.ceil(
                      SingleProduct.price -
                        SingleProduct.price *
                          (SingleProduct.discountPercentage / 100)
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
                  SingleProduct.price -
                    SingleProduct.price *
                      (SingleProduct.discountPercentage / 100)
                ) * quantity
              }}</v-card-text
            >
            <v-card-actions class="mt-2 w-100 px-0">
              <v-btn
                variant="elevated"
                style="
                  text-transform: none;
                  border-radius: 30px;
                  color: #fff;
                  background: #000;
                "
                class="w-75"
                density="compact"
                height="40"
                @click="addToCart(SingleProduct)"
                :loading="btnLoading"
                >Add to Cart</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { ProductsModule } from "@/stores/Products";
import { mapActions, mapState } from "pinia";
import { cartStore } from "@/stores/Cart";
export default {
  inject: ["Emitter"],
  methods: {
    ...mapActions(ProductsModule, ["getSingleProduct"]),
    ...mapActions(cartStore, ["addItems"]),
    addToCart(product) {
      product.quantity = this.quantity;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addItems(product);
        this.Emitter.emit("openCart");
        this.Emitter.emit("showMessage", product.title);
      }, 1000);
    },
  },
  computed: {
    ...mapState(ProductsModule, ["SingleProduct"]),
  },
  async beforeMount() {
    this.loading = true;
    await this.getSingleProduct(this.$route.params.productId);
    this.loading = false;
  },
  data: () => ({
    btnLoading: false,
    loading: false,
    tab: "",
    quantity: 1,
    product: {
      id: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      discountPercentage: 7.17,
      rating: 4.94,
      stock: 5,
      tags: ["beauty", "mascara"],
      brand: "Essence",
      sku: "RCH45Q1A",
      weight: 2,
      dimensions: {
        width: 23.17,
        height: 14.43,
        depth: 28.01,
      },
      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "Low Stock",
      reviews: [
        {
          rating: 2,
          comment: "Very unhappy with my purchase!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "John Doe",
          reviewerEmail: "john.doe@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Not as described!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Nolan Gonzalez",
          reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Scarlett Wright",
          reviewerEmail: "scarlett.wright@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 24,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "9164035109868",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    },
  }),
};
</script>

<style></style>
