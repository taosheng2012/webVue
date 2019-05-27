<template>
<i :class="theClass"></i>

</template>

<script>
export default {
  props: ["type"],
  computed: {
    theClass: function() {
      return `lnr lnr-${this.type}`
    }
  },
};

</script>

<style>

</style>
