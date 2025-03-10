import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductesCategories from "../views/ProductesCategories.vue";
import ProductDetails from "../views/ProductDetails.vue";
import CartPage from "../views/CartPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/productes/:category/:title",
    name: "ProductesCategories",
    component: ProductesCategories,
  },
  {
    path: "/productes/product-details/:productId",
    name: "product-details",
    component: ProductDetails,
  },
  {
    path: "/cart-page",
    name: "CartPage",
    component: CartPage,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
