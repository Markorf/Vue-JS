<template>
  <div>
    <p>Regular counter: {{counter}}</p>
    <p>Doubled counter: {{doubleCounter}}</p>
    <strong @click="logCounter">Click to log counter</strong>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["counter", "doubleCounter"]),
    logCounter() {
      return () => console.log(this.$store.state.counter);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
