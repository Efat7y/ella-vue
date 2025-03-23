<template>
  <div class="top-categoris">
    <div class="cyper-baneer">
      <img src="../../assets/images/cyber-banner.webp" class="w-100" alt="" />
    </div>
    <div class="categories mt-10">
      <div class="title d-flex justify-space-between align-center mb-3 px-5">
        <h2
          class="text-center flex-grow-1"
          style="font-size: 20px; font-weight: 900"
        >
          Top Categories
        </h2>
      </div>
      <v-container fluid>
        <v-row>
          <v-col cols="2" v-for="cat in categories" :key="cat.title">
            <v-card class="text-center px-5 py-5" elevation="0" style="">
              <v-hover v-slot="{ isHovering, props }">
                <div
                  class="img-parent"
                  v-bind="props"
                  style="overflow: hidden; height: 100%; border-radius: 50%"
                >
                  <img
                    :src="cat.image"
                    class="w-100"
                    :style="`width: 100%; height: 100%; cursor: pointer; transition: 0.5s all ease-in-out; transform: scale(${
                      isHovering ? 1.1 : 1
                    })`"
                    alt=""
                  />
                </div>
              </v-hover>
              <!-- <img :src="cat.image" style="cursor: pointer" alt="" /> -->
              <v-card-text>{{ cat.title }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    categories: [
      {
        title: "Mobiles Phones",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
      },
      {
        title: "Labtops",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
      },
      {
        title: "TVS",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
      },
      {
        title: "PCs",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
      },
      {
        title: "Audio & Video",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
      },
      {
        title: "Gaming",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
      },
      {
        title: "Home Appliances",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
      },
      {
        title: "Kitchen",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
      },
      {
        title: "Cameras",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
      },
      {
        title: "Consumables",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
      },
      {
        title: "Smart Homes",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
      },
      {
        title: "Accessories",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
      },
    ],
  }),
};
</script>

<style></style>
