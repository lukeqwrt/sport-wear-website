<script setup>
const emit = defineEmits(['searchClick'])
</script>

<template>
    <div class="flex gap-5 text-2xl">
        <label class="hidden md:flex relative ">
            <input type="text" class="outline-none border border-black w-full h-[30px] max-w-[300px]  px-2 text-sm ml-4" 
            placeholder="Search"

        >
            <i class="fa-solid fa-magnifying-glass text-sm absolute right-2 top-[50%] translate-y-[-50%]"></i>            
        </label>
        
        <i @click="emit('searchClick')" class="fa-solid fa-magnifying-glass cursor-pointer md:hidden"></i>
        <i class="fa-solid fa-bag-shopping text-md"></i>
        <i class="fa-regular fa-user hidden sm:block text-xl"></i>
    </div>
</template>