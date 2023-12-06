<script setup>
</script>

<template>
    <main class="h-[400px] desktop  bg-no-repeat bg-size-cover bg-center md:relative md:h-[100vh] md:border-b md:border-black">
        <img class="sm:calc- w-full object-cover md:hidden"  src="../../assets/Hero/hero-mobile.jpg" alt="">
        
        <div class="hero_content w-full p-5 md:absolute md:bottom-0 md:left-5 md:max-w-[470px]">
            <h1 class="text-2xl md:text-3xl md:font-[500] md:leading-[25px]">THIS SEASON'S BIGGEST DROP OF NEW GEAR</h1>
            <p class="mt-3 text-[#444444] text-md md:text-[11px] md:text-[#000] md:font-bold md:leading-[18px] md:max-w-[330px] md:mt-1">Get your hands on our latest and greatest gear and technology- all built to make you better.</p>
            <button class="bg-black text-[#fff] w-full max-w-[215px] h-[50px] mt-3 md:max-w-[160px] md:h-[36px] md-text-[#999] md:text-[11px] md:mt-2">Shop New Arrivals</button>
        </div>
    </main>
</template>

<style scoped>
    
    @media screen and (min-width: 768px) {
        .desktop{
            background: url('../../assets/Hero/hero-desktop.jpg');
            background-size: cover;
            background-position: center center;
        }
    }

</style>