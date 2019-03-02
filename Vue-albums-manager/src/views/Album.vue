<template>
  <div class="album">
    <h1>Album</h1>
    <Alert :message="message"/>
    <ul class="list-group">
      <li class="list-group-item" v-for="(val, key) in album" :key="key">
        ({{key}}) :
        <strong>{{val}}</strong>
      </li>
    </ul>
    <button @click="editUser" class="btn btn-warning m-2">Edit</button>
  </div>
</template>

<script>
import Alert from "../components/Alert";
export default {
  name: "Album",
  components: {
    Alert
  },
  data() {
    return {
      album: {},
      message: ""
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
    editUser() {
      this.$router.push("/edit/" + this.$route.params.id);
    }
  },
  created() {
    this.fetchAlbum(this.$route.params.id);
  }
};
</script>
