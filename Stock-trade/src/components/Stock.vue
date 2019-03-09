<template>
  <div class="stock col-sm-4 my-3">
    <div class="card">
      <div class="card-header">
        {{title}} Price:
        <strong>$({{price}})</strong>
      </div>
      <div class="card-body">
        <input type="number" placeholder="Count" v-model="count">
      </div>
      <button
        :disabled="isDisabled"
        @click="buyStock"
        class="btn btn-success"
        :class="{disabled: isDisabled}"
      >Buy</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stock",
  props: ["title", "price", "id"],
  data() {
    return {
      count: "",
      isDisabled: true
    };
  },
  methods: {
    buyStock() {
      const newStock = {
        title: this.title,
        price: this.price,
        quantity: Number(this.count),
        id: this.id
      };
      this.$store.dispatch("buyStocks", newStock);
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
