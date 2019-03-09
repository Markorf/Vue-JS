<template>
  <div class="stocks">
    <h3>Stocks compnent!</h3>
    <div class="row">
      <Stock
        v-for="stock in stocks"
        :key="stock.id"
        :title="stock.title"
        :price="stock.price"
        :id="stock.id"
      />
    </div>
    <transition>
      <Modal v-if="modalMessage">{{modalMessage}}</Modal>
    </transition>
  </div>
</template>

<script>
import Stock from "../components/Stock.vue";
import Modal from "../components/Modal.vue";
import { mapGetters } from "vuex";

export default {
  name: "Stocks",
  components: {
    Stock,
    Modal
  },
  computed: {
    ...mapGetters(["stocks", "modalMessage"])
  },
  created() {
    // this.$http.get("").then(data => console.log(data));
  },
  updated() {
    // console.log("updated stocks");
  }
};
</script>

<style scoped>
</style>