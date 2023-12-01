<template>
    <div class="mt-20">
        <p class="text-[#EDB353] text-2xl italic text-center mx-auto mb-10">"Your Fav meals"</p>

        <!-- Display the favorite meal IDs -->
        <div v-if="favoriteIds.length > 0" class="flex flex-wrap justify-center gap-4 items-center">

            <div v-for="id in favoriteIds" :key="id.id"
                class="text-white  underline-offset-8 cursor-pointer underline py-3 rounded-xl text-lg px-10">
                <router-link :to="{ name: 'mealDetails', params: { id: id.id } }">
                    {{ id.name }}
                </router-link>
            </div>
        </div>
      
        <p v-else class="text-white text-center text-2xl">You haven't added any favorite meals yet.</p>
        <router-link :to="{ name: 'byName' }">
            <img src="../assets/add.png" alt="add more" class="mt-10 mx-auto cursor-pointer" title="Add new meals">
        </router-link>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';

const favoriteIds = ref([]);

onMounted(() => {
    // Retrieve favorites from local storage
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || {};

    // Extract the IDs from each stored favorite (assuming the format is "ID-Name")
    favoriteIds.value = Object.keys(storedFavorites).map(key => {
        const hyphenIndex = key.indexOf('-');
        if (hyphenIndex !== -1) {
            const id = key.substring(0, hyphenIndex).trim();
            const name = key.substring(hyphenIndex + 1).trim();
            return { id, name };
        } else {
            // Handle the case where there is no hyphen in the key
            return { id: key, name: '' }; // You can set a default value for name or handle it as needed
        }
    });

});
</script>
  
<style>
/* Your styles */
</style>
  