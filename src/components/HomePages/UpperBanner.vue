<template>
  <div class="banner">
    <div class="parent">
      <img src="@/assets/images/banner-bg.jpg" alt="" />
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
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner {
  .parent {
    height: 390px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .cont {
      position: absolute;
      width: 50%;
      top: 0;
      left: 40px;
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
        margin: 20px 0 30px 0;
      }
    }
  }
}
// Media Queries (max-width: 990px)
@media (max-width: 990px) {
  .banner {
    .parent {
      height: 320px;
      .cont {
        h2 {
          font-size: 35px;
        }
        width: 500px;
        left: 0px;
      }
    }
  }
}
// Media Queries (max-width: 767px)
@media (max-width: 767px) {
  .banner {
    .parent {
      height: 280px;
      .cont {
        padding-left: 20px;
        h2 {
          font-size: 30px;
        }
        width: 400px;
      }
      .hint {
        font-size: 14px;
      }
    }
  }
}
// Media Queries (max-width: 580px)
@media (max-width: 580px) {
  .banner {
    .parent {
      height: 230px;
      .cont {
        padding-left: 20px;
        padding-top: 25px;
        h2 {
          font-size: 23px;
        }
        width: 70%;
      }
      .hint {
        font-size: 12px;
      }
      button {
        font-size: 12px !important;
        height: 30px !important;
        width: 120px !important;
      }
    }
  }
}
</style>
