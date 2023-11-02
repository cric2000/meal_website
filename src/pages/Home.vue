<template>
    <div class="flex flex-col p-8">
    <p class="text-center text-5xl font-bold text-gray-800">What's your <span class="text-red-500">Favourite </span>meal?</p>
    <button @click="initialData" class="bg-gray-700 py-3 mt-10 mx-auto rounded-lg transition-colors w-60 text-white hover:bg-gray-800 hover:drop-shadow-md  text-lg" title="Click here to generate random meals">Random meals</button>
    <Meals :meals="ingredients"  :loading="isLoading"/>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import axiosClient from '../axiosClient.js';
  import Meals from '../components/Meals.vue';
  
  const ingredients = ref([]);
  const isLoading = ref(true);

  async function initialData() {
  isLoading.value = true; 

  try {
    ingredients.value = []; 
    for (let i = 0; i < 6; i++) {
      const { data } = await axiosClient.get('random.php');
      if (data.meals && data.meals.length > 0) {
        ingredients.value.push(data.meals[0]);
      }
    }
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false; 
  }
}
  
  onMounted(async () => {
   await initialData()
  });
  </script>
  
  <style>
  </style>
  