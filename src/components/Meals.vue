<template>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 md:p-8 mt-10 ">
  <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" :loading="loading" class="mb-4 md:mb-0" />
</div>
<div v-if="!meals.length && !loading" class="flex justify-center items-center text-white text-2xl mt-4">
</div>

</template>

<script setup>
import MealItem from './MealItem.vue';
import Nodata from './Nodata.vue';

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