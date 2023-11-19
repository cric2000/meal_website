<template>
    <div class="p-8 pb-0 container mx-auto mt-20">
      <p class="text-[#EDB353] text-2xl text-center mx-auto mb-10 italic">"Search any meal you like"</p>
        <input type="text" class="rounded-xl border-1 border-gray-300 w-full py-4 shadow" placeholder="Search by name" v-model="keyword"
            @change="searchMeals" />
            <p class="mt-10 text-lg text-white">Try something like <span class="underline underline-offset-8 text-[#67DBFF] cursor-pointer">Chicken biryani</span> or <span class="underline underline-offset-8 text-[#67DBFF] cursor-pointer" >Paneer lababdar</span></p>
    </div>
    <div class="flex gap-4 justify-center text-xl flex-wrap p-2 items-center container mx-auto mt-10 text-white" >
    <p v-for="letter of letters" :key="letter" class="mt-10 hover:text-bold hover:text-underline hover:text-underline-offset-4 cursor-pointer" @click="() => handleLetterClick(letter)"> 
        {{ letter }}
    </p>
</div>
<Meals :meals="meals" :loading="isLoading"/>
<Meals :meals="mealLetter" :loading="isLoading"/>
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


function handleLetterClick(letter) {
  console.log(letter)
      store.dispatch('searchMealsByLetters', letter);
  }

function searchMeals() {
  isLoading.value = true;
  console.log(isLoading.value)
  if (keyword.value) {
    try {
      store.dispatch('searchMeals', keyword.value,isLoading.value);
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  } else {
    try {
      store.commit('setSearchMeals', [], false);
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  }
}


onMounted( ()=>{
    keyword.value=route.params.name;
    if(keyword.value){
        searchMeals()
    }

    try{
store.dispatch('searchMealsByLetters',route.params.letter)
    }
    catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }

})
</script>

<style></style>