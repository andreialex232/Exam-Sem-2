<script setup>
    import HeroTemplate from '../layout/Hero-template.vue';
</script>

<template>
    <div class="grid grid-cols-12 bg-premium-bg pt-20 pb-20">
        <HeroTemplate cta_1_link="/" cta_2_link="/contact" custom class="col-start-2 col-end-6">
            <template #subtitle>
                add your organization
            </template>

            <template #h2-custom="{baseClass}">
                <div :class="`${baseClass} text-white`">
                    add your organization <br>to the network
                </div>
                
            </template>

            <template #hero-description-custom="{baseClass}">
                <span :class="`${baseClass} text-body text-support`">
                    Companies, advisors and partner organizations can create a profile and become easier to find across the Danish - German border region.
                </span>
            </template>

            <template #cta1>
                Add your organization
            </template>

            <template #cta2-custom="{ baseClass }">
                <RouterLink :class="`${baseClass} border-white text-white`" to="/contact">
                    talk to Business DE-DK first
                </RouterLink>
            </template>
        </HeroTemplate>


        <!-- Card -->
        <div class="col-start-8 col-end-12 border border-secondary bg-[#1B2B4B] rounded-sm p-10 flex flex-col justify-center">
            <div class="flex flex-col">
                <h3 class="uppercase pb-5 text-support text-small-title">why join the network</h3>
                <ul class="flex flex-col pt-5 space-y-3 border-t-[1.6px] border-secondary list-disc list-inside text-body marker:text-accent marker:text-2xl">
                    <li class="text-body text-white">Be found by relevant companies and partners.</li>
                    <li class="text-body text-white">Show your services, language and region.</li>
                    <li class="text-body text-white">Connect your profile to cases and events.</li>
                </ul>
            </div>
        </div>

        
    </div>
</template>
