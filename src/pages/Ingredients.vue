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

  <div v-if="computedIngreidients.length === 0" class="text-center mt-10 text-xl text-white">
      No meals available for the entered keyword.
    </div>


        <router-link :to="{name:'byIngredient', params:{ingredient: ingredient.strIngredient}}" v-for="ingredient of computedIngreidients" :key="ingredient.idIngredient" class="block bg-white rounded-xl border-2 border-red-100 mb-3 mt-6 shadow hover:border-[#EDB353]">
    <h3 class="text-2xl font-bold mb-2 text-gray-800 bg-[#EDB353]  rounded-tl-xl rounded-tr-xl p-3">{{ ingredient.strIngredient }}</h3>
    <p class="p-3">{{ ingredient?.strDescription ? ingredient.strDescription : 'No description available' }}</p>
        </router-link>
    </div>
    </template>
    
    <script setup>
    import { computed, onMounted, ref } from 'vue';
    import axiosClient from '../axiosClient';
    const ingredients=ref([]);
    const keyword=ref('');

    const computedIngreidients = computed(()=>{
        if(!computedIngreidients) return ingredients
        return ingredients.value.filter(i => i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()))
    })
    onMounted(()=>{
      axiosClient.get('list.php?i=list').then(({data})=>{
    ingredients.value=data.meals;
      })
    })
    </script>
    
    <style>
    </style>