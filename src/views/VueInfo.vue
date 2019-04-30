<template>
  <div style="text-align: center;">
    <div style="height: 200px; margin: 20px 0px;">
      <img src="../assets/logo.png" >
    </div>
    
    <HelloWorld msg="Awesome Vue" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>