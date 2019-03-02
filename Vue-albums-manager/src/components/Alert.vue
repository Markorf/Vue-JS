<template>
  <div v-if="message" class="alert alert-info alert-dismissible fade show" role="alert">
    <strong>Message:</strong>
    {{message}}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "Alert",
  props: ["message"]
};
</script>