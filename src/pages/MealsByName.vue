<template>
    <div class="p-8 pb-0 container mx-auto">
        <input type="text" class="rounded-xl border-1 border-gray-300 w-full py-4 shadow" placeholder="Enter a meal name like chicken or broccoli" v-model="keyword"
            @change="searchMeals" />
    </div>

    <Meals :meals="meals" :loading="isLoading"/>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import store from '../store';
import {useRoute} from "vue-router";
import Meals from '../components/Meals.vue';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchMeals)
const isLoading = ref(false);

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
})
</script>

<style></style>