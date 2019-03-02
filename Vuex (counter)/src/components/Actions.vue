<template>
  <div>
    <button @click="increment(1)">Increment</button>
    <button @click="decrement(1)">Decrement</button>
    <button @click="randomize">Randomize</button>
    <br>
    <strong @click="addBy4">Click to add by 4</strong>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["increment", "decrement", "randomize"]),
    addBy4() {
      this.$store.state.counter += 2;
      this.$store.commit("increment", 1);
      //   gore je za mutations, dole je za actions
      this.$store.dispatch("increment", { by: 1 });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
