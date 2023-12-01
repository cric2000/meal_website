<template>
    <div class="p-5 pb-0 container mx-auto mt-20">
      <p class="text-[#EDB353] text-2xl text-center mx-auto mb-10 italic">"Search any meal you like"</p>
        <input type="text" class="rounded-xl border-1 border-gray-300 w-full py-4 pr-12 shadow" placeholder="Search by name like paneer or chicken" v-model="keyword"
            @change="searchMeals" />
            <!-- <p class="mt-10 text-lg text-white">Try something like <span >Chicken biryani</span> or <span  >Paneer lababdar</span></p> -->
    
 
    <!-- <div class="flex gap-4 justify-center text-xl flex-wrap p-2 items-center container mx-auto mt-10 text-white" >
    <p v-for="letter of letters" :key="letter" class="mt-10 hover:font-bold hover:underline hover:underline-offset-4 cursor-pointer" @click="() => handleLetterClick(letter)"> 
        {{ letter }}
    </p>
</div> -->

<div v-if='loading' class="py-2 px-4 flex justify-center items-center  bg-[#212121] text-white w-full mt-10">
    <svg width="20" height="20" fill="currentColor" class="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
        <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
        </path>
    </svg>
    <p class="text-white">Fetching your order</p>
</div>

<Meals v-else :meals="meals" :loading="isLoading"/>
</div>
</template>

<script setup>
import { ref, computed, onMounted , watch} from 'vue';
import store from '../store';
import {useRoute} from "vue-router";
import Meals from '../components/Meals.vue';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchMeals)
const isLoading = ref(false);
const letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const mealLetter = computed(()=> store.state.mealsByLetters);
const loading=ref(true);
const check = ref(false);

function handleLetterClick(letter) {
  check.value=true;
      store.dispatch('searchMealsByLetters', letter);
  }

function searchMeals() {
  check.value=false;
  isLoading.value = true;
  loading.value=true;
  console.log(loading.value)
  if (keyword.value) {
    try {
      store.dispatch('searchMeals', keyword.value,isLoading.value);
      loading.value=false;
    } catch (error) {
      console.error(error);
      loading.value=false;
    } finally {
      isLoading.value = false;
      loading.value=false;
    }
  } else {
    try {
      loading.value=true;
      store.commit('setSearchMeals', [], false);
    } catch (error) {
      console.error(error);
      loading.value=false;
    } finally {
      isLoading.value = false;
      loading.value=false;
    }
  }
}


onMounted( ()=>{
    keyword.value=route.params.name;
    if(keyword.value){

        searchMeals()
    }

    try{
      loading.value=true;
store.dispatch('searchMealsByLetters',route.params.letter)
    }
    catch (error) {
      console.error(error);
      loading.value=false;
    } finally {
      isLoading.value = false;
      loading.value=false;
    }

})
</script>

<style></style>