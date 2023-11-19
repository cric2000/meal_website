<template>
    <div class="mt-20 container mx-auto">
<p class="text-[#EDB353] text-2xl italic text-center py-2 mx-auto">“A selection of our finest dishes carefully chosen for you.”</p>
<Meals :meals="ingredients" :loading="isLoading"/>
<p class="text-white font-bold italic underline underline-offset-4 float-right text-lg mr-7 cursor-pointer" @click="showNew">Replace with new meals</p>
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
        console.log(ingredients.value[0])
      }
    }
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
}

async function showNew(){
 await initialData()
}

onMounted(async () => {
  await initialData()
});
</script>

<style>
</style>