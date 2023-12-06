<script setup>
    import { ref } from 'vue'
    const props = defineProps(['navItem'])
 
</script>

<template>
    <RouterLink class="text-2xl h-[50px] flex justify-between" to="" v-for="navItem in props.navItem" :key="navItem">
        <span>
            {{ navItem.name }}
        </span>
        <i class="fa-solid fa-chevron-right text-lg"></i>
    </RouterLink>
</template>