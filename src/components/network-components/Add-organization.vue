<script setup>
    import HeroTemplate from '../layout/Hero-template.vue';
</script>

<template>
    <div class="grid grid-cols-12 bg-premium-bg">
        <HeroTemplate custom class="col-start-2 col-end-6">
            <template #subtitle>
                add your organization
            </template>

            <template #h2-custom="{baseClass}">
                <div :class="`${baseClass} text-white`">
                    add your organization <br>to the network
                </div>
                
            </template>

            <template #hero-description-custom="{baseClass}">
                <span :class="`${baseClass} text-body text-secondary`">
                    Companies, advisors and partner organizations can create a profile and become easier to find across the Danish - German border region.
                </span>
            </template>

            <template #cta1>
                <RouterLink to="/network">
                    search network &#8594;
                </RouterLink>
            </template>

            <template #cta2-custom="{ baseClass }">
                <RouterLink :class="`${baseClass} border-white text-white`" to="/network">
                    talk to Business DE-DK first
                </RouterLink>
            </template>
        </HeroTemplate>
    </div>
</template>
