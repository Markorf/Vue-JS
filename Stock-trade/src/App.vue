<template>
  <Layout>
    <transition
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp"
      mode="out-in"
    >
      <router-view></router-view>
    </transition>
  </Layout>
</template>

<script>
import Layout from "./components/Layout.vue";
export default {
  name: "App",
  components: {
    Layout
  },
  created() {
    this.$store.dispatch("initStocks");
  }
};
</script>

<style>
a {
  cursor: pointer;
}
</style>
