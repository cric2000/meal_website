<template>
<div class="max-w-[800px] mx-auto p-8 container">
    <h1 class="text-4xl font-bold mb-5 text-gray-700">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" />

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-lg py-2 mt-10 gap-4">
      <div>
        <strong class="capitalize text-red-700">Category <br></strong>
        <span v-if="meal.strCategory" class="bg-blue-500 px-4 py-2 rounded-3xl text-white">{{ meal.strCategory }}</span>
        <span v-else class="text-gray-500">No category specified</span>
      </div>
      <div>
        <strong class="capitalize text-red-700">Area <br></strong>
        <span v-if="meal.strArea" class="bg-orange-500 px-4 py-2 rounded-3xl text-white">{{ meal.strArea }}</span>
        <span v-else class="text-gray-500">No area specified</span>
      </div>
      <div>
        <strong class="capitalize text-red-700">Tags <br></strong>
        <span v-if="meal.strTags" class="bg-yellow-500 px-4 py-2 rounded-3xl text-white">{{ meal.strTags }}</span>
        <span v-else class="text-gray-500">No tags specified</span>
      </div>
    </div>

        <div class="my-3">
            {{ meal.strInstructions }}
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div>
                <h2 class="text-2xl font-semibold mb-2 text-red-700">Ingredients</h2>
                <ul>
          <template v-for="(el, ind) of new Array(20)" :key="ind">
            <li>
              <template v-if="meal[`strIngredient${ind + 1}`] && meal[`strIngredient${ind + 1}`].trim() !== ''">
                {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
              </template>
              <template v-else>
                {{ ind + 1 }}. -
              </template>
            </li>
          </template>
        </ul>
            </div>
            <div>
                <h2 class="text-2xl font-semibold mb-2 text-red-700">Measures</h2>
                <ul>
          <template v-for="(el, ind) of new Array(20)" :key="ind">
            <li>
              <template v-if="meal[`strMeasure${ind + 1}`] && meal[`strMeasure${ind + 1}`].trim() !== ''">
                {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
              </template>
              <template v-else>
                {{ ind + 1 }}. -
              </template>
            </li>
          </template>
        </ul>
            </div>
            <div class="mt-4 flex items-center flex-wrap">
                <YouTubeButton :href="meal.strYoutube" class="mt-4 mr-3">
                    Go to youtube
                </YouTubeButton>
                <a :href="meal.strSource" target="_blank"
                    class="px-3 py-2 mt-4 mr-3 rounded  text-white bg-blue-500 hover:bg-blue-600 hover:text-white transition-colors">Original
                    source</a>
            </div>
        </div>
        </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YouTubeButton from '../components/YouTubeButton.vue';


const route = useRoute();
const meal = ref({})


onMounted(() => {
    console.log(route.params.id)

    axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({ data }) => {
           
            meal.value = data.meals[0] || {}
           
        })
})
</script>

<style></style>