<template>
    <div class="container mx-auto">
<div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8 mt-10">
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" :loading="loading"/>
    </div>
    <div v-if="!meals.length && !loading" class="flex justify-center items-center text-gray-500 text-2xl">
No meals available
    </div>
</div>
</template>

<script setup>
import MealItem from './MealItem.vue';

const {meals}= defineProps({
    meals:{
type:Object,
required:true
    },
  loading: {
    type: Boolean,
    required: false,
    default:true
  },
})
</script>