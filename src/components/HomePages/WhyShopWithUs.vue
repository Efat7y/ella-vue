<template>
  <div class="why-shop-with-us pb-8">
    <div class="title">
      <h2 class="text-center py-8"><span>Why Shop</span> With Us?</h2>
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="3" class="mb-5 mb-lg-0">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
          >
            <div class="img-parent-why">
              <img
                src="@/assets/images/free-shipping.png"
                style="width: 50px; height: 50px"
                alt=""
              />
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
        <v-col cols="12" sm="6" md="6" lg="3" class="mb-5 mb-lg-0">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
          >
            <div class="img-parent-why">
              <img
                src="@/assets/images/weekly-flash-sales.png"
                style="width: 50px; height: 50px"
                alt=""
              />
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
        <v-col cols="12" sm="6" md="6" lg="3" class="mb-5 mb-lg-0">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
          >
            <div class="img-parent-why">
              <img
                src="@/assets/images/discount.png"
                style="width: 50px; height: 50px"
                alt=""
              />
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
        <v-col cols="12" sm="6" md="6" lg="3" class="mb-5 mb-lg-0">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
          >
            <div class="img-parent-why">
              <img
                src="@/assets/images/cash-back.png"
                style="width: 50px; height: 50px"
                alt=""
              />
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
@media (max-width: 580px) {
  .why-shop-with-us {
    .v-card {
      height: auto !important;
    }
  }
}
</style>
