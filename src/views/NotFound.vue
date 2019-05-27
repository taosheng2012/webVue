<template>
  <div>
    <p class="notFound">
      <Icon type="neutral"/>Error 404 - Not Found<br>
      <br>
      <Icon type="keyboard"/>The coder is still working ...
    </p>
    
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue';
  
export default {
  components: {
    Icon
  }
}

</script>

<style scoped>
.notFound {
  color: green;
  font-size: 20px;
  padding-top: 100px;
  text-align: center;
}

</style>