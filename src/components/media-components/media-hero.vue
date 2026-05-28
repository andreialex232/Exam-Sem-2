<script setup>
import HeroTemplate from '../layout/Hero-template.vue';
</script>

<template>
  <section class="w-full bg-white py-[80px]">
    <div class="max-w-[1280px] mx-auto px-6 lg:px-0">

      <div class="grid grid-cols-12 gap-8 lg:gap-0 items-start">

        <div class="col-span-12 lg:col-span-6 lg:pr-12 lg:border-r border-grey">
          <HeroTemplate cta_1_link="/cases#latest" cta_2_link="/cases#shorts" class="w-full">
            <template #subtitle>
              Cases & Insights
            </template>

            <template #h1>
              Real cross-border cooperation
            </template>

            <template #hero-description>
              Explore cases, interviews, short videos and updates from companies, advisors and partners working across the Danish-German border region.
            </template>

            <template #cta1>
              Explore cases &#8594;
            </template>

            <template #cta2>
              Watch interviews
            </template>
          </HeroTemplate>
        </div>

        <div class="col-span-12 lg:col-span-5 lg:pl-12 w-full">

          <div class="relative w-full aspect-[16/10] bg-primary rounded-[4px] p-6 flex flex-col justify-between overflow-hidden shadow-sm group">

            <div class="flex justify-between items-center w-full">

              <div class="w-5 h-5 flex items-center justify-center bg-white/20 rounded-[2px] select-none">
                <span class="text-[10px] text-cta font-bold uppercase tracking-wider">
                  DE
                </span>
              </div>

              <div class="bg-white px-3 py-1 rounded-full select-none">
                <span class="text-[11px] text-primary font-bold uppercase tracking-wider">
                  INTERVIEW
                </span>
              </div>

            </div>

            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <button class="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center border border-white/40 group-hover:scale-110 group-hover:bg-white/30 transition-all cursor-pointer pointer-events-auto">
                <svg class="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 28 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>

            <div class="w-full flex flex-col gap-1.5 z-10">
              <h4 class="text-h4 text-white font-bold leading-snug max-w-[90%]">
                How companies cooperate across the Danish-German border
              </h4>
              <p class="text-body text-support font-normal">
                Regional Business Partner · EN
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>
