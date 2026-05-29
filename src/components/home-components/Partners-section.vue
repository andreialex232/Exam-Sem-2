<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="w-full bg-card-surface py-12 md:py-[90px] px-6 lg:px-0">
    <div class="max-w-[1280px] mx-auto">

      <!-- Text Header Grid -->
      <div class="grid grid-cols-12 gap-8 items-start mb-16 px-4 md:px-0">
        <h3 class="col-span-12 md:col-span-5 text-h4 md:text-h3 text-premium-bg font-bold leading-tight">
          {{ t('home.partners.title') }}
        </h3>

        <p class="col-span-12 md:col-start-9 md:col-span-4 text-base text-steel font-normal leading-relaxed">
          {{ t('home.partners.description') }}
        </p>
      </div>

      <!-- Partner Logos Carousel/Row -->
      <div class="flex flex-row items-center w-full overflow-x-auto gap-4 md:gap-0 md:justify-center mb-12 snap-x snap-mandatory pb-4 md:pb-0">

        <div class="w-[220px] h-[85px] bg-white flex items-center justify-center p-4 rounded-sm md:rounded-none border border-steel/20 md:border-r-2 md:border-y-0 md:border-l-0 md:last:border-r-0 flex-shrink-0 snap-center">
          <img src="@/assets/images/interreg.png" alt="Interreg" class="max-w-full max-h-full object-contain" />
        </div>

        <div class="w-[220px] h-[85px] bg-white flex items-center justify-center p-4 rounded-sm md:rounded-none border border-steel/20 md:border-r-2 md:border-y-0 md:border-l-0 md:last:border-r-0 flex-shrink-0 snap-center">
          <img src="@/assets/images/businessDEDK.png" alt="Business DE DK" class="max-w-full max-h-full object-contain" />
        </div>

        <div class="w-[220px] h-[85px] bg-white flex items-center justify-center p-4 rounded-sm md:rounded-none border border-steel/20 md:border-r-2 md:border-y-0 md:border-l-0 md:last:border-r-0 flex-shrink-0 snap-center">
          <img src="@/assets/images/BusinessEsbjerg.png" alt="Business Esbjerg" class="max-w-full max-h-full object-contain" />
        </div>

        <div class="w-[220px] h-[85px] bg-white flex items-center justify-center p-4 rounded-sm md:rounded-none border border-steel/20 md:border-r-2 md:border-y-0 md:border-l-0 md:last:border-r-0 flex-shrink-0 snap-center">
          <img src="@/assets/images/nordfriesland.png" alt="Wirtschaftsförderung Nordfriesland" class="max-w-full max-h-full object-contain" />
        </div>

        <div class="w-[220px] h-[85px] bg-white flex items-center justify-center p-4 rounded-sm md:rounded-none border border-steel/20 md:border-r-2 md:border-y-0 md:border-l-0 md:last:border-r-0 flex-shrink-0 snap-center">
          <img src="@/assets/images/toenderErhvervsraad.png" alt="Tønder Erhvervsråd" class="max-w-full max-h-full object-contain" />
        </div>

      </div>

      <!-- Footer Strategic Badges -->
      <div class="grid grid-cols-12 gap-8 px-4 md:px-0">
        <div class="hidden md:flex md:col-span-12 flex-row flex-nowrap items-center justify-center gap-8 text-xs text-steel font-semibold uppercase tracking-wider whitespace-nowrap">

          <div class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-steel/20" aria-hidden="true"></span>
            <span>{{ t('home.partners.tags.supported') }}</span>
          </div>

          <div class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-steel/20" aria-hidden="true"></span>
            <span>{{ t('home.partners.tags.cooperation') }}</span>
          </div>

          <div class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-steel/20" aria-hidden="true"></span>
            <span>{{ t('home.partners.tags.network') }}</span>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
