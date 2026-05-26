<script setup>
    import HeroTemplate from '../layout/Hero-template.vue';
    import { useRoute } from 'vue-router';
    import { onMounted, ref, computed } from 'vue';
    import { useI18n } from 'vue-i18n';
    const currentRoute = useRoute();
    const pageContent = ref(null);
    const { locale } = useI18n();

    const t = computed(() => {
        if (!pageContent.value) return "Loading...";
        return pageContent.value.translations.da
    })

    const loadData = async (slug) => {
        if(!slug) return
        const module = await import(`@/data/network/${slug}.json`);
        pageContent.value = module.default;
        console.log("Loaded content:", pageContent.value);
    }

    onMounted(() => {
        const slug = currentRoute.params.name;
        loadData(slug);
    })
</script>

<template>
    <div v-if="pageContent && t" class="grid grid-cols-1 lg:grid-cols-12 w-full pb-12 lg:pb-20 mt-12 lg:mt-20 px-6 lg:px-0 gap-8 lg:gap-0">
        
        <div class="lg:col-start-2 lg:col-end-6 order-1">
            <HeroTemplate>
                <template #subtitle>
                    {{ t.hero.subtitle }}
                </template>
                <template #h1>
                    {{ t.hero.title }}      
                </template>
                <template #hero-description>
                    {{ t.hero.description }}
                </template>
            </HeroTemplate>
        </div>

        <div class="lg:col-start-8 lg:col-end-12 lg:row-span-2 order-2 lg:order-2">
            <div class="flex flex-col gap-4 items-start justify-center rounded-sm">
                <img class="w-full h-auto object-cover" :src="pageContent.imageUrl" :alt="t.hero.title">
                <div>
                    <p class="text-h4 text-premium-bg">{{ t.hero.title }}</p>
                    <div class="text-body text-support">
                        {{ t.hero.country }} &#8729; {{ t.hero.subtitle }}
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-wrap gap-2 lg:col-start-2 lg:col-end-6 order-3 lg:order-3 mt-2 lg:mt-6">
            <p v-for="tag in t.tags" :key="tag" class="capitalize border-[0.8px] border-[#E0E1DD] py-2 px-4 rounded-full text-body text-premium-bg">{{ tag }}</p>
        </div>

    </div>


    <div v-if="pageContent && t" class="bg-page-bg py-12 lg:pt-20 lg:pb-18 px-6 lg:px-0">
        <div class="grid grid-cols-1 lg:grid-cols-12 w-full gap-6">
            <h2 class="lg:col-start-2 lg:col-end-12 uppercase text-small-title text-support">
                {{ t.quickFactsSection.sectionTitle }}
            </h2>

            <div class="flex flex-col gap-5 lg:col-start-2 lg:col-end-7 px-6 py-6 lg:px-8 lg:pt-8 lg:pb-4 bg-white">
                <div>
                    <h3 class="capitalize text-h3 text-premium-bg pb-6 lg:pb-8">
                        {{ t.quickFactsSection.quickFactsTitle }}
                    </h3>
                    <div>
                        <div v-for="(label, key) in t.quickFactsSection.labels" :key="key" class="flex flex-col sm:flex-row sm:gap-6 py-4 border-t-[0.8px] border-[#E0E1DD] sm:items-center justify-start">
                            <p class="uppercase text-small-title text-support w-full sm:w-[140px]">{{ label }}</p>
                            <p  class="capitalize">{{ t.quickFactsSection.values[key] }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="t.contactSection?.values" class="flex flex-col gap-5 lg:col-start-7 lg:col-end-12 px-6 py-6 lg:px-8 lg:pt-8 lg:pb-4 bg-white">
                <div>
                    <h3 class="capitalize text-h3 text-premium-bg pb-6 lg:pb-8">
                        {{ t.contactSection.title }}
                    </h3>
                    <div>
                        <div v-for="(label, key) in t.contactSection.labels" :key="key" class="flex flex-col sm:flex-row sm:gap-6 py-4 border-t-[0.8px] border-[#E0E1DD] sm:items-center justify-start">
                            <p class="uppercase text-small-title text-support w-full sm:w-[140px]">{{ label }}</p>
                            <p class="capitalize">{{ t.contactSection.values[key] }}</p>
                        </div>
                        <RouterLink to='/network' class="text-center mt-6 secondary-btn-long mx-auto block w-full">
                            {{ t.contactSection.backButton }}
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div v-if="pageContent && t" class="grid grid-cols-1 lg:grid-cols-12 py-12 lg:pt-20 w-full bg-[#FAFAF8] px-6 lg:px-0 gap-6 lg:gap-0">
        <HeroTemplate class="lg:col-start-2 lg:col-end-12">
            <template #subtitle>
                {{ t.aboutSection.subtitle }}
            </template>
            <template #h2>
                {{ t.aboutSection.title }}
            </template>
        </HeroTemplate>
        
        <div class="lg:col-start-2 lg:col-end-12 flex flex-col gap-4 font-semibold text-base lg:text-[18px] leading-relaxed lg:leading-[24px] text-secondary lg:mt-6">
            <p v-for="text in t.aboutSection.intro" :key="text"> {{ text }}</p>
        </div>
        
        <div class="text-secondary mt-8 lg:mt-20 lg:col-start-2 lg:col-end-12 bg-white p-6 lg:p-8 flex flex-col gap-8 border-[#E0E1DD] border-[0.8px] rounded-sm">
            <div v-for="(section, index) in t.aboutSection.sections" :key="index" class="flex flex-col gap-4">
                <h3 v-if="section.title" class="text-h3">{{ section.title }}</h3>
                <p v-for="(paragraph, pIndex) in section.content" :key="pIndex" :class="section.title && pIndex === 0 ? 'text-body' : ''">
                    {{ paragraph }}
                </p>
            </div>
        </div>
    </div>

    <div class="bg-[#FAFAF8] px-6 lg:px-0">
        <div class="grid grid-cols-1 lg:grid-cols-12 w-full gap-6 py-12 lg:pt-20 lg:pb-20">
            <div class="lg:col-start-2 lg:col-end-12 gap-4 lg:gap-6 flex flex-col lg:flex-row">
                <img v-if="pageContent" v-for="(mediaItem, index) in pageContent.media" :key="index" class="w-full lg:w-1/2 object-cover" :src="mediaItem.url" :alt="mediaItem.alt[locale] || mediaItem.alt.en">
            </div>
        </div>
    </div>
    

    <div class="bg-page-bg flex flex-col py-12 lg:pt-20 lg:pb-20 px-6 lg:px-0 gap-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 w-full">
            <div class="lg:col-start-2 lg:col-end-6">
                <HeroTemplate>
                    <template #subtitle>
                        related content
                    </template>
                    <template #h2>
                        related content
                    </template>
                    <template #hero-description>
                        explore related content and resources to further support your international recruitment efforts. From best practices to success stories, find valuable insights and inspiration to enhance your workforce attraction strategies.
                    </template>
                </HeroTemplate>
            </div>   
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 w-full">
            <div class="lg:col-start-2 lg:col-end-12 flex flex-col lg:flex-row gap-6">
                
                <div class="flex w-full flex-col gap-6 bg-white p-6 rounded-sm">
                    <div>
                        <p class="inline px-3 py-1.5 rounded-full uppercase text-small-title text-white bg-accent">case</p>
                    </div>
                    <h3 class="pb-6 capitalize text-h4 text-premium-bg">supporting cross-border cooperation in practice</h3>
                    <RouterLink class="text-center mx-auto block secondary-btn-long w-full" to="/">Read case</RouterLink>
                </div>

                <div class="flex w-full flex-col gap-6 bg-white p-6 rounded-sm">
                    <div>
                        <p class="inline px-3 py-1.5 rounded-full uppercase text-small-title text-white bg-accent">case</p>
                    </div>
                    <h3 class="pb-6 capitalize text-h4 text-premium-bg">supporting cross-border cooperation in practice</h3>
                    <RouterLink class="text-center mx-auto block secondary-btn-long w-full" to="/">Read case</RouterLink>
                </div>

                <div class="flex w-full flex-col gap-6 bg-white p-6 rounded-sm">
                    <div>
                        <p class="inline px-3 py-1.5 rounded-full uppercase text-small-title text-white bg-accent">case</p>
                    </div>
                    <h3 class="pb-6 capitalize text-h4 text-premium-bg">supporting cross-border cooperation in practice</h3>
                    <RouterLink class="text-center mx-auto block secondary-btn-long w-full" to="/">Read case</RouterLink>
                </div>

            </div>
        </div>
    </div>


    <div class="grid grid-cols-1 lg:grid-cols-12 bg-premium-bg py-12 lg:pt-20 lg:pb-20 px-6 lg:px-0 gap-8 lg:gap-0">
        
        <HeroTemplate cta_1_link="/" cta_2_link="/contact" custom class="lg:col-start-2 lg:col-end-6">
            <template #subtitle>
                add your organization
            </template>
            <template #h2-custom="{baseClass}">
                <div :class="`${baseClass} text-white`">
                    add your organization <br>to the network
                </div>
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
                <RouterLink :class="`${baseClass} border-white text-white`" to="/contact">
                    talk to Business DE-DK first
                </RouterLink>
            </template>
        </HeroTemplate>

        <div class="lg:col-start-8 lg:col-end-12 border border-secondary bg-[#1B2B4B] rounded-sm p-8 lg:p-10 flex flex-col justify-center">
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
