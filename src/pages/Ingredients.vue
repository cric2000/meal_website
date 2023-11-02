<template>
    <div class="p-8 container mx-auto ">
        <h1 class="text-4xl font-bold mb-6 text-gray-600">Ingredients</h1>
        <input type="text" class="rounded-xl border-1 border-gray-300 w-full py-4 shadow" placeholder="Check for ingredients like fish or rice" v-model="keyword"
            @change="searchMeals" />
        <router-link :to="{name:'byIngredient', params:{ingredient: ingredient.strIngredient}}" v-for="ingredient of computedIngreidients" :key="ingredient.idIngredient" class="block bg-white rounded border-2 border-red-100 p-3 mb-3 mt-6 shadow hover:border-red-300">
    <h3 class="text-2xl font-bold mb-2 text-gray-500">{{ ingredient.strIngredient }}</h3>
    <p>{{ ingredient.strDescription }}</p>
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