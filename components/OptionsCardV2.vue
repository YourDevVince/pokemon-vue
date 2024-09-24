<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';

const starters = ref([]);

const fetchPokemonData = async () => {
   const pokemonIds = [4, 1, 7]; // charmander, bulbasaur, squirtle
   // const promises = pokemonIds.map(id => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`));
   const promises = pokemonIds.map(id => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => response.json()
));
try {
      const results = await Promise.all(promises);
      starters.value = results.map(pokemon => {
         return {
            name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
            image: pokemon.sprites.other['official-artwork'].front_default, 
            description: `${pokemon.name.charAt(0).toUpperCase()+ pokemon.name.slice(1)} is a ${pokemon.types.map(type => type.type.name).join(', ')} type Pokemon!`,
        link: `https://www.google.com/search?q=${pokemon.name}`,
         };
      });
   } catch (error) {
      console.error('Error fetching Pokemon data:', error);
   }
   // try {
   //    const results = await Promise.all(promises);
   //    starters.value = results.map(result => {
   //       const pokemon = result.data;
   //       console.log(pokemon);
   //       return {
   //          name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
   //          image: pokemon.sprites.other['official-artwork'].front_default, 
   //          description: `${pokemon.name.charAt(0).toUpperCase()+ pokemon.name.slice(1)} is a ${pokemon.types.map(type => type.type.name).join(', ')} type Pokemon!`,
   //      link: `https://www.google.com/search?q=${pokemon.name}`,
   //       };
   //    });
   // } catch (error) {
   //    console.error('Error fetching Pokemon data:', error);
   // }
};

onMounted(fetchPokemonData);
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
   background-color: #cc0000;
   font-weight: bold;
   border: 0px;
   border-radius: 4px;
   padding: 10px 20px;
}
.marg-btm {
   margin-bottom: 8px;
}

</style>