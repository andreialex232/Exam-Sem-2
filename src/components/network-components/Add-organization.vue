<script setup>
    import { onMounted } from 'vue';
    import HeroTemplate from '../layout/Hero-template.vue';
    import { useRoute } from 'vue-router';
    const route = useRoute();

    onMounted(() => {
        if (route.hash) {
            const element = document.querySelector(route.hash);
            if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    })
</script>

<template>
    <div class="grid grid-cols-1 lg:grid-cols-12 bg-premium-bg py-12 lg:pt-20 lg:pb-20 px-6 lg:px-0 gap-8 lg:gap-0">
        
        <HeroTemplate cta_1_link="/contacts/#membership-form-section" cta_2_link="/contacts/#contact-section" custom class="lg:col-start-2 lg:col-end-6">
            <template #subtitle>
                add your organization
            </template>

            <template #h2-custom="{baseClass}">
                <h2 :class="`${baseClass} text-white`">
                    add your organization <br>to the network
                </h2>
            </template>

            <template #hero-description-custom="{baseClass}">
                <span :class="`${baseClass} text-body text-support block`">
                    Companies, advisors and partner organizations can create a profile and become easier to find across the Danish - German border region.
                </span>
            </template>

            <template #cta1>
                Add your organization
            </template>

            <template #cta2-custom="{ baseClass }">
                <RouterLink :class="`${baseClass} border-white text-white hover:bg-white hover:text-premium-bg transition-colors`" to="/contacts/#contact-section">
                    talk to Business DE-DK first
                </RouterLink>
            </template>
        </HeroTemplate>


        <div class="lg:col-start-8 lg:col-end-12 border border-secondary bg-[#1B2B4B] rounded-sm p-8 lg:p-10 flex flex-col justify-center">
            <div class="flex flex-col">
                <h3 class="uppercase pb-5 text-support text-small-title">why join the network</h3>
                <ul class="flex flex-col pt-5 space-y-3 border-t-[1.6px] border-secondary list-disc pl-5 text-body marker:text-accent marker:text-2xl">
                    <li class="text-body text-white">
                        <span>Be found by relevant companies and partners.</span>
                    </li>
                    <li class="text-body text-white">
                        <span>Show your services, language and region.</span>
                    </li>
                    <li class="text-body text-white">
                        <span>Connect your profile to cases and events.</span>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>
