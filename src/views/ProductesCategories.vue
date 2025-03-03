<template>
  <div class="producte-categories bg-grey-lighten-4">
    <h1 class="text-center pt-8 pb-4">{{ $route.params.title }}</h1>
    <v-container fluid v-if="categoryProductes.products">
      <v-card elevation="0" :loading="loading" class="pt-8" min-width="700px">
        <v-row v-if="loading">
          <v-col cols="3" v-for="num in 4" :key="num">
            <v-skeleton-loader
              type="image, article, button"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row v-if="!loading">
          <v-col
            class="px-3"
            cols="3"
            v-for="product in categoryProductes.products"
            :key="product.id"
          >
            <v-lazy>
              <v-card
                elevation="0"
                class="pb-6"
                style="
                  height: 550px;
                  border-radius: 15px;
                  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
                "
              >
                <v-hover v-slot="{ isHovering, props }">
                  <div
                    class="img-parent position-relative d-flex justify-content align-items-center"
                    v-bind="props"
                    style="overflow: hidden; height: 300px; border-radius: 15px"
                  >
                    <img
                      :src="
                        showenItem[product.title]
                          ? showenItem[product.title]
                          : product.thumbnail
                      "
                      class="w-100"
                      :style="`width: 100%; height: 100%; cursor: pointer; transition: 0.5s all ease-in-out; transform: scale(${
                        isHovering ? 1.1 : 1
                      })`"
                      alt=""
                    />
                    <v-btn
                      density="compact"
                      width="90"
                      height="25"
                      variant="outlined"
                      class="bg-white Quick-view"
                      style="
                        text-transform: none;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        border-radius: 30px;
                        font-size: 12px;
                        transition: 0.02 all ease-in-out;
                        opacity: 0;
                      "
                      @click="openQuickView(product)"
                      >Quick View</v-btn
                    >
                  </div>
                </v-hover>
                <v-card-text class="pl-3 pt-4 pb-0">
                  {{
                    `( ${product.title} ) ${product.description}`.length <= 70
                      ? `(${product.title}) ${product.description}`
                      : `(${product.title}) ${product.description}`.substring(
                          0,
                          70
                        ) + " ..."
                  }}
                </v-card-text>
                <v-rating
                  v-model="product.rating"
                  half-increments
                  readonly
                  color="yellow-darken-2"
                  size="x-small"
                  density="compact"
                  class="pl-3 pt-0 pb-0"
                ></v-rating>
                <v-card-text class="pl-3 pb-0 pt-0">
                  <del>${{ product.price }}</del> From
                  <span class="text-red"
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
                <v-btn-toggle
                  v-model="showenItem[product.title]"
                  class="d-flex justify-content align-center pt-0 pb-0"
                >
                  <v-btn
                    v-for="(pic, i) in product.images"
                    :value="pic"
                    :key="i"
                    size="x-small"
                    :ripple="false"
                    ><img
                      :src="pic"
                      alt=""
                      width="30"
                      height="30"
                      style="border-radius: 50%; border: 1px solid #999"
                  /></v-btn>
                </v-btn-toggle>
                <div
                  class="d-flex justify-content align-center pb-0 position-relative"
                >
                  <v-btn
                    width="70%"
                    height="35px"
                    density="compact"
                    style="
                      text-transform: none;
                      border-radius: 30px;
                      position: absolute;
                      left: 15%;
                      bottom: -55px;
                    "
                    vairant="outlined"
                    @click="
                      $router.push({
                        name: 'product-details',
                        params: { productId: product.id },
                      })
                    "
                    >Choose Options</v-btn
                  >
                </div>
              </v-card>
            </v-lazy>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { ProductsModule } from "@/stores/Products";
import { mapActions, mapState } from "pinia";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
export default {
  components: { VSkeletonLoader },
  inject: ["Emitter"],
  data: () => ({
    loading: false,
    showenItem: {},
  }),
  methods: {
    ...mapActions(ProductsModule, ["getProductCategories"]),
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
  computed: {
    ...mapState(ProductsModule, ["categoryProductes"]),
  },
  watch: {
    async $route() {
      // document.documentElement.scrollTop(0, 0);
      this.loading = true;
      await this.getProductCategories(this.$route.params.category);
      this.loading = false;
    },
  },
  async mounted() {
    this.loading = true;
    await this.getProductCategories(this.$route.params.category);
    this.loading = false;
  },
};
</script>

<style lang="scss">
.img-parent:hover {
  .Quick-view {
    opacity: 1 !important;
  }
}
</style>
