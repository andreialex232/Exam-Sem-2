<script setup>
import HeroTemplate from '../layout/Hero-template.vue';
</script>

<template>
  <section class="w-full bg-page-bg py-12 border-t border-b border-grey px-6 lg:px-0">
    <div class="max-w-[1280px] mx-auto">

      <div class="mb-10 md:mb-16">
        <HeroTemplate class="lg:col-start-2 lg:col-end-6 mt-10">
          <template #subtitle>
            PROFILE PREVIEW
          </template>
          <template #h1>
            What your network profile <br class="hidden md:block">can include
          </template>
        </HeroTemplate>
      </div>

      <div class="grid grid-cols-12 gap-8 items-start">

        <div class="col-span-12 md:col-span-7 bg-white rounded-sm overflow-hidden border border-grey border-t-[3px]">

          <div class="bg-page-bg py-6 text-center border-b border-grey">
            <span class="text-[13px] text-support italic font-normal">
              Logo / Image placeholder
            </span>
          </div>

          <div class="p-6 md:p-8 flex flex-col gap-6">

            <div>
              <span class="bg-secondary text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                PARTNER ORGANISATION
              </span>
            </div>

            <h3 class="text-[20px] md:text-h3 text-primary font-semibold md:font-bold">
              Organisation name
            </h3>

            <div class="flex flex-col">

              <div class="flex justify-between items-center py-3.5 border-b border-grey">
                <span class="text-[10px] md:text-small-title text-support uppercase font-bold tracking-wider">
                  PROFILE TYPE
                </span>
                <span class="text-[15px] md:text-body text-primary font-normal">
                  Partner organisation
                </span>
              </div>

              <div class="flex justify-between items-center py-3.5 border-b border-grey">
                <span class="text-[10px] md:text-small-title text-support uppercase font-bold tracking-wider">
                  COUNTRY / REGION
                </span>
                <span class="text-[15px] md:text-body text-primary font-normal">
                  Denmark / Germany
                </span>
              </div>

              <div class="flex justify-between items-center py-3.5 border-b border-grey">
                <span class="text-[10px] md:text-small-title text-support uppercase font-bold tracking-wider">
                  SECTOR OR SERVICE
                </span>
                <span class="text-[15px] md:text-body text-primary font-normal">
                  Regional cooperation
                </span>
              </div>
            </div>

            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
              <button class="cursor-pointer border border-primary text-primary font-bold text-base px-5 py-2.5 rounded-[4px] bg-transparent hover:bg-primary hover:text-white transition-colors text-center md:inline-block w-full md:w-auto">
                View profile
              </button>

              <div class="flex gap-1.5 justify-start md:justify-end">
                <span class="sr-only">Available languages:</span>
                <div class="bg-grey px-2.5 py-1 rounded-[2px] text-small-title text-support uppercase font-bold tracking-wider">DA</div>
                <div class="bg-grey px-2.5 py-1 rounded-[2px] text-small-title text-support uppercase font-bold tracking-wider">DE</div>
                <div class="bg-grey px-2.5 py-1 rounded-[2px] text-small-title text-support uppercase font-bold tracking-wider">EN</div>
              </div>
            </div>

          </div>

          <div class="px-6 pb-6 md:px-8 md:pb-8 border-t border-transparent">
            <p class="text-sm text-secondary italic font-normal leading-relaxed">
              Short description of your organisation and its role in the cross-border region.
            </p>
          </div>

        </div>

        <div class="col-span-12 md:col-span-5 flex flex-col gap-6 md:pl-25">

          <HeroTemplate>
            <template #subtitle>
              PROFILE FIELDS INCLUDE
            </template>
          </HeroTemplate>

          <ul class="flex flex-col gap-4">
            <li class="flex items-center gap-3 text-[15px] md:text-body text-primary font-normal">
              <span class="w-2 h-2 rounded-full bg-cta flex-shrink-0" aria-hidden="true"></span>
              Organisation name
            </li>
            <li class="flex items-center gap-3 text-[15px] md:text-body text-primary font-normal">
              <span class="w-2 h-2 rounded-full bg-cta flex-shrink-0" aria-hidden="true"></span>
              Profile type
            </li>
            <li class="flex items-center gap-3 text-[15px] md:text-body text-primary font-normal">
              <span class="w-2 h-2 rounded-full bg-cta flex-shrink-0" aria-hidden="true"></span>
              Country / region
            </li>
            <li class="flex items-center gap-3 text-[15px] md:text-body text-primary font-normal">
              <span class="w-2 h-2 rounded-full bg-cta flex-shrink-0" aria-hidden="true"></span>
              Sector or service
            </li>
            <li class="flex items-center gap-3 text-[15px] md:text-body text-primary font-normal">
              <span class="w-2 h-2 rounded-full bg-cta flex-shrink-0" aria-hidden="true"></span>
              Languages
            </li>
            <li class="flex items-center gap-3 text-[15px] md:text-body text-primary font-normal">
              <span class="w-2 h-2 rounded-full bg-cta flex-shrink-0" aria-hidden="true"></span>
              Contact person
            </li>
            <li class="flex items-center gap-3 text-[15px] md:text-body text-primary font-normal">
              <span class="w-2 h-2 rounded-full bg-cta flex-shrink-0" aria-hidden="true"></span>
              Related cases or events
            </li>
          </ul>

          <p class="text-[13px] md:text-sm text-secondary italic font-normal leading-relaxed mt-4">
            The profile helps users understand who you are, what you offer and how to contact you.
          </p>

        </div>

      </div>

    </div>
  </section>
</template>
