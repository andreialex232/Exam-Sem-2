<script setup>
    import HeroTemplate from '../layout/Hero-template.vue';
</script>

<template>
    <div class="grid grid-cols-12 gap-8 mt-20">
        <HeroTemplate cta_1_link="/network" cta_2_link="/contact" class="col-start-2 col-end-6">
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

        <div class="col-start-7 col-end-13">
            <img src="https://picsum.photos/1920/1080.webp" alt="Network Image" class="w-full h-full">
        </div>

        
    </div>
</template>


