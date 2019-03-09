<template>
  <div class="stock col-sm-4 my-3">
    <div class="card">
      <div class="card-header">
        {{title}} Price:
        <strong>$({{price}})</strong>
        Count: ({{stockCount}})
      </div>
      <div class="card-body">
        <input type="number" placeholder="How many to sell?" v-model="count">
      </div>
      <button
        :disabled="isDisabled"
        @click="sellStocks"
        class="btn btn-primary"
        :class="{disabled: isDisabled}"
      >Sell</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stock",
  props: ["title", "price", "id", "stockCount"],
  data() {
    return {
      count: "",
      isDisabled: true
    };
  },
  methods: {
    sellStocks() {
      const stockToSell = {
        title: this.title,
        price: this.price,
        quantity: Number(this.count),
        id: this.id
      };
      this.$store.dispatch("sellStocks", stockToSell);
      this.count = "";
    }
  },
  watch: {
    count(input) {
      if (
        input &&
        !Number.isNaN(Number(input)) &&
        input > 0 &&
        Number.isInteger(Number(input))
      ) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    }
  }
};
</script>

<style scoped>
</style>
