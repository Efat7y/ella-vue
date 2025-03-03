<template>
  <div class="new-products">
    <v-container fluid>
      <v-row>
        <v-col cols="7" v-if="!products.length">
          <v-row>
            <v-col cols="4" class="pt-16" v-for="num in 3" :key="num">
              <v-skeleton-loader
                type="image, article, button"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="7" v-else>
          <div class="titel mb-7 px-2 d-flex justify-space-between">
            <h2 class="" style="font-weight: bold; font-size: 30px">
              New Products
            </h2>
            <!-- <a href="#" class="text-black" style="font-size: 16px">Shop All</a> -->
          </div>
          <Swiper
            :pagination="{ el: '.swiper-pagination', clickable: true }"
            :modules="modules"
            :slides-per-view="3"
            :space-between="15"
            :autoplay="{ delay: 3000 }"
            class="pb-12"
          >
            <swiper-slide v-for="product in products" :key="product.id">
              <v-card elevation="0" class="pb-6" style="height: 450px">
                <v-hover v-slot="{ isHovering, props }">
                  <div
                    class="img-parent position-relative d-flex justify-content align-items-center"
                    v-bind="props"
                    style="overflow: hidden; height: 150px; border-radius: 15px"
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
                      width="50"
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
                    `(${product.title}) ${product.description}`.length <= 50
                      ? `(${product.title}) ${product.description}`
                      : `(${product.title}) ${product.description}`.substring(
                          0,
                          50
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
                    :rounded="x1"
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
                    class="py-2 px-7"
                    density="compact"
                    style="
                      text-transform: none;
                      border-radius: 30px;
                      position: absolute;
                      left: 23%;
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
            </swiper-slide>
          </Swiper>
        </v-col>
        <v-col cols="5">
          <div class="cont pt-3">
            <img
              src="../../assets/images/vr-banner.webp"
              class="w-100"
              style="height: 430px"
              alt=""
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Autoplay } from "swiper";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
export default {
  inject: ["Emitter"],
  methods: {
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    VSkeletonLoader,
  },
  data: () => ({
    showenItem: {},
  }),
};
</script>

<style lang="scss">
.v-rating__wrapper {
  margin-right: 10px;
}
.img-parent:hover {
  .Quick-view {
    opacity: 1 !important;
  }
}
</style>
