<template>
  <div class="order-success">
    <v-dialog v-model="dialog" width="50%" persistent>
      <v-card class="text-center py-7">
        <div class="text-center">
          <v-icon
            size="100"
            style="
              color: green;
              border-radius: 50%;
              background: white;
              border: 1px solid green;
            "
            >mdi-check</v-icon
          >
        </div>
        <v-card-title
          style="font-weight: bold; font-size: 25px; color: rgb(93, 93, 93)"
          >Order Placed Successfully!</v-card-title
        >
        <v-card-text style="font-size: 17px; color: rgb(134, 134, 134)">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          doloremque ipsa beatae quisquam debitis adipisci suscipit, vel quis
          cum fugit ab, quae eligendi repellendus saepe laudantium modi iste
          dolor minus.
        </v-card-text>
        <v-card-actions class="justify-center"
          ><v-btn
            width="20%"
            variant="elevated"
            color="blue"
            class="font-weight-bold"
            @click="resetData"
            >Got It!</v-btn
          ></v-card-actions
        >
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { cartStore } from "@/stores/Cart";
import { mapActions } from "pinia";
export default {
  data: () => ({
    dialog: false,
  }),
  props: {
    popup: {
      type: Boolean,
    },
  },
  watch: {
    dialog(newval) {
      if (!newval) {
        setTimeout(() => {
          this.$emit("close_popup");
        }, 5000);
      }
    },
  },
  methods: {
    ...mapActions(cartStore, ["resetItems"]),
    resetData() {
      this.resetItems();
      this.dialog = false;
      this.$router.push({ name: "home" });
    },
  },
  mounted() {
    this.dialog = this.popup;
  },
};
</script>
<style></style>
