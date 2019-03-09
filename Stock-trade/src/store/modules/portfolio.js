const state = {
  funds: 500,
  stocks: [],
  modalMessage: ""
};

const mutations = {
  BUY_STOCKS(state, payload) {
    const amount = payload.price * payload.quantity;
    if (state.funds < amount) {
      return this.dispatch(
        "showModal",
        "You don't have enough money to by more stocks"
      );
    }
    const record = state.stocks.find(stock => stock.id === payload.id);
    if (record) {
      record.quantity += payload.quantity;
    } else {
      state.stocks.push({
        id: payload.id,
        quantity: payload.quantity
      });
    }

    state.funds -= amount;
  },
  SELL_STOCKS(state, payload) {
    const record = state.stocks.find(stock => stock.id === payload.id);
    if (record.quantity > payload.quantity) {
      record.quantity -= payload.quantity;
    } else if (record.quantity === payload.quantity) {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    } else {
      return this.dispatch(
        "showModal",
        "You can not sell more stocks than you have"
      );
    }
    state.funds += payload.price * payload.quantity;
  },
  SHOW_MODAL(state, payload) {
    state.modalMessage = payload;
  },
  HIDE_MODAL(state) {
    state.modalMessage = "";
  },
  SET_PORTFOLIO(state, payload) {
    // poziva se od strane akcije u actions.js kao sto se poziva SET_STOCK u stocks.js
    state.stocks = payload.stockPortfolio ? payload.stockPortfolio : [];
    state.funds = payload.funds;
  }
};

const actions = {
  sellStocks({ commit }, payload) {
    commit("SELL_STOCKS", payload);
  },
  // buyStock akcija je definisana u drugom modulu
  showModal({ commit }, payload) {
    commit("SHOW_MODAL", payload);
  },
  hideModal({ commit }) {
    commit("HIDE_MODAL");
  }
};

const getters = {
  funds(state) {
    return state.funds;
  },

  modalMessage(state) {
    return state.modalMessage;
  },
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      const record =
        getters.stocks.find(element => element.id === stock.id) || {};
      return {
        id: stock.id,
        quantity: stock.quantity,
        title: record.title,
        price: record.price
      };
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
