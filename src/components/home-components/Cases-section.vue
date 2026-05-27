<script setup>

</script>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="w-full bg-primary pb-[90px]">
    <div class="grid max-w-[1280px] grid-cols-12 gap-8 mx-auto">

      <!-- Header Section -->
      <div class="col-span-12 mt-[90px] flex flex-col justify-start w-full mb-[40px]">
        <div class="flex flex-col md:flex-row justify-between md:items-center w-full gap-4">
          <h2 class="text-h3 md:text-4xl text-white font-bold">
            {{ t('home.news.title') }}
          </h2>
          <div class="hidden md:block text-white font-medium text-sm">
            <RouterLink to="/cases" class="hover:underline">
              {{ t('home.news.goToCases') }} →
            </RouterLink>
          </div>
        </div>

        <p class="text-base text-support font-normal mt-4 max-w-[700px] md:hidden">
          {{ t('home.news.description') }}
        </p>
      </div>

      <!-- Article 1 (Main Card - Interview) -->
      <div class="col-span-12 md:col-span-6 bg-tertiary border border-secondary md:border-0 flex flex-col overflow-hidden group pb-6 md:pb-0 rounded-sm relative">
        <div class="hidden md:block relative w-full h-[260px]">
          <img
            src="https://picsum.photos/600/260"
            alt="Business meeting"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="bg-tertiary p-6 md:p-8 flex flex-col h-auto md:h-[170px]">
          <span class="absolute top-4 left-4 bg-cta text-white text-[10px] font-semibold uppercase tracking-[1.5px] px-2.5 py-1.5 z-10 hidden md:block">
            {{ t('home.news.labels.interview') }}
          </span>
          <span class="inline-block md:hidden self-start bg-cta text-white text-[11px] font-bold uppercase tracking-[1.5px] px-3 py-1 rounded-full mb-4">
            {{ t('home.news.labels.interview') }}
          </span>
          <h3 class="text-h4 md:text-[26px] text-white font-bold leading-snug mb-2 md:mt-5">
            {{ t('home.news.mockContent.article1') }}
          </h3>
          <p class="text-base text-support font-normal mt-2 md:mt-5 mb-4 md:mb-0">
            Example Partner · EN
          </p>
          <div class="text-cta font-semibold text-[11px] md:text-sm">
            <RouterLink to="/cases" class="hover:underline">
              {{ t('home.news.links.explore') }} →
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- Sidebar Cards Stack -->
      <div class="col-span-12 md:col-span-6 flex flex-col gap-6 md:gap-8">

        <!-- Article 2 (Case) -->
        <div class="bg-tertiary border border-secondary md:border-0 p-6 md:p-8 flex flex-col justify-between h-auto md:h-[234px] rounded-sm">
          <div>
            <span class="inline-block md:hidden bg-secondary text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              {{ t('home.news.labels.case') }}
            </span>
            <span class="text-cta text-[10px] font-semibold uppercase tracking-wider hidden md:block mb-3">
              {{ t('home.news.labels.case') }}
            </span>
            <h3 class="text-h4 md:text-[26px] text-white font-bold leading-snug md:mt-[14px] mb-2">
              {{ t('home.news.mockContent.article2') }}
            </h3>
            <p class="text-base text-support font-normal mt-2 md:mt-5 mb-4 md:mb-0">
              Example Company · DA
            </p>
            <div class="text-cta font-semibold text-[11px] md:text-sm">
              <RouterLink to="/cases" class="hover:underline">
                {{ t('home.news.links.read') }} →
              </RouterLink>
            </div>
          </div>
        </div>

        <!-- Article 3 (Insight) -->
        <div class="bg-tertiary md:bg-secondary border border-secondary md:border-0 p-6 md:p-8 flex flex-col justify-between h-auto md:h-[234px] rounded-sm">
          <div>
            <span class="inline-block md:hidden bg-[#4B5E78] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              {{ t('home.news.labels.insight') }}
            </span>
            <span class="text-support text-[10px] font-semibold uppercase tracking-wider hidden md:block mb-3">
              {{ t('home.news.labels.insight') }}
            </span>
            <h3 class="text-h4 md:text-[26px] text-white font-bold leading-snug md:mt-[14px] mb-2">
              {{ t('home.news.mockContent.article3') }}
            </h3>
            <p class="text-base text-support font-normal mt-2 md:mt-5 mb-4 md:mb-0">
              Example Advisor · DE
            </p>
            <div class="text-white font-semibold text-[11px] md:text-sm mt-4 md:mt-10">
              <RouterLink to="/cases" class="hover:underline">
                {{ t('home.news.links.view') }} →
              </RouterLink>
            </div>
          </div>
        </div>

      </div>

      <!-- Mobile Fallback Button -->
      <div class="col-span-12 block md:hidden mt-4 w-full">
        <RouterLink
          to="/cases"
          class="block w-full text-center border-[1.6px] border-white text-white font-semibold text-[15px] py-4 rounded-sm hover:bg-white hover:text-primary transition-colors"
        >
          {{ t('home.news.goToCases') }} →
        </RouterLink>
      </div>

    </div>
  </section>
</template>
