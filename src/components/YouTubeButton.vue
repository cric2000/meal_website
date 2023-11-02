<template>
<div>
    <a :href="href" target="_blank"
                        class="px-3 py-2 rounded border-2 border-red-500 text-white bg-red-500 hover:bg-red-600 hover:text-white transition-colors"><slot/></a>
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