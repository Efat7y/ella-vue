<template>
  <div class="banner">
    <div class="parent">
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="cont">
              <h2><span>Hage Saving</span> on UHD Television</h2>
              <p class="hint">Sale Up To 70% oof on Selected Items*</p>
              <v-btn
                variant="outlined"
                denisity="compact"
                style="border-radius: 30px; text-transform: none"
                class="text-white py-2 px-10"
                >Shop Now</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner {
  .parent {
    height: 380px;
    background: url("../../assets/images/banner-bg.jpg") center center no-repeat;
    background-size: cover;
    background-position: 0px 0;
    .cont {
      color: #fff;
      padding: 50px 0 0 90px;
      h2 {
        font-size: 50px;
        font-weight: bold;
        span {
          color: #0affd9;
        }
      }
      .hint {
        margin: 20px 0 40px 0;
      }
    }
  }
}
</style>
