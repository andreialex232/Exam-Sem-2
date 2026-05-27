<script setup>
import { useI18n } from 'vue-i18n'
import homeHeroImage from "@/assets/images/home-hero.jpg";
import HeroTemplate from '../layout/Hero-template.vue';

const { t } = useI18n()
</script>

<template>
  <section class="w-full bg-card-surface relative pb-12 md:pb-0">

    <div class="grid max-w-[1280px] grid-cols-12 gap-8 h-auto md:h-[895px] bg-card-surface mx-auto relative">

      <div class="col-span-12 md:col-span-7 flex flex-col justify-start pt-12 md:pt-[50px] z-10">

        <HeroTemplate cta_1_link="/network" cta_2_link="/contact" class="w-full">
          <template #subtitle>
            {{ t('home.hero.subtitle') }}
          </template>

          <template #h1>
            {{ t('home.hero.title') }}
          </template>

          <template #hero-description>
            {{ t('home.hero.description') }}
          </template>

          <template #cta1>
            {{ t('home.hero.ctaExplore') }} →
          </template>

          <template #cta2>
            {{ t('home.hero.ctaBrowse') }}
          </template>
        </HeroTemplate>

        <!-- Mobile Image -->
        <div class="block md:hidden w-full h-[320px] mt-10 rounded-sm overflow-hidden">
          <img
            :src="homeHeroImage"
            alt="Business meeting"
            class="w-full h-full object-cover object-center block"
          />
        </div>

        <!-- Desktop Statistics Row -->
        <div class="hidden md:flex flex-row gap-10 mt-[60px] items-center">
          <div>
            <h4 class="text-h4 text-primary">{{ t('home.hero.stats.interreg') }}</h4>
            <p class="text-body-sm uppercase text-support">{{ t('home.hero.stats.programme') }}</p>
          </div>
          <div class="h-10 w-[1px] bg-[#E0E1DD]"></div>
          <div>
            <h4 class="text-h4 text-primary">{{ t('home.hero.stats.across') }}</h4>
            <p class="text-body-sm uppercase text-support">{{ t('home.hero.stats.theBorder') }}</p>
          </div>
          <div class="h-10 w-[1px] bg-[#E0E1DD]"></div>
          <div>
            <h4 class="text-h4 text-primary">{{ t('home.hero.stats.dkDe') }}</h4>
            <p class="text-body-sm uppercase text-support">{{ t('home.hero.stats.countries') }}</p>
          </div>
          <div class="h-10 w-[1px] bg-[#E0E1DD]"></div>
          <div>
            <h4 class="text-h4 text-primary">{{ t('home.hero.stats.network') }}</h4>
            <p class="text-body-sm uppercase text-support">{{ t('home.hero.stats.platform') }}</p>
          </div>
        </div>

      </div>
    </div>

    <!-- Desktop Background Image Placement -->
    <div class="absolute bottom-0 left-[57.5%] h-[895px] right-0 z-0 hidden md:block">
      <img
        :src="homeHeroImage"
        alt="Business meeting"
        class="w-full h-full object-cover object-center block"
      />
    </div>

    <!-- Border Line Indicator Layout -->
    <div class="absolute top-[880px] left-[57.5%] -translate-x-1/2 flex items-center justify-center gap-2 font-bold text-xs text-secondary z-10 select-none hidden md:flex">
      <span>DK</span>
      <div class="w-12 border-t-2 border-dashed border-cta"></div>
      <span>DE</span>
    </div>

  </section>
</template>