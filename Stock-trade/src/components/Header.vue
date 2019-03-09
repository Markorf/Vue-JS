<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <router-link class="navbar-brand" exact to="/">Stock trader</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" exact to="portfolio">
              Portfolio
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" to="/stocks">Stocks</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a @click="endDay" class="nav-link">End day</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Save & Load</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a @click="saveData" class="dropdown-item">Save</a>
              <a @click="loadData" class="dropdown-item">Load data</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              Funds:
              <strong>${{funds.toLocaleString()}}</strong>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters(["funds", "stocks", "stockPortfolio"])
  },
  methods: {
    ...mapActions({
      fetchData: "loadData",
      randomizeStocks: "randomizeStocks"
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      // ova metoda ne mora da ide u vuex jer ne mutira nista, dok loadData treba
      const data = {
        funds: this.funds,
        stocks: this.stocks,
        stockPortfolio: this.stockPortfolio
      };
      this.$http
        .put("data.json", data)
        .then(data => {
          alert("Saved");
          console.log(data);
        })
        .catch(err => {
          alert("Error ocurred");
          console.log(err);
        });
    },
    loadData() {
      // koristi vuex zbog mutacije
      this.fetchData();
    }
  }
};
</script>

<style scoped>
</style>