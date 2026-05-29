<script setup>
import HeroTemplate from '../layout/Hero-template.vue';
import { useRoute } from 'vue-router';
import { onMounted, ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const currentRoute = useRoute();
const pageContent = ref(null);
const { locale } = useI18n();

// Dynamically compute the translations based on current locale, fallback to English
const t = computed(() => {
    if (!pageContent.value || !pageContent.value.translations) return null;
    return pageContent.value.translations[locale.value] || pageContent.value.translations.en;
});

const loadData = async (slug) => {
    if (!slug) return;
    try {
        const module = await import(`@/data/event/${slug}.json`);
        pageContent.value = module.default;
        console.log("Loaded content:", pageContent.value);
    } catch (error) {
        console.error("Failed to load event data:", error);
    }
};

onMounted(() => {
    const slug = currentRoute.params.name;
    loadData(slug);
});

// Helper function to color-code event tags
const eventBadgeClass = (type) => {
    const t = type.toLowerCase();
    if (t.includes('workshop')) return 'bg-orange-100 text-orange-700';
    if (t.includes('webinar')) return 'bg-slate-900 text-white';
    if (t.includes('fair') || t.includes('messe')) return 'bg-blue-100 text-blue-800';
    return 'bg-gray-100 text-gray-800';
};
</script>

<template>
    <div v-if="!t" class="min-h-screen flex items-center justify-center text-premium-bg">
        <p>Loading...</p>
    </div>

    <div v-else>
        <div class="bg-card-surface grid grid-cols-12 gap-4 gap-y-10 py-10 lg:py-20">
            <div class="col-start-2 col-end-12 lg:col-end-7 flex flex-col gap-6 text-white">
                <div>
                    <p class="text-small-title px-3 bg-premium-bg py-1.5 inline-block rounded-full uppercase">
                        {{ t.hero.tag }}
                    </p>
                </div>
            
                <HeroTemplate cta_1_link="" cta_2_link="">
                    <template #h1>
                        {{ t.hero.title }}
                    </template>
                    <template #hero-description>
                        {{ t.hero.description }}
                    </template>
                </HeroTemplate>
            </div>

            <div class="bg-white col-start-2 col-end-12 lg:col-start-8 lg:col-end-12 border border-gray-200 rounded-sm p-6 flex flex-col justify-between min-h-[500px]">
                <div class="uppercase pb-4 border-b border-gray-100">
                    <p class="text-small-title text-support tracking-wider font-semibold">{{ t.practicalInformation.sectionTitle }}</p>
                </div>

                <div class="flex-1 flex flex-col justify-between py-2">
                    <div class="flex justify-between items-center py-3 border-b border-gray-100">
                        <p class="body-regular text-support capitalize">{{ t.practicalInformation.labels.date }}</p>
                        <p class="text-[16px] font-[700] text-premium-bg">{{ t.practicalInformation.values.date }}</p>
                    </div>
                    <div class="flex justify-between items-center py-3 border-b border-gray-100">
                        <p class="body-regular text-support capitalize">{{ t.practicalInformation.labels.time }}</p>
                        <p class="text-[16px] font-[700] text-premium-bg">{{ t.practicalInformation.values.time }}</p>
                    </div>
                    <div class="flex justify-between items-center py-3 border-b border-gray-100">
                        <p class="body-regular text-support capitalize">{{ t.practicalInformation.labels.location }}</p>
                        <p class="text-[16px] font-[700] text-premium-bg">{{ t.practicalInformation.values.location }}</p>
                    </div>
                    <div class="flex justify-between items-center py-3 border-b border-gray-100">
                        <p class="body-regular text-support capitalize">{{ t.practicalInformation.labels.language }}</p>
                        <p class="text-[16px] font-[700] text-premium-bg">{{ t.practicalInformation.values.language }}</p>
                    </div>
                    <div class="flex justify-between items-start py-3 pb-6">
                        <p class="body-regular text-support capitalize pt-0.5">{{ t.practicalInformation.labels.host }}</p>
                        <p class="text-[16px] font-[700] text-premium-bg text-right max-w-[60%]">{{ t.practicalInformation.values.host }}</p>
                    </div>

                    <div class="capitalize hidden lg:flex flex-col gap-3 pt-4">
                        <RouterLink to="" class="accent-btn text-center block w-full py-3">{{ t.hero.cta_1 }}</RouterLink>
                        <RouterLink to="" class="secondary-btn text-center block w-full py-3">{{ t.hero.cta_2 }}</RouterLink>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-12 gap-8 gap-y-12 pt-10 pb-10 lg:pt-20 lg:pb-20">
            <div class="col-start-2 col-end-12 lg:col-end-7 space-y-8">
                <div>
                    <h2 class="text-h3 text-premium-bg mb-2">{{ t.detailsSection.whoIsThisFor.title }}</h2>
                    <p class="text-body text-premium-bg">
                        {{ t.detailsSection.whoIsThisFor.description }}
                    </p>
                </div>
                <div>
                    <h2 class="text-h3 text-premium-bg mb-2">{{ t.detailsSection.whatWillYouLearn.title }}</h2>
                    <ul class="space-y-2 text-body text-premium-bg">
                        <li v-for="(item, index) in t.detailsSection.whatWillYouLearn.items" :key="index" class="flex items-start">
                            <span class="mr-2" aria-hidden="true">—</span>
                            <span>{{ item }}</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 class="text-h3 text-premium-bg mb-2">{{ t.programmeSection.title }}</h2>
                    <div class="border border-gray-200 rounded overflow-hidden">
                        <div 
                            v-for="(item, index) in t.programmeSection.items" 
                            :key="index"
                            :class="['grid grid-cols-4 p-4 border-gray-200', index !== t.programmeSection.items.length - 1 ? 'border-b' : '', index % 2 === 0 ? 'bg-gray-50' : 'bg-white']"
                        >
                            <div :class="[index % 2 === 0 ? 'text-body text-support' : 'font-medium text-gray-500']">{{ item.time }}</div>
                            <div class="col-span-3" :class="[index % 2 === 0 ? 'text-body text-premium-bg' : '']">{{ item.event }}</div>
                        </div>
                    </div>

                    <div class="capitalize flex lg:hidden flex-col gap-3 pt-8">
                        <RouterLink to="" class="accent-btn text-center block w-full py-3">{{ t.hero.cta_1 }}</RouterLink>
                        <RouterLink to="" class="secondary-btn text-center block w-full py-3">{{ t.hero.cta_2 }}</RouterLink>
                    </div>
                </div>
            </div>

            <div class="col-start-2 col-end-12 lg:col-start-9 lg:col-end-12 space-y-6">
                <p class="text-support text-small-title uppercase">
                    {{ t.relatedContent.sectionTitle }}
                </p>

                <div v-for="(item, index) in t.relatedContent.items" :key="index" class="border border-gray-200 p-6 rounded space-y-3">
                    <span class="bg-page-bg border border-premium-bg text-small-title text-support px-3 py-1.5 rounded-full uppercase">
                        {{ t.relatedContent.tag }}
                    </span>
                    <h3 class="text-h4 text-premium-bg pt-4">
                        {{ item.title }}
                    </h3>
                    <a href="#" class="inline-flex items-center text-orange-500 font-medium hover:underline pt-2">
                        {{ t.relatedContent.cta }} <span class="ml-1" aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </div>

        <div class="bg-page-bg pt-10 pb-20">
            <div class="grid grid-cols-12 gap-y-10 my-10 lg:my-20">
                <div class="col-start-2 col-end-12 flex flex-wrap gap-4 justify-between items-end border-b border-gray-100 pb-4">
                    <div class="flex flex-col gap-2">
                        <span class="text-xs uppercase tracking-wider font-semibold text-support">{{ t.upcomingEvents.tag }}</span>
                        <h2 class="text-3xl font-bold">{{ t.upcomingEvents.title }}</h2>
                    </div>
                    
                    <div>
                        <RouterLink to="" class="accent-link font-bold flex items-center gap-1 whitespace-nowrap">
                            {{ t.upcomingEvents.seeAllCta }} <span aria-hidden="true">&rarr;</span>
                        </RouterLink>
                    </div>
                </div>

                <div class="col-start-2 col-end-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div v-for="(event, index) in t.upcomingEvents.items" :key="index" class="bg-white border border-gray-200 rounded-sm p-6 flex flex-col justify-between min-h-[280px]">
                        <div class="grid grid-cols-12 gap-4">
                            <div class="col-span-3 flex flex-col items-center justify-start text-center">
                                <span class="text-h2 text-premium-bg">{{ event.day }}</span>
                                <span class="text-small-title uppercase text-accent mt-1">{{ event.month }}</span>
                            </div>
                            
                            <div class="col-span-9 flex flex-col gap-3 items-start">
                                <span :class="eventBadgeClass(event.type)" class="text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                                    {{ event.type }}
                                </span>
                                <h3 class="text-lg font-bold leading-snug">
                                    {{ event.title }}
                                </h3>
                                <div class="flex flex-col gap-1 text-sm text-support mt-2">
                                    <span class="flex items-center gap-1.5">
                                        <span aria-hidden="true">📍</span> {{ event.location }}
                                    </span>
                                    <span class="flex items-center gap-1.5">
                                        <span aria-hidden="true">🌐</span> {{ event.language }}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center gap-6 pt-6 mt-4 border-t border-gray-100" :class="{ 'justify-center': index === 0 }">
                            <RouterLink to="" class="font-bold text-orange-600 flex items-center gap-1">
                                {{ t.upcomingEvents.registerCta }} <span aria-hidden="true">&rarr;</span>
                            </RouterLink>
                            <RouterLink to="" class="text-sm text-support hover:underline">
                                {{ t.upcomingEvents.viewDetailsCta }}
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-premium-bg w-full py-16 lg:py-24 px-4 flex flex-col items-center justify-center text-center text-white">
            <div class="max-w-2xl flex flex-col gap-4 items-center w-full">
                <h2 class="text-3xl lg:text-4xl font-bold tracking-tight">
                    {{ t.footerCta.title }}
                </h2>
                
                <p class="body-regular text-support text-base max-w-lg">
                    {{ t.footerCta.description }}
                </p>
                
                <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full">
                    <RouterLink to="" class="accent-btn px-6 py-3 font-semibold rounded-sm transition-colors block w-full sm:w-auto">
                        {{ t.footerCta.cta_1 }}
                    </RouterLink>
                    
                    <RouterLink to="" class="outline-btn-custom border border-white px-6 py-3 font-semibold rounded-sm transition-colors block w-full sm:w-auto">
                        {{ t.footerCta.cta_2 }}
                    </RouterLink>
                    
                    <RouterLink to="" class="text-link font-medium hover:underline px-4 py-3 flex items-center justify-center gap-1.5 whitespace-nowrap w-full sm:w-auto">
                        {{ t.footerCta.cta_3 }} <span aria-hidden="true">&rarr;</span>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>