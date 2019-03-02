<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
    <router-link to="/" class="navbar-brand">VUE APP</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">
            Home
            <span class="sr-only">(current)</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/create" class="nav-link">New album</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/bar" class="nav-link disabled">Disabled</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "navbar"
};
</script>

<style scoped>
</style>