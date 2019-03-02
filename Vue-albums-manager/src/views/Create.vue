<template>
  <div class="album container">
    <h1>Album</h1>
    <Alert :message="message"/>
    <form>
      <div v-for="(val, key) in album" :key="key">
        <label :for="key">{{key}}</label>
        <input
          required
          class="form-control"
          type="text"
          :id="key"
          :placeholder="'Add ' + key"
          :disabled="key === 'id' ? 'true' : null"
          v-model="album[key]"
        >
      </div>
      <button @click.prevent="addAlbum" class="btn btn-secondary m-2">Add album</button>
    </form>
  </div>
</template>

<script>
import Alert from "../components/Alert";
export default {
  name: "Create",
  components: {
    Alert
  },
  data() {
    return {
      album: {
        id: "",
        userId: "",
        title: ""
      },
      message: ""
    };
  },
  methods: {
    addAlbum() {
      this.$http
        .post("", this.album)
        .then(data => {
          console.log(data);
          this.message = "Album created";
        })
        .catch(err => {
          console.log(err);
          this.message = err.statusText;
        });
    }
  }
};
</script>
