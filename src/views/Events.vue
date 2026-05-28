<script setup>
import EventsHero from '@/components/events-components/events-hero.vue';
import EventTypeSection from '@/components/events-components/event-type-section.vue';
import PastEvents from '@/components/events-components/past-events.vue';
import EventUpdates from '@/components/events-components/event-updates.vue';
import EventFindPeople from '@/components/events-components/events-findPeople.vue';
import EventsActors from '@/components/events-components/events-actors.vue';
import { useSeoMeta, useHead } from '@unhead/vue';


  useHead({
    titleTemplate: '%s | Business DE-DK',
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      {
        rel: 'canonical',
        href: 'https://business-region-13108.web.app/events'
      }
    ]
  });


  useSeoMeta({
    title: 'Join cross-border business events ',
    description: 'Find workshops, networking meetings, business fairs and practical events in the Danish-German border region. ',
    
    ogType: 'website',
    ogTitle: 'Cross-Border Business Events | Business DE-DK',
    ogDescription: 'Find workshops, networking meetings, business fairs and practical events in the Danish-German border region. ',
    ogUrl: 'https://business-region-13108.web.app/events',
    
    twitterCard: 'summary_large_image',
    twitterTitle: 'Cross-Border Business Events | Business DE-DK',
    twitterDescription: 'Find workshops, networking meetings, business fairs and practical events in the Danish-German border region.',

  });
</script>

<template>
  <EventsHero />
  <EventTypeSection />
  <EventsActors></EventsActors>
  <PastEvents />
  <EventUpdates />
  <EventFindPeople />
</template>
