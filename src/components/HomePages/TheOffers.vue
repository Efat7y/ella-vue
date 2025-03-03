<template>
  <div class="offers bg-grey-lighten-4 py-7">
    <v-container fluid>
      <v-row>
        <v-col
          v-for="(img, index) in images"
          :key="index"
          cols="4"
          class="py-0 pr-6"
          style="height: 250px"
        >
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 15px"
            >
              <img
                :src="img.src"
                :style="`width: 100%; height: 100%; cursor: pointer; transition: 0.5s all ease-in-out; transform: scale(${
                  isHovering ? 1.1 : 1
                })`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
      <v-row class="mt-10">
        <v-col
          v-for="(img, index) in images2"
          :key="index"
          cols="6"
          class="py-0 pr-6"
          style="height: 400px"
        >
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 15px"
            >
              <img
                :src="img.src"
                :style="`width: 100%; height: 100%; cursor: pointer; transition: 0.5s all ease-in-out; transform: scale(${
                  isHovering ? 1.1 : 1
                })`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    images: [
      { src: require("../../assets/images/playstations.webp") },
      { src: require("../../assets/images/headset.webp") },
      { src: require("../../assets/images/chairs.webp") },
    ],
    images2: [
      { src: require("../../assets/images/iphones.webp") },
      { src: require("../../assets/images/laptops.webp") },
    ],
  }),
};
</script>

<style scoped>
.parent {
  position: relative;
}
</style>
