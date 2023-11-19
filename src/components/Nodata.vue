<template>
<div class="flex flex-col items-center justify-center gap-10">
    <p class="font-bold text-[#EDB353]">No meal available :(</p>
    <img src="../assets/404.png" alt="No meal"  class="mx-auto">
    <router-link :to="{ name: 'ingredients' }">
    <button
      class="bg-[#EDB353] py-3  rounded-xl mb-10 transition-colors w-60 px-10 text-[#212121] hover:bg-[#F19E12] hover:drop-shadow-md text-lg mt-2"
      title="Click here to generate random meals">Try different meal</button></router-link>
</div>
</template>

<script>
</script>
<style>
</style>