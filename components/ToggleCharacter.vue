<script setup>
import { ref } from 'vue';

const bodyType = ref('Boy Trainer');
const bodyTypeImg = ref('src/assets/ash-ketchum.png');

const toggleBodyType = () => {
  if (bodyType.value === 'Boy Trainer') {
    bodyType.value = 'Girl Trainer';
    bodyTypeImg.value = 'src/assets/misty.png';
  } else if (bodyType.value === 'Girl Trainer') {
    bodyType.value = 'Boy Trainer';
    bodyTypeImg.value = 'src/assets/ash-ketchum.png';
  } else {
    bodyType.value = 'Boy Trainer';
    bodyT.value = 'src/assets/ash-ketchum.png';
  }
};
</script>

<template>
<div class="bodyTypeContainer">
  <h1 v-if="bodyType === 'Boy Trainer'">Welcome Sir!</h1 >
  <h1  v-else>Welcome Ma'am!</h1 >

  <img :src="bodyTypeImg" alt="">

  <button @click="toggleBodyType" class="btn-red">Change body type</button>
</div>

</template>

<style scoped>
.bodyTypeContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

h1 {
    color: var(--color-text);
    margin-bottom: 16px;
}

.btn-red {
  color: #fff;
  background-color: #cc0000;
  font-weight: bold;
  border: 0px;
  border-radius: 4px;
  padding: 10px 20px;
}

img {
  max-height: 400px;
  margin-bottom: 24px;
}
</style>