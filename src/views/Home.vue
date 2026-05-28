<script setup>
    import HomeHero from '@/components/home-components/Home-hero.vue';
    import AudienceSection from '@/components/home-components/Audience-section.vue';
    import CasesSection from '@/components/home-components/Cases-section.vue';
    import EventSection from '@/components/home-components/Event-section.vue';
    import BecomeMember from '@/components/home-components/BecomeMember.vue';
    import PartnersSection from '@/components/home-components/Partners-section.vue';

    import { computed } from 'vue';
    import { useHead, useSeoMeta } from '@unhead/vue';
    import { useI18n } from 'vue-i18n';

    const { t, locale } = useI18n();

    const siteUrl = 'https://www.business-dedk.com';

    // Pulling directly from your existing home hero translation keys
    const pageTitle = computed(() => t('home.hero.title'));
    const metaDescription = computed(() => t('home.hero.description')); 

    useSeoMeta({
        title: pageTitle,
        description: metaDescription,
        author: 'Alex Andrei Vătui',

        ogType: 'website',
        ogUrl: siteUrl,
        ogTitle: pageTitle,
        ogDescription: metaDescription,
        ogSiteName: 'Business DE-DK',

        twitterCard: 'summary', 
        twitterTitle: pageTitle,
        twitterDescription: metaDescription,

        robots: 'index, follow'
    });

    useHead({
        htmlAttrs: {
            lang: locale
        },
        link: [
            {
                rel: 'canonical',
                href: siteUrl
            }
        ]
    });
</script>

<template>
    <div>
        <HomeHero />
        <AudienceSection />
        <CasesSection />
        <EventSection />
        <BecomeMember />
        <PartnersSection />
    </div>
</template>
