<template>
  <header class="drop-shadow-xl h-16 flex justify-between items-stretch bg-[#212121] text-white fixed top-0 left-0 w-full text-lg z-9999 px-5">
    <router-link :to="{ name: 'home' }" class="flex items-center cursor-pointer justify-center">
      <img src="../assets/logo.png" alt="food">
      <p class="text-2xl font-bold text-[#EDB353]">Meal</p>
    </router-link>
    <div class="hidden sm:flex items-center gap-10"> <!-- Hide items on small screens -->
      <router-link :to="{ name: 'explore' }" class="px-2 h-full inline-flex items-center transition-colors hover:font-bold hover:underline hover:underline-offset-4 cursor-pointer">
       Explore
      </router-link>
      <router-link :to="{ name: 'byName' }" class="px-2 h-full inline-flex items-center transition-colors hover:underline hover:underline-offset-4 hover:font-bold cursor-pointer">
        Search
      </router-link>
      <router-link :to="{ name: 'ingredients' }" class="px-2 h-full inline-flex items-center transition-colors hover:underline hover:underline-offset-4 hover:font-bold cursor-pointer">
        Menu
      </router-link>
      <router-link :to="{ name: 'fav' }" class="px-2 h-full inline-flex items-center transition-colors hover:underline hover:underline-offset-4 hover:font-bold cursor-pointer">
        Fav
      </router-link>
    </div>
    <button class="sm:hidden px-2 h-full inline-flex items-center" @click="toggleMobileMenu">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
    <div v-if="isMobileMenuOpen" class="sm:hidden absolute top-16 left-0 right-0 bg-[#212121] shadow-lg text-lg">
      <router-link @click="closeMobileMenu"  :to="{ name: 'explore' }" class="block px-4 py-2 hover:font-bold hover:underline hover:underline-offset-4 cursor-pointer">
      Explore
      </router-link>
      <router-link @click="closeMobileMenu"  :to="{ name: 'byName' }" class="block px-4 py-2  hover:font-bold hover:underline hover:underline-offset-4 cursor-pointer">
        Search
      </router-link>
      <router-link @click="closeMobileMenu"  :to="{ name: 'ingredients' }" class="block px-4 py-2 hover:font-bold hover:underline hover:underline-offset-4 cursor-pointer">
      Menu
      </router-link>
      <router-link @click="closeMobileMenu"  :to="{ name: 'fav' }" class="block px-4 py-2 hover:font-bold hover:underline hover:underline-offset-4 cursor-pointer">
      Fav
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
