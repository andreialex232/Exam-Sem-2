<script setup>
// Definovací pole dat pro uplynulé akce
const pastEvents = [
  {
    id: 1,
    tag: 'Event Recap',
    title: '3 takeaways from a cross-border networking event',
    description: 'A short summary of what companies and partners discussed.',
    infoText: '✓ Related case available',
    actionText: 'View recap',
    link: '#',
    image: 'https://picsum.photos/355/200?random=1'
  },
  {
    id: 2,
    tag: 'Photo Recap',
    title: 'Business DE-DK at regional fair',
    description: 'Highlights from a fair where companies met advisors and partner organisations.',
    infoText: '📷 Photo gallery available',
    actionText: 'View photos',
    link: '#',
    image: 'https://picsum.photos/355/200?random=2'
  },
  {
    id: 3,
    tag: 'Event Recap',
    title: 'Workshop insights: onboarding international employees',
    description: 'Key points from a workshop about workforce attraction and integration.',
    infoText: '▶ Short video available',
    actionText: 'View recap',
    link: '#',
    image: 'https://picsum.photos/355/200?random=3'
  }
]
</script>

<template>
  <section class="w-full bg-page-bg py-12 md:py-[90px]">
    <div class="max-w-[1280px] mx-auto">

      <div class="flex flex-col md:flex-row md:justify-between md:items-end w-full mb-10 md:mb-16 gap-4">
        <div>
          <span class="text-[11px] font-bold uppercase tracking-widest text-support block mb-3">
            Past events
          </span>
          <h2 class="text-3xl md:text-h2 text-primary font-bold mb-4 md:mb-0">
            Past events and recaps
          </h2>
          <p class="text-base text-secondary font-normal leading-relaxed max-w-[600px] mt-2">
            See what has happened in the network and explore related cases, photos and insights.
          </p>
        </div>

        <div class="self-start md:self-auto">
          <RouterLink
            to="#"
            class="cursor-pointer text-[13px] md:text-sm font-semibold text-cta hover:underline inline-flex items-center gap-1"
          >
            See all past events &rarr;
          </RouterLink>
        </div>
      </div>

      <div class="flex flex-col gap-6 sm:grid sm:grid-cols-2 md:grid-cols-12 md:gap-8 items-stretch">

        <div
          v-for="(event, index) in pastEvents"
          :key="event.id"
          class="col-span-12 sm:col-span-1 md:col-span-4 bg-white border border-grey border-t-[3px] rounded-sm flex flex-col justify-between overflow-hidden"
          :class="{ 'sm:col-span-2 sm:mx-auto sm:max-w-[50%] md:col-span-4 md:mx-0 md:max-w-none': index === 2 }"
        >
          <div>
            <div class="w-full h-[200px] bg-grey">
              <img :src="event.image" :alt="event.title" class="w-full h-full object-cover" />
            </div>

            <div class="p-6 md:p-8 flex flex-col items-start">
              <span class="bg-secondary text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                {{ event.tag }}
              </span>
              <h3 class="text-lg md:text-h4 font-semibold text-primary leading-snug mb-3">
                {{ event.title }}
              </h3>
              <p class="text-[15px] md:text-base text-secondary font-normal leading-relaxed mb-4">
                {{ event.description }}
              </p>
              <span class="text-xs text-support font-normal inline-flex items-center gap-1.5">
                {{ event.infoText }}
              </span>
            </div>
          </div>

          <div class="px-6 pb-6 md:p-8 md:pt-0">
            <div class="w-full h-[1px] bg-grey mb-6"></div>
            <RouterLink
              :to="event.link"
              class="inline-flex items-center justify-center w-full text-center border-[1.6px] border-primary md:border-0 rounded-[4px] md:rounded-none py-3.5 md:py-0 text-[15px] font-semibold text-primary hover:bg-primary hover:text-white md:hover:bg-transparent md:hover:text-primary md:hover:underline transition-colors gap-1"
            >
              <span>{{ event.actionText }}</span>
              <span>&rarr;</span>
            </RouterLink>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
