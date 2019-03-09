<template>
  <div class="modalMessage" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Message</h5>
          <button
            type="button"
            @click="hideModal"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <button
            @click="hideModal"
            type="button"
            class="btn btn-secondary"
            data-dismiss="modalMessage"
          >Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    hideModal() {
      this.$store.dispatch("hideModal");
    }
  }
};
</script>

<style scoped>
.modalMessage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
}
</style>