<script setup>
    import HeroTemplate from '../layout/Hero-template.vue';
</script>

<template>
    <div class="grid grid-cols-12 gap-8">
        <HeroTemplate cta_1_link="/network" cta_2_link="/contact" class="col-start-2 col-end-8 mt-10 mb-10">
            <template #subtitle>
                events
            </template>

            <template #h1>
                Join cross-border business events
            </template>

            <template #hero-description>
                Find workshops, networking meetings, business fairs and practical events in the Danish-German border region.
            </template>

             <template #cta1>
                View upcoming events &#8594;
            </template>

            <template #cta2>
                Get event updates
            </template>

        </HeroTemplate>

        <div class="col-start-8 col-end-13">
            <img src="https://picsum.photos/1920/1080.webp" alt="Network Image" class="w-full h-full">
        </div>


    </div>
</template>
