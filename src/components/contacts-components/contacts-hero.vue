<script setup>
    import HeroTemplate from '../layout/Hero-template.vue';
</script>

<template>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 lg:px-0 pb-16 lg:pb-24">

        <HeroTemplate cta_1_link="/3" cta_2_link="/3" class="lg:col-start-2 lg:col-end-6 mt-12">
            <template #subtitle>
                JOIN THE NETWORK
            </template>

            <template #h1>
                Become part of the cross-border business network
            </template>

            <template #hero-description>
                Create visibility for your organisation, connect with relevant companies and advisors, and take part in cross-border knowledge sharing.
            </template>

             <template #cta1>
                Start membership request &#8594;
            </template>

            <template #cta2>
                Talk to us first
            </template>
        </HeroTemplate>

        <div class="lg:col-start-7 lg:col-end-13 w-full">
            <img
                src="https://picsum.photos/500/500"
                alt="Contacts Image Placeholder"
                class="w-full h-auto lg:h-full object-cover"
            >
        </div>

    </div>
</template>


