<template>
<div class="flex gap-4 justify-center text-xl flex-wrap p-2 items-center container mx-auto" >
    <router-link :to="{name:'byLetter', params:{letter}}" v-for="letter of letters" :key="letter" class="mt-10 hover:text-red-500 hover:text-2xl"> 
        {{ letter }}
    </router-link>
</div>
<Meals :meals="meals" :loading="isLoading"/>
</template>

<script setup>
import { onMounted, computed, watch, ref } from 'vue';
import store from '../store';
import {useRoute} from 'vue-router';
import Meals from '../components/Meals.vue';

const letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const route = useRoute();
const meals = computed(()=> store.state.mealsByLetters);
const isLoading = ref(false);

watch(route,()=>{
    store.dispatch('searchMealsByLetters',route.params.letter)
})

onMounted(()=>{
    isLoading.value=true;
    try{
store.dispatch('searchMealsByLetters',route.params.letter)
    }
    catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }

});
</script>

<style>
</style>