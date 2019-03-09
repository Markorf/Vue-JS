<template>
  <div class="portfolio">
    <transition>
      <Modal v-show="modalMessage">{{modalMessage}}</Modal>
    </transition>
    <div class="card text-center">
      <h3>Your portfolio</h3>
      <div class="row">
        <PortfolioStock
          v-for="stock in stocks"
          :key="stock.id"
          :id="stock.id"
          :title="stock.title"
          :price="stock.price"
          :stockCount="stock.quantity"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioStock from "../components/PortfolioStock.vue";
import Modal from "../components/Modal.vue";
import { mapGetters } from "vuex";
export default {
  name: "Portfolio",
  components: {
    PortfolioStock,
    Modal
  },
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio",
      modalMessage: "modalMessage"
    })
  },
  created() {
    // console.log(this.$store);
  },
  updated() {
    // console.log(this.$store.getters.modalMessage);
  }
};
</script>
