<template>
  <div class="why-shop-with-us pb-8">
    <div class="title">
      <h2 class="text-center py-8"><span>Why Shop</span> With Us?</h2>
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="3">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
          >
            <div class="img-parent">
              <img src="@/assets/images/free-shipping.png" alt="" />
            </div>
            <v-card-title
              style="
                white-space: pre-wrap;
                line-height: 1.2;
                font-size: 20px;
                font-weight: 800;
              "
              >Free Shipping On First Order</v-card-title
            >
            <v-card-text class="pb-0"
              >Lorem ipsum dolor sit amet consectetur</v-card-text
            >
            <a
              href="#"
              class="text-white"
              style="font-size: 14px; font-weight: 700"
              >Learn More</a
            >
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
          >
            <div class="img-parent">
              <img src="@/assets/images/weekly-flash-sales.png" alt="" />
            </div>
            <v-card-title
              style="
                white-space: pre-wrap;
                line-height: 1.2;
                font-size: 20px;
                font-weight: 800;
              "
              >Weekly Flash Sale</v-card-title
            >
            <v-card-text class="pb-0"
              >Lorem ipsum dolor sit amet consectetur</v-card-text
            >
            <a
              href="#"
              class="text-white"
              style="font-size: 14px; font-weight: 700"
              >Learn More</a
            >
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
          >
            <div class="img-parent">
              <img src="@/assets/images/discount.png" alt="" />
            </div>
            <v-card-title
              style="
                white-space: pre-wrap;
                line-height: 1.2;
                font-size: 20px;
                font-weight: 800;
              "
              >Anual Payment Discount</v-card-title
            >
            <v-card-text class="pb-0"
              >Lorem ipsum dolor sit amet consectetur</v-card-text
            >
            <a
              href="#"
              class="text-white"
              style="font-size: 14px; font-weight: 700"
              >Learn More</a
            >
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
          >
            <div class="img-parent">
              <img src="@/assets/images/cash-back.png" alt="" />
            </div>
            <v-card-title
              style="
                white-space: pre-wrap;
                line-height: 1.2;
                font-size: 20px;
                font-weight: 800;
              "
              >Cashbac Reward Program</v-card-title
            >
            <v-card-text class="pb-0"
              >Lorem ipsum dolor sit amet consectetur</v-card-text
            >
            <a
              href="#"
              class="text-white"
              style="font-size: 14px; font-weight: 700"
              >Learn More</a
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.why-shop-with-us {
  background-image: url("../../assets/images/why-shop-with-us-banner.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  h2 {
    color: white;
    font-size: 30px;
    font-weight: 900;
    span {
      color: #0affd9;
    }
  }
}
</style>
