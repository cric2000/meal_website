<template>
    <div class="p-8 container mx-auto mt-20">
        <h1 class="text-[#EDB353] text-2xl italic text-center mx-auto mb-10">"Select your preferred dish from our diverse menu."</h1>
       
  <input
    type="text"
    class="rounded-xl border-1 border-gray-300 w-full py-4 pr-12 shadow"
    placeholder="Enter ingredients like fish, paneer etc"
    v-model="keyword"
    @change="searchMeals"
  />

    <div v-if='loading' class="py-2 px-4 flex justify-center items-center  bg-[#212121] text-white w-full mt-10">
    <svg width="20" height="20" fill="currentColor" class="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
        <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
        </path>
    </svg>
    Grabbing menu for you
</div>

<div v-if="computedIngreidients.length==0 && !loading" class="mt-10">
  <Nodata/>
</div>
        <router-link v-else :to="{name:'byIngredient', params:{ingredient: ingredient.strIngredient}}" v-for="ingredient of computedIngreidients" :key="ingredient.idIngredient" class="block bg-white rounded-xl border-2 border-red-100 mb-3 mt-6 shadow hover:border-[#EDB353]">
    <h3 class="text-2xl font-bold mb-2 text-gray-800 bg-[#EDB353]  rounded-tl-xl rounded-tr-xl p-3">{{ ingredient.strIngredient }}</h3>
    <p class="p-3">{{ ingredient?.strDescription ? ingredient.strDescription : 'No description available' }}</p>
        </router-link>
    </div>


    </template>
    
    <script setup>
    import { computed, onMounted, ref } from 'vue';
    import axiosClient from '../axiosClient';
    import Nodata from '../components/Nodata.vue'
    const ingredients=ref([]);
    const keyword=ref('');
    const loading=ref(false)

    const computedIngreidients = computed(()=>{
        if(!computedIngreidients) return ingredients
        return ingredients.value.filter(i => i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()))
    })
    onMounted(()=>{
      loading.value=true
      try{
      axiosClient.get('list.php?i=list').then(({data})=>{
    ingredients.value=data.meals;
    loading.value=false
      })
    }
    catch{
      loading.value=false
    }
    })
    </script>
    
    <style>
    </style>