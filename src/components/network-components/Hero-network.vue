<script setup>
    import HeroTemplate from '../layout/Hero-template.vue';
</script>

<template>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 lg:mt-20 px-6 lg:px-0 pb-16 lg:pb-24">
        
        <HeroTemplate cta_1_link="/network" cta_2_link="/contact" class="lg:col-start-2 lg:col-end-6">
            <template #subtitle>
                network database
            </template>

            <template #h1>
                explore the cross-border network
            </template>

            <template #hero-description>
                find companies, advisors, partner organisations and institutions working across the Danish - German border region.
            </template>

             <template #cta1>
                search network &#8594;
            </template>

            <template #cta2>
                add your organization
            </template>
        </HeroTemplate>

        <div class="lg:col-start-7 lg:col-end-13 w-full">
            <img 
                src="https://picsum.photos/1920/1080.webp" 
                alt="Network Image Placeholder" 
                class="w-full h-auto lg:h-full object-cover"
            >
        </div>
        
    </div>
</template>


