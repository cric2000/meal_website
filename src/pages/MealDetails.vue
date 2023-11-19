<template>
  <div class="mx-auto p-8 container mt-20 flex gap-10 flex-row w-full flex-wrap">
    <div>
      <img :src="meal.strMealThumb" :alt="meal.strMeal" />
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 text-lg py-2 mt-10 gap-4 justify-items-start md:justify-items-start" style="width: 100%; max-width: 700px;">
        <div>
          <div class="flex flex-row gap-4 items-center justify-start h-full w-full">
            <img src="../assets/Category.png" alt="Category" style="width: 28px;">
            <span v-if="meal.strCategory" class="bg-[#00C2FF] px-6 py-2 rounded-3xl text-white">{{ meal.strCategory
            }}</span>
            <span v-else class="text-white">No category specified</span>
          </div>
        </div>
        <div>
          <div class="flex flex-row gap-4 items-center justify-start h-full">
            <img src="../assets/home.png" alt="Area" style="width: 28px;">
            <span v-if="meal.strArea" class="bg-[#FF9F00] px-6 py-2 rounded-3xl text-[#212121]">{{ meal.strArea }}</span>
            <span v-else class="text-white">No area specified</span>
          </div>
        </div>
        <div>
          <div class="flex flex-row gap-4 items-center justify-start h-full">
            <img src="../assets/Tag.png" alt="Tags" style="width: 28px;">
            <span v-if="meal.strTags" class="bg-[#F65650] px-6 py-2 rounded-3xl text-white">{{ meal.strTags }}</span>
            <span v-else class="text-white">No tags specified</span>
          </div>
        </div>
      </div>

    </div>
    <div style="width: 700px;">
      <div class="flex flex-row flex-wrap gap-5">
        <h1 class="text-xl font-bold mb-5 text-white">{{ meal.strMeal }}</h1>
        <div>
          <svg class="h-6 w-6 text-red-500 cursor-pointer  hover:scale-110  mb-2" @click="addToFavorites(meal)"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <path :fill="isFavorited ? 'red' : 'none'"
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>


          <div v-if='showNotification' id="toast-success"
            class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-white dark:bg-gray-800 absolute top-2 left-1/2 transform -translate-x-1/2"
            role="alert">
            <div
              class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="sr-only">Check icon</span>
            </div>
            <div class="ms-3 text-sm font-normal">Added to Fav.</div>
            <button @click="closeNotification" type="button"
              class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-success" aria-label="Close">
              <span class="sr-only">Close</span>
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
            </button>
          </div>
        </div>

        <div id="toast-danger" v-if='removeNotification'
          class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-white dark:bg-gray-800 absolute top-2 left-1/2 transform -translate-x-1/2"
          role="alert">
          <div
            class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
              viewBox="0 0 20 20">
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
            </svg>
            <span class="sr-only">Error icon</span>
          </div>
          <div class="ms-3 text-sm font-normal">Removed from Fav.</div>
          <button type="button" @click="closeNotification"
            class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-danger" aria-label="Close">
            <span class="sr-only">Close</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
          </button>
        </div>

      </div>
      <div class="my-3 text-white">
        {{ meal.strInstructions }}
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 text-white bg-white text-center">
        <div v-if="hasIngredients" class="border border-[#60527E]">
          <h2 class="text-xl font-semibold mb-2 text-[#212121] bg-[#EDB353] py-2">Ingredients</h2>
          <ul>
            <template v-for="(value, key) in meal" :key="key">
              <li v-if="key.startsWith('strIngredient') && value.trim() !== ''"
                class="text-[#60527E] border-b border-[#60527E]">
                {{ value.trim() !== '' ? value : 'N/A' }}
              </li>
            </template>
          </ul>
        </div>
        <div v-if="hasIngredients" class="border border-[#60527E]">
          <h2 class="text-xl font-semibold mb-2 text-[#212121] bg-[#EDB353] py-2">Measures</h2>
          <ul>
            <template v-for="(value, key) in meal" :key="key">
              <li v-if="key.startsWith('strMeasure') && key !== 'strMeasure1' && hasIngredientAtSameIndex(key)"
                class="text-[#60527E] border-b border-[#60527E]">
                {{ value.trim() !== '' ? value : 'N/A' }}
              </li>
            </template>
          </ul>
        </div>
      </div>
      <div class="flex items-center gap-2 flex-wrap">
        <YouTubeButton :href="meal.strYoutube" class="mt-8">Go to Youtube</YouTubeButton>
        <div class="mt-8">
          <a :href="meal.strSource" target="_blank"
            class="px-5 py-3 rounded cursor-pointer text-white bg-[#4B4545] transition-colors hover:bg-[#3D3737]">Original Source</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YouTubeButton from '../components/YouTubeButton.vue';


const route = useRoute();
const meal = ref({})


const hasIngredients = ref(false);
const isFavorited = ref(false);
const showNotification = ref(false);
const removeNotification = ref(false);

onMounted(() => {
  console.log(route.params.id)
  axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {

      const mealData = data.meals[0] || {};
    meal.value = mealData;
console.log(mealData)
    // Check if the meal's ID is present in localStorage favorites
    const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
    const isFav = favorites[mealData.idMeal+'-'+mealData.strMeal] || false;
    isFavorited.value = isFav;

    })
})

function addToFavorites(meal) {
  const idMeal = meal.idMeal;
  const mealName = meal.strMeal;
  const key = `${idMeal}-${mealName}`;
  const favorites = JSON.parse(localStorage.getItem('favorites')) || {};

  // Toggle the favorite status
  if (favorites[key]) {
    // ID is already present, remove it
    delete favorites[key];
    showNotification.value = true;
    removeNotification.value = true;
      // Update the isFavorited value
  isFavorited.value = false;
  } else {
    // ID is not present, add it
    favorites[key] = true;
    showNotification.value = true;
    removeNotification.value = false;
      // Update the isFavorited value
  isFavorited.value = true;
  }

  // Update localStorage
  localStorage.setItem('favorites', JSON.stringify(favorites));



  setTimeout(() => {
    showNotification.value = false;
    removeNotification.value = false;
  }, 5000);
}
function closeNotification() {
  showNotification.value = false;
  removeNotification.value = false;
}

watch(meal, () => {
  hasIngredients.value = checkForNonEmptyValues('strIngredient');
});

function checkForNonEmptyValues(prefix) {
  for (const key in meal.value) {
    if (key.startsWith(prefix) && meal.value[key].trim() !== '' && key !== `${prefix}1`) {
      return true;
    }
  }
  return false;
}

function hasIngredientAtSameIndex(measureKey) {
  const ingredientKey = measureKey.replace('strMeasure', 'strIngredient');
  return meal.value[ingredientKey] && meal.value[ingredientKey].trim() !== '';
}
</script>

<style>
</style>