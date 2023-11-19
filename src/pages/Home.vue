<template>
  <div class="flex flex-row justify-center items-center flex-wrap gap-8 px-5" style="height: 100vh; width: 100vw;">

    <img src="../assets/main.png" alt="food" class="mt-20">

    <div class="flex flex-col justify-start items-center">
  <div class="flex flex-col w-full">
    <p class="text-4xl sm:text-6xl font-extrabold text-white tracking-wider">What's your<br><span
        class="text-[#EDB353]"><em class="text-6xl sm:text-8xl">f</em>av</span>ourite <span
        class="text-[#EDB353]">meal?</span>
    </p>
    <p class="text-lg sm:text-2xl text-white mt-10">Access a multitude of recipes<br> at your fingertips.</p>
  </div>
  <div class="mt-8 flex flex-row flex-wrap w-full gap-3 justify-start items-center">
    <router-link :to="{ name: 'ingredients' }"
      class="bg-[#EDB353] py-3  rounded-xl mb-10 transition-colors w-60 px-10 text-[#212121] hover:bg-[#F19E12] hover:drop-shadow-md text-lg mt-2 text-center"
      title="Click here to generate random meals">Your menu</router-link>
      <router-link :to="{ name: 'explore' }"
      class="bg-transparent border py-3 mb-10  rounded-xl mt-2 transition-colors w-60 px-10 text-white hover:bg-white text-center hover:text-[#212121] hover:drop-shadow-md text-lg"
      title="Click here to generate random meals">Explore meals</router-link>
  </div>
</div>

  </div>
</template>
  
<script setup>

</script>
  
<style></style>
  