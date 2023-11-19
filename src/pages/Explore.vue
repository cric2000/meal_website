<template>
    <div class="mt-20 container mx-auto">
<p class="text-[#EDB353] text-2xl italic text-center py-2 mx-auto">“A selection of our finest dishes carefully chosen for you.”</p>
<div v-if='loading' class="py-2 px-4 flex justify-center items-center  bg-[#212121] text-white w-full mt-10">
    <svg width="20" height="20" fill="currentColor" class="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
        <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
        </path>
    </svg>
    Fetching your order
</div>
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
const loading = ref(false);

async function initialData() {
  isLoading.value = true;

  try {
    loading.value=true;
    ingredients.value = [];
    for (let i = 0; i < 6; i++) {
      const { data } = await axiosClient.get('random.php');
      if (data.meals && data.meals.length > 0) {
        ingredients.value.push(data.meals[0]);
        loading.value=false;
        console.log(ingredients.value[0])
      }
    }
  } catch (error) {
    console.error(error);
    loading.value=false;
  } finally {
    isLoading.value = false;
    loading.value=false;
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