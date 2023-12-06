<script setup>
    const emit = defineEmits(['closeModal'])
    const props = defineProps(['showSearch'])
</script>

<template>
    <Transition name="fade">
        <div v-if="props.showSearch" class="search_container fixed top-0 left-0 bg-white h-full w-[95%]">
            <div class="search py-3">
                <div class="search_input flex items-center gap-3">
                    <label class="search-label bg-[#ebebeb] flex-1 flex gap-3 items-center p-5 py-3 relative">
                        <i class="fa-solid fa-magnifying-glass md:hidden"></i>
                        <input type="text" class="input-search bg-[#ebebeb] outline-none text-md h-full w-full "
                    
                        >
                        <span class="placeholder absolute left-[50px] top-[50%] translate-y-[-40%]">
                            Search <i>"Basketball Shirt"</i>
                        </span>
                    </label>
                    <i @click="emit('closeModal')" class="fa-solid fa-xmark text-3xl cursor-pointer pe-4 ps-1"></i>
                </div>
                <div class="recent_searches mt-4 p-2">
                    <h3 class="text-md text-[#999] mb-5">YOUR RECENT SEARCHES</h3>
                    <ul class="grid gap-3">
                        <li>Shirt Blue</li>
                        <li>Shirt</li>
                        <li>Hoodie</li>
                    </ul>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.search-label{
    cursor: text;
}
.input-search:focus ~ .placeholder{
    display: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>