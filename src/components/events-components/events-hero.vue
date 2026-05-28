<script setup>
    import HeroTemplate from '../layout/Hero-template.vue';
</script>

<template>
    <div class="grid grid-cols-12 gap-8 px-6 lg:px-0 items-center">
        <HeroTemplate cta_1_link="/events#upcoming" cta_2_link="/events#event-news" class="col-span-12 md:col-start-2 md:col-end-6 mt-10 mb-10">
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

        <div class="col-span-12 md:col-start-7 md:col-end-12 flex items-center justify-center">
            <img src="https://picsum.photos/id/20/480/380.webp" alt="Network Image" class="max-w-full max-h-full w-auto h-auto object-contain">
        </div>


    </div>
</template>
