import Vue from "vue";
export const loadData = ({ commit }) => {
  Vue.http
    .get("data.json")
    .then(data => {
      commit("SET_PORTFOLIO", {
        funds: data.body.funds,
        stockPortfolio: data.body.stockPortfolio
      });
      commit("SET_STOCKS", data.body.stocks);
    })
    .catch(() => {
      alert("Error occured");
    });
};
