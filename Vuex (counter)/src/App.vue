<template>
  <div id="app">
    <Actions/>
    <Result/>
    <AsyncActions/>
    <!-- <input
      type="text"
      placeholder="Enter textval"
      :value="textVal"
      @input="$store.dispatch('updateText', $event.target.value)"
    >-->
    <input type="text" placeholder="Enter textval" v-model="textVal">
    <p>{{textVal}}</p>
  </div>
</template>

<script>
import Result from "./components/Result.vue";
import Actions from "./components/Actions.vue";
import AsyncActions from "./components/AsyncActions";
export default {
  name: "app",
  components: { Result, Actions, AsyncActions },
  computed: {
    // mora getter ili setter (retko), samo ukoliko koristim v-model pristup za computed metod
    // textVal() {
    //   return this.$store.getters.textVal;
    // }
    textVal: {
      get() {
        return this.$store.getters.textVal;
      },
      set(val) {
        this.$store.dispatch("updateText", val);
      }
    }
  }
};
</script>

<style>
</style>
