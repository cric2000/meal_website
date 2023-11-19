<template>
  <div class="mt-20 container mx-auto">
    <p class="text-[#EDB353] text-2xl text-center mx-auto mb-10" v-if="meals.length>0">Cook a dish with {{ name }}</p>
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
const name = ref('');
onMounted(()=>{
    isLoading.value=true;
    try{
store.dispatch('searchMealsByIngredients', route.params.ingredient)
name.value=route.params.ingredient
    }catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }

});
</script>

<style>
</style>