<template>
<Meals :meals="meals" :loading="isLoading"/>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import Meals from '../components/Meals.vue';
import store from '../store';
import {useRoute} from 'vue-router';
const route = useRoute();
const meals = computed(()=> store.state.mealsByIngredients)
const isLoading=ref(false);
onMounted(()=>{
    isLoading.value=true;
    try{
store.dispatch('searchMealsByIngredients', route.params.ingredient)
    }catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }

});
</script>

<style>
</style>