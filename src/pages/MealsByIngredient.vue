<template>
  <div class="mt-20 container mx-auto">
    <p class="text-[#EDB353] text-2xl text-center mx-auto mb-10" v-if="meals.length>0">Cook a dish with {{ name }}</p>
    <div v-if='loading' class="py-2 px-4 flex justify-center items-center  bg-[#212121] text-white w-full mt-10">
    <svg width="20" height="20" fill="currentColor" class="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
        <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
        </path>
    </svg>
    Fetching your order
</div>
<Meals :meals="meals" :loading="isLoading"/>
</div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import Meals from '../components/Meals.vue';
import store from '../store';
import {useRoute} from 'vue-router';
const route = useRoute();
const meals = computed(()=> store.state.mealsByIngredients)
const isLoading=ref(false);
const loading=ref(false);
const name = ref('');


onMounted(()=>{
    isLoading.value=true;
    loading.value=true;
    try{
store.dispatch('searchMealsByIngredients', route.params.ingredient)
name.value=route.params.ingredient
loading.value=false;
    }catch (error) {
      console.error(error);
      loading.value=true;
    } finally {
      isLoading.value = false;
      loading.value=false;
    }

});
</script>

<style>
</style>