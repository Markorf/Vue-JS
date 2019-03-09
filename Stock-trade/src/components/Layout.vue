<template>
  <div id="app" class="container">
    <Header/>
    <slot></slot>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  name: "Layout",
  components: {
    Header
  }
};
</script>