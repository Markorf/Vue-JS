<template>
  <div class="album container">
    <h1>Edit Album</h1>
    <form>
      <div v-for="(val, key) in album" :key="key">
        <label :for="key">{{key}}</label>
        <input
          required
          class="form-control"
          type="text"
          :id="key"
          :placeholder="'Edit ' + key"
          v-model="album[key]"
        >
      </div>
      <button @click.prevent="saveChanges(album.id)" class="btn btn-warning m-2">Save changes</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Edit",
  components: {},
  data() {
    return {
      album: {}
    };
  },
  methods: {
    fetchAlbum(albumId) {
      this.$http
        .get("https://jsonplaceholder.typicode.com/albums/" + albumId)
        .then(data => (this.album = data.body))
        .catch(err => {
          console.log(err);
          this.message = err.statusText;
        });
    },
    saveChanges(albumId) {
      this.$http
        .put(
          "https://jsonplaceholder.typicode.com/albums/" + albumId,
          this.album
        )
        .then(data => {
          this.$router.push({ path: "/", query: { message: "Album updated" } });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.fetchAlbum(this.$route.params.id);
  }
};
</script>
