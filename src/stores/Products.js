import { defineStore } from "pinia";
import axios from "axios";
export const ProductsModule = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
    NewProductes: [],
    FurnituresProductes: [],
    FragrancesProductes: [],
    GroceriesProductes: [],
    categoryProductes: [],
    SingleProduct: "",
    Categories: [
      {
        title: "Fragrances",
        route: "fragrances",
      },
      {
        title: "Beauty",
        route: "beauty",
      },
      {
        title: "Furnitures",
        route: "furnitures",
      },
      {
        title: "Groceries",
        route: "groceries",
      },
      {
        title: "Smart Phones",
        route: "smartphones",
      },
      {
        title: "Laptops",
        route: "laptops",
      },
    ],
  }),
  actions: {
    async getProducts() {
      await axios.get("https://dummyjson.com/products").then((res) => {
        this.NewProductes = res.data.products.filter(
          (el) => el.category === "beauty"
        );
        this.flashDeals = res.data.products.slice(0, 10);
        this.FurnituresProductes = res.data.products.filter(
          (el) => el.category === "furniture"
        );
        this.FragrancesProductes = res.data.products.filter(
          (el) => el.category === "fragrances"
        );
        this.GroceriesProductes = res.data.products.filter(
          (el) => el.category === "groceries"
        );
      });
    },
    async getProductCategories(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => {
          this.categoryProductes = res.data;
        });
    },
    async getSingleProduct(ProductId) {
      await axios
        .get(`https://dummyjson.com/products/${ProductId}`)
        .then((res) => {
          this.SingleProduct = res.data;
        });
    },
  },
});
