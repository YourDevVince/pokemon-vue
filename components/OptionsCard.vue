<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const starters = ref([
   {
      name: 'Charmander',
      image: 'src/assets/charmander.png',
      description: 'Charmander is a fire type Pokemon!',
      link: 'https://www.google.com/search?q=charmander',
   },
   {
      name: 'Bulbasaur',
      image: 'src/assets/bulbasaur.png',
      description: 'Bulbasaur is a Grass type Pokemon!',
      link: 'https://www.google.com/search?q=bulbasaur',
   },
   {
      name: 'Squirtle',
      image: 'src/assets/squirtle.png',
      description: 'Squirtle is a water type Pokemon!',
      link: 'https://www.google.com/search?q=squirtle',
   },
   ]);
</script>


<template>
   <header>
    <h1>Choose your starter</h1>
  </header>
   <div class="option-container"> 
    <div class="option-card" v-for="starter in starters" :key="starter.name">
      <img :src="starter.image" :alt="starter.name" />
      <h2>{{ starter.name }}</h2>
      <p class="marg-btm">{{ starter.description }}
         <a :href="starter.link">Google me</a>
      </p>
      <RouterLink to="/ThankYou">
         <button class="btn-red">I CHOOSE YOU</button>
      </RouterLink>
    </div>
   </div> 
</template>

<style scoped>
header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
}
.option-container {
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   gap: 16px;
   justify-content: center;
   margin-bottom: 40px;
}

.option-card {
   border: 3px solid #cc0000;
   border-radius: 8px;
   padding: 16px;
   width: 250px;
   text-align: center;
}

.option-card img {
   max-width: 100%;
}

.btn-red {
   color: #fff;
   background-color: #cc0001;
   font-weight: bold;
   border: 0px;
   border-radius: 4px;
   padding: 10px 20px;
}
.marg-btm {
   margin-bottom: 8px;
}

</style>