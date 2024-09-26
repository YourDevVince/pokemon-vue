<script setup>
    import { ref } from 'vue';
    const siteName = ref('PokeMart');
</script>

<template>
   <nav class="nav-container">
    <span class="bold-wht">{{ siteName }}</span>
   </nav> 
</template>

<style scoped>
.nav-container {
  text-align: center;
  background-color: #cc0000;
  padding: 2rem 4rem;
  margin-bottom: 40px;
}

.bold-wht {
  color: rgb(243, 243, 243);
  font-weight: bold;
}
span {
  font-size: 40px;
}

</style>