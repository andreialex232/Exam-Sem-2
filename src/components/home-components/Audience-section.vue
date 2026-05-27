<script setup>
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();
</script>

<template>
  <section class="w-full bg-page-bg py-12 md:py-[90px]">
    <div class="max-w-[1280px] mx-auto flex flex-col md:grid md:grid-cols-12 md:gap-8 items-stretch">

      <div class="col-span-12 md:col-span-5 bg-page-bg border border-[#E0E1DD] md:border-0 p-6 md:p-0 rounded-[4px] md:rounded-none flex flex-col justify-center">
        <p class="text-small-title text-cta uppercase font-semibold">
          {{ t('home.targetGroups.companies.subtitle') }}
        </p>
        <h2 class="text-h4 md:text-4xl text-primary font-bold mt-4">
          {{ t('home.targetGroups.companies.title') }}
        </h2>
        <p class="text-base md:text-[17px] text-secondary font-normal mt-4 leading-relaxed">
          {{ t('home.targetGroups.companies.description') }}
        </p>
        <button class="w-full md:w-auto md:self-start cursor-pointer border-[1.6px] border-premium-bg text-premium-bg text-btn font-normal md:font-bold px-5 py-3.5 rounded-sm mt-6 hover:bg-premium-bg hover:text-white transition-colors">
          {{ t('home.targetGroups.companies.cta') }}
        </button>
      </div>

      <div class="h-6 md:hidden"></div>

      <div class="col-span-12 md:col-start-7 md:col-span-5 bg-page-bg border border-[#E0E1DD] md:border-0 p-6 md:p-0 rounded-[4px] md:rounded-none flex flex-col justify-center">
        <p class="text-small-title text-cta uppercase font-semibold">
          {{ t('home.targetGroups.advisors.subtitle') }}
        </p>
        <h2 class="text-h4 md:text-4xl text-primary font-bold mt-4">
          {{ t('home.targetGroups.advisors.title') }}
        </h2>
        <p class="text-base md:text-[17px] text-secondary font-normal mt-4 leading-relaxed">
          {{ t('home.targetGroups.advisors.description') }}
        </p>
        <button class="w-full md:w-auto md:self-start cursor-pointer border-[1.6px] border-premium-bg text-premium-bg text-btn font-normal md:font-bold px-5 py-3.5 rounded-sm mt-6 hover:bg-premium-bg hover:text-white transition-colors">
          {{ t('home.targetGroups.advisors.cta') }}
        </button>
      </div>

    </div>
  </section>
</template>
