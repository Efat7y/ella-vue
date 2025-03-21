import { defineStore } from "pinia";
export const cartStore = defineStore("cartStore", {
  state: () => ({
    CartItems: [],
  }),
  actions: {
    addItems(item) {
      let exists = false;
      for (let i = 0; i < this.CartItems.length; i++) {
        if (this.CartItems[i].id == item.id) {
          this.CartItems[i].quantity += item.quantity;
          exists = true;
          break;
        }
      }
      if (!exists) {
        this.CartItems.push(JSON.parse(JSON.stringify(item)));
      }
      localStorage.setItem("cart-items", JSON.stringify(this.CartItems));
      console.log(this.CartItems);
    },
    getCartItems() {
      if (localStorage.getItem("cart-items")) {
        this.CartItems = JSON.parse(localStorage.getItem("cart-items"));
      }
      console.log(this.CartItems);
    },
    deleteItem(id) {
      for (let i = 0; i < this.CartItems.length; i++) {
        if (this.CartItems[i].id == id) {
          this.CartItems.splice(i, 1);
          break;
        }
      }
      localStorage.setItem("cart-items", JSON.stringify(this.CartItems));
      console.log(this.CartItems);
    },
    setToLocalStorage() {
      localStorage.setItem("cart-items", JSON.stringify(this.CartItems));
    },
    resetItems() {
      this.CartItems = [];
      localStorage.removeItem("cart-items");
    },
  },
});
