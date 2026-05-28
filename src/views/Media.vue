<script setup>
import MediaHero from '@/components/media-components/media-hero.vue';
import ShortInsightSection from '@/components/media-components/shortInsight-section.vue';
import FindPeopleMedia from '@/components/media-components/findpeoplemedia-component.vue';
import NewsletterMedia from '@/components/media-components/newslettermedia.vue';
import ArticleSection from '@/components/media-components/article-section.vue';
import { useSeoMeta, useHead } from '@unhead/vue';


  useHead({
    titleTemplate: '%s | Business DE-DK',
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      {
        rel: 'canonical',
        href: 'https://business-region-13108.web.app/cases'
      }
    ]
  });


  useSeoMeta({
    title: 'Real Cross-Border Cooperation Cases & Insights',
    description: 'Explore cases, interviews, short videos and updates from companies, advisors and partners working across the Danish-German border region.',
    
    ogType: 'website',
    ogTitle: 'Cross-Border Business Cases & Insights | Business DE-DK',
    ogDescription: 'Explore cases, interviews, short videos and updates from companies, advisors and partners working across the Danish-German border region.',
    ogUrl: 'https://business-region-13108.web.app/cases',
    
    twitterCard: 'summary_large_image',
    twitterTitle: 'Cross-Border Business Cases & Insights | Business DE-DK',
    twitterDescription: 'Explore cases, interviews, short videos and updates from companies, advisors and partners working across the Danish-German border region.',

  });
</script>

<template>
  <MediaHero />
  <ArticleSection />
  <ShortInsightSection />
  <FindPeopleMedia />
  <NewsletterMedia />
</template>
