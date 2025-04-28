<template>
  <div
    class="product-swiper pt-16 px-5 py-5"
    style="background: rgb(228 228 228)"
  >
    <div class="titel mb-7 px-2 d-flex justify-space-between">
      <h2
        :class="[`text-${titleColor}`]"
        style="font-weight: bold; font-size: 30px"
      >
        {{ title }}
      </h2>
      <!-- <router-link
        :to="{
          name: 'ProductesCategories',
          query: {
            title: categories[index].title,
            category: categories[index].route,
          },
        }"
        style="color: white; text-decoration: none"
        >Shop All</router-link
      > -->
    </div>
    <v-container fluid v-if="!products.length">
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col cols="3" v-for="num in 4" :key="num">
              <v-skeleton-loader
                type="image, article, button"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <Swiper
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :modules="modules"
      :slides-per-view="4"
      :space-between="20"
      :navigation="{ prevIcon: '.swiper-prev', nextIcon: '.swiper-next' }"
      :breakpoints="breakpoints"
      :autoplay="{
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }"
      :loop="true"
      class="pb-12"
    >
      <swiper-slide v-for="product in products" :key="product.id">
        <v-card elevation="0" class="pb-6" style="height: 530px">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="img-parent position-relative"
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
              `(${product.title}) ${product.description}`.length <= 67
                ? `(${product.title}) ${product.description}`
                : `(${product.title}) ${product.description}`.substring(0, 67) +
                  " ..."
            }}
          </v-card-text>
          <v-rating
            v-model="product.rating"
            half-increments
            readonly
            color="yellow-darken-2"
            size="x-small"
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
            mandatory
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
            class="d-flex justify-content text-center align-center pb-0 position-relative"
          >
            <v-btn
              class="py-2 ml-7 ml-sm-7 ml-md-9 ml-lg-7 px-7 choose"
              density="combact"
              style="
                text-transform: none;
                width: 70%;
                border-radius: 30px;
                position: absolute;
                bottom: -55px;
              "
              variant="outlined"
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
      <div class="swiper-prev"></div>
      <div class="swiper-next"></div>
      <div class="swiper-pagination"></div>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
import { mapState } from "pinia";

import { ProductsModule } from "@/stores/Products";
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
    },
    title: {
      type: String,
    },
    titleColor: {
      type: String,
    },
    routeTitle: {
      type: String,
    },
    routeCategory: {
      type: String,
    },
    index: {
      type: Number,
    },
  },
  computed: {
    ...mapState(ProductsModule, ["categories"]),
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    VSkeletonLoader,
  },
  data: () => ({
    showenItem: {},
    breakpoints: {
      0: { slidesPerView: 1 },
      580: { slidesPerView: 2 },
      767: { slidesPerView: 2 },
      990: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
    },
  }),
};
</script>
<style lang="scss">
.product-swiper {
  .swiper-button-next,
  .swiper-button-prev {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: solid 2px #999999;
    line-height: 30px;
    background-color: #fff;
    top: 53%;
    // right: 42%;
    // left: 42%;
    &::after {
      font-size: 15px;
      padding: 7px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #999999;
      font-weight: bold;
    }
  }
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
  }
  .swiper-pagination-bullet-active {
    width: 12px;
    height: 12px;
    transition: all 0.3s ease-in-out;
  }
  .v-rating__wrapper {
    margin-right: 3px;
  }
  .img-parent:hover {
    .Quick-view {
      opacity: 1 !important;
    }
  }
}
// Media Queries (max-width: 767px)
@media (max-width: 767px) {
  .swiper-button-next,
  .swiper-button-prev {
    top: 55% !important;
  }
  .v-card {
    height: 580px !important;
    .choose {
      width: 75% !important;
      margin-left: 30px !important;
    }
  }
  .img-parent {
    height: 350px !important;
  }
}
// Media Queries (max-width: 580px)
@media (max-width: 580px) {
  .swiper-button-next,
  .swiper-button-prev {
    top: 55% !important;
  }
  .v-card {
    height: 580px !important;
    .choose {
      width: 75% !important;
      margin-left: 30px !important;
    }
    .img-parent {
      height: 350px !important;
    }
  }
}
</style>
