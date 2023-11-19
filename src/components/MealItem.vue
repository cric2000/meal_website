<template>
    <div v-if="!loading"
        class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg min-w-[250px]">
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full h-48 object-cover grow-now" title="Click to see more" />
        </router-link>
        <div class="p-8">
            <div class="flex justify-between items-center">
            <h3 class="font-bold text-lg text-gray-800">{{ meal.strMeal }}</h3>
           
            <svg class="h-6 w-6 text-red-500 cursor-pointer  hover:scale-110  mb-2" @click="addToFavorites(meal)"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <path :fill="isFavorited ? 'red' : 'none'"
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>


          <div v-if='showNotification' id="toast-success"
            class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-white dark:bg-gray-800 fixed top-2 left-1/2 transform -translate-x-1/2"
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

          <div id="toast-danger" v-if='removeNotification'
          class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-white dark:bg-gray-800 fixed top-2 left-1/2 transform -translate-x-1/2"
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
            <div class="flex items-center gap-2 flex-wrap">
                <YouTubeButton :href="meal.strYoutube" class="mt-5" >Youtube</YouTubeButton >
              
                    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }" class="mt-5">
    <p class="px-5 py-2.5 rounded cursor-pointer text-white bg-[#4B4545] transition-colors hover:bg-[#3D3737]">See more</p>
    </router-link>
            </div>
        </div>
    </div>
    <div v-else class="animate-pulse bg-gray-300 rounded-xl overflow-hidden shadow-md min-w-[250px] h-80 p-4">
        <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
            <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" viewBox="0 0 16 20">
                <path
                    d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
        </div>
        <div class="h-2 bg-gray-200 rounded-full bg-gray-700 w-48 mb-4 mt-10"></div>
        <button class="px-3 py-2 bg-gray-200 rounded-2 bg-gray-700 w-48"></button>
    </div>
</template>
  
<script setup>
import YouTubeButton from './YouTubeButton.vue';
import { ref , onMounted} from 'vue';

const showNotification = ref(false);
const removeNotification = ref(false);
const isFavorited = ref(false);

const { meal, loading } = defineProps({
    meal: {
        required: true,
        type: Object,
    },
    loading: {
        required: false,
        type: Boolean,
        default: true,
    },
});

onMounted(() => {
  initializeIsFavorited();
});

function initializeIsFavorited() {
  const idMeal = meal.idMeal;
  const mealName = meal.strMeal;
  const key = `${idMeal}-${mealName}`;
  const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
  isFavorited.value = favorites[idMeal] || false;
}

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

</script>

<style>

</style>
  