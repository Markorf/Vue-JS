<template>
  <div>
    <h3>Async actions:</h3>
    <button @click="increment({by: 5, dur: 1000})">Increment by val</button>
    <button @click="decrement({by: 3, dur: 1500})">Decrement by val</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["increment", "decrement"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  background: yellow;
  padding: 1rem;
  border: 1px solid green;
}
</style>
