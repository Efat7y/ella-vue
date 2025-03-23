<template>
  <div class="home">
    <UpperBanner />
    <TheFeatures />
    <TheOffers />
    <ProductsComponents
      :products="flashDeals"
      title="Flash Deals"
      titleColor="red"
      :index="0"
    />
    <TopCategories />
    <NewProductes :products="NewProductes" :index="1" />
    <QualityFeatures />
    <ProductsComponents
      :products="FurnituresProductes"
      title="Top Furnitures"
      titleColor="#5b5b5b"
      :index="2"
    />
    <v-container fluid>
      <v-row class="mt-5 mb-5">
        <v-col cols="6" class="pr-5"
          ><img src="@/assets/images/band-left-cover.webp" alt="" class="w-100"
        /></v-col>
        <v-col cols="6" class="pl-5"
          ><img
            src="@/assets/images/band-right-cover.webp"
            alt=""
            class="w-100"
        /></v-col>
      </v-row>
    </v-container>
    <ProductsComponents
      :products="FragrancesProductes"
      title="Top Fragrances"
      titleColor="#5b5b5b"
      :index="0"
    />
    <img src="@/assets/images/tv-banner.webp" alt="" class="w-100" />
    <ProductsComponents
      :products="GroceriesProductes"
      title="Top Groceries"
      titleColor="#5b5b5b"
      :index="3"
    />
    <WhyShopWithUs />
  </div>
</template>

<script>
import UpperBanner from "@/components/HomePages/UpperBanner.vue";
import TheFeatures from "@/components/HomePages/TheFeatures.vue";
import TheOffers from "@/components/HomePages/TheOffers.vue";
import ProductsComponents from "@/components/HomePages/ProductsSwiper.vue";
import TopCategories from "@/components/HomePages/TopCategories.vue";
import NewProductes from "@/components/HomePages/NewProductes.vue";
import QualityFeatures from "@/components/HomePages/QualityFeatures.vue";

import { ProductsModule } from "@/stores/Products";
import { mapActions, mapState } from "pinia";
import WhyShopWithUs from "@/components/HomePages/WhyShopWithUs.vue";
export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TheFeatures,
    TheOffers,
    ProductsComponents,
    TopCategories,
    NewProductes,
    QualityFeatures,
    WhyShopWithUs,
  },
  computed: {
    ...mapState(ProductsModule, [
      "flashDeals",
      "NewProductes",
      "FurnituresProductes",
      "FragrancesProductes",
      "GroceriesProductes",
    ]),
  },
  methods: {
    ...mapActions(ProductsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
