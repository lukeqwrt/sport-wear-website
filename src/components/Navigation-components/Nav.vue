<script setup>
    import { ref } from 'vue'
    import SideBar from '../Navigation-components/SideBar.vue';
    import NavSettings from '../Navigation-components/NavSettings.vue'
    import SearchMobileModal from './SearchMobileModal.vue';
    const sideBarActive = ref(false)
    const mobileSearchModal = ref(false)
    
    const navItemList = ref([
        { name: 'Men', highlight: true },
        { name: 'Women',highlight: true },
        { name: 'Kids', highlight: true },
        { name: 'Sports' },
        { name: 'Brands' },
        { name: 'Category' },
    ])

    // methods
    const toggleBar = () => {
        sideBarActive.value = !sideBarActive.value
    }
    const toggleMobileSearch = () => {
        mobileSearchModal.value = !mobileSearchModal.value
    }
</script>

<template>
    <div class="nav-container h-[54px] w-full flex justify-center items-center md:h-[70px] md:border-b-[1px] sm:border-black">
        <div class="nav_wrapper flex items-center justify-between w-full px-5 md:px-8">
            <div @click="toggleBar" class="bar h-[18px] w-[30px] flex flex-col justify-between cursor-pointer md:hidden">
                <span class="block h-[2px] w-full bg-black"></span>
                <span class="block h-[2px] w-full bg-black"></span>
                <span class="block h-[2px] w-[70%] bg-black"></span>
            </div>

            <div class="logo h-auto w-[45px] md:hidden">
                <img src="../../assets/coding-exam-assets (1)/Exam/logo.png" alt="">
            </div>
            <div class="logo h-auto w-[135px] hidden md:block md:me-4">
                <img src="../../assets/coding-exam-assets (1)/Exam/logo-full.png" alt="">
            </div>

            <nav class="hidden md:flex gap-5 justify-self-center">
              <RouterLink to="/" v-for="navItem in navItemList" :key="navItem"
              class="duration-200 hover:text-black"
              :class="navItem.highlight ? 'text-black' : 'text-[#999]' "
              >
                {{ navItem.name }}
              </RouterLink>
            </nav>

            <NavSettings @searchClick="toggleMobileSearch" />

            
            <nav class="sidebar fixed top-0 left-[-100%] h-full w-full bg-white flex flex-col px-5 py-2 duration-500 sm:hidden"
            :class="{ 'left-[0]' : sideBarActive }">
                <div class="sidebar_header flex justify-between items-center">
                    <img class="h-auto w-[150px]" src="../../assets/coding-exam-assets (1)/Exam/logo-full.png" alt="">
                    <i @click="toggleBar" class="fa-solid fa-xmark text-3xl cursor-pointer"></i>
                </div>
                <nav class="grid mt-10 gap-2">
                    <SideBar :navItem="navItemList" />
                </nav>
            </nav>

            <SearchMobileModal @closeModal="toggleMobileSearch" :showSearch="mobileSearchModal" />
        </div>
    </div>
    
</template>