<script setup>
import EventsHero from '@/components/events-components/events-hero.vue';
import EventTypeSection from '@/components/events-components/event-type-section.vue';
import PastEvents from '@/components/events-components/past-events.vue';
import EventUpdates from '@/components/events-components/event-updates.vue';
import EventFindPeople from '@/components/events-components/events-findPeople.vue';
import EventsActors from '@/components/events-components/events-actors.vue';
</script>

<template>
  <EventsHero />
  <EventTypeSection />
  <EventsActors></EventsActors>
  <PastEvents />
  <EventUpdates />
  <EventFindPeople />
</template>
