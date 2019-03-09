<template>
  <div class="home">
    <div class="card text-center">
      <div class="card-header">Trade or view your Portfolio</div>
      <div class="card-body">
        <h5 class="card-title">You may save & load your Data</h5>
        <p class="card-text">
          Click on
          <em>New day</em> to begin a new day
        </p>
      </div>
      <div class="card-footer text-muted">
        Your funds:
        <strong>${{funds.toLocaleString()}}</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>