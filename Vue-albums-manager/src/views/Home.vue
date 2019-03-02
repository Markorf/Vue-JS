<template>
  <div class="home">
    <h1>Albums</h1>
    <Alert :message="message"/>
    <input type="text" class="form-control my-2" placeholder="Search by title" v-model="searchText">
    <ul v-if="filteredAlbums.length" class="list-group">
      <li class="list-group-item" v-for="album in filteredAlbums" :key="album.id">
        <p>
          Album id:
          <strong>
            <router-link :to="'/albums/'+album.id">{{album.id}}</router-link>
          </strong>
        </p>
        <p>
          Title:
          <strong>{{album.title}}</strong>
        </p>
        <a @click.prevent="removeAlbum(album.id)" class="btn close">X</a>
      </li>
    </ul>
    <strong v-else>No albums found!</strong>
  </div>
</template>

<script>
import Alert from "../components/Alert.vue";

export default {
  name: "home",
  components: { Alert },
  data() {
    return {
      albums: [],
      message: "",
      searchText: ""
    };
  },
  methods: {
    fetchAlbums() {
      this.$http
        .get("")
        .then(data => {
          this.albums = data.body.slice(0, 10);
        })
        .catch(err => {
          console.log(err);
          this.message = err.statusText;
        });
    },
    removeAlbum(albumId) {
      this.$http
        .delete("https://jsonplaceholder.typicode.com/albums/" + albumId)
        .then(data => {
          console.log(data);
          this.message = "Album removed";
          // this.fetchAlbums();
        })
        .catch(err => {
          console.log(err);
          this.message = err.statusText;
        });
    }
  },
  computed: {
    filteredAlbums() {
      return this.albums.filter(album =>
        album.title.toUpperCase().match(this.searchText.toUpperCase())
      );
    }
  },
  created() {
    this.fetchAlbums();
    if (this.$route.query.message) {
      this.message = this.$route.query.message;
    }
  }
};
</script>
