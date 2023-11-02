<template>
  <header class="drop-shadow-xl h-16 flex justify-between items-stretch bg-red-500 text-white fixed top-0 left-0 w-full text-lg z-9999">
    <router-link :to="{ name: 'home' }" class="inline-flex items-center px-5 h-full cursor-pointer hover:font-bold">
      Home
    </router-link>
    <div class="hidden sm:flex items-center gap-2"> <!-- Hide items on small screens -->
      <router-link :to="{ name: 'byName' }" class="px-2 h-full inline-flex items-center transition-colors hover:bg-gray-200 hover:text-black cursor-pointer">
        Meals by name
      </router-link>
      <router-link :to="{ name: 'byLetter' }" class="px-2 h-full inline-flex items-center transition-colors hover:bg-gray-200 hover:text-black cursor-pointer">
        Meals by letter
      </router-link>
      <router-link :to="{ name: 'ingredients' }" class="px-2 h-full inline-flex items-center transition-colors hover:bg-gray-200 hover:text-black cursor-pointer">
        Ingredients
      </router-link>
    </div>
    <button class="sm:hidden px-2 h-full inline-flex items-center" @click="toggleMobileMenu">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
    <div v-if="isMobileMenuOpen" class="sm:hidden absolute top-16 left-0 right-0 bg-white shadow-lg text-gray-800 text-lg">
      <router-link @click="closeMobileMenu"  :to="{ name: 'byName' }" class="block px-4 py-2 border-b hover:bg-gray-200 hover:text-black cursor-pointer">
        Meals by name
      </router-link>
      <router-link @click="closeMobileMenu"  :to="{ name: 'byLetter' }" class="block px-4 py-2 border-b hover:bg-gray-200 hover:text-black cursor-pointer">
        Meals by letter
      </router-link>
      <router-link @click="closeMobileMenu"  :to="{ name: 'ingredients' }" class="block px-4 py-2 hover:bg-gray-200 hover:text-black cursor-pointer">
        Ingredients
      </router-link>
    </div>
  </header>
</template>

<script setup>
  import { ref } from 'vue';

  const isMobileMenuOpen = ref(false);

  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  };

  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false;
  };
</script>

<style>
</style>
