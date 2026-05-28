<script setup>
    import HeroTemplate from '../layout/Hero-template.vue';
</script>

<template>
    <div class="grid grid-cols-12 gap-8 px-6 lg:px-0 items-center">

        <HeroTemplate cta_1_link="/contacts#membership-form-section" cta_2_link="/contacts#contact-section" class="col-span-12 md:col-start-2 md:col-end-6 mt-10 mb-10">
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

        <div class="col-span-12 md:col-start-7 md:col-end-12 flex items-center justify-center">
            <img src="https://picsum.photos/id/445/480/380.webp" alt="Contact Image" class="max-w-full max-h-full w-auto h-auto object-contain">
        </div>

    </div>
</template>


