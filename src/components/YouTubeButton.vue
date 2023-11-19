<template>
<div>
    <a :href="href" target="_blank"
                        class="px-5 py-3 rounded  text-white bg-red-600 hover:bg-[#C4302B] hover:text-white transition-colors"><slot/></a>
</div>
</template>

<script setup>
const props = defineProps(
    {
        href: String
    }
)
</script>

<style>
</style>