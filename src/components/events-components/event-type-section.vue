<script setup>

</script>

<template>
  <section class="w-full bg-page-bg py-12 md:py-[90px]">
    <div class="max-w-[1280px] mx-auto px-4">

      <div class="mb-10 md:mb-16">
        <span class="text-[11px] font-bold uppercase tracking-widest text-support block mb-3">
          Event types
        </span>
        <h2 class="text-3xl md:text-h2 text-primary font-bold">
          What kind of events <br class="hidden md:block">can you find?
        </h2>
      </div>

      <div class="flex flex-col gap-6 sm:grid sm:grid-cols-2 md:grid-cols-12 md:gap-8 items-stretch">

        <div class="col-span-12 sm:col-span-1 md:col-span-3 bg-white border border-grey border-t-3 p-6 md:p-8 flex flex-col justify-between rounded-sm">
          <div>
            <div class="flex flex-row items-center gap-4 mb-4 md:flex-col md:items-start md:gap-0 md:mb-0">
              <div class="w-12 h-12 rounded-full bg-cta/12 flex items-center justify-center md:mb-6 flex-shrink-0">
                <img src="@/assets/svg/workshop.svg" alt="Workshops" class="w-5 h-5" />
              </div>
              <h3 class="text-lg md:text-h3 text-primary font-normal md:font-bold md:mb-4">
                Workshops
              </h3>
            </div>
            <p class="text-[15px] md:text-base text-secondary font-normal leading-[1.75]">
              Practical sessions about recruitment, onboarding, cooperation and regional business topics.
            </p>
          </div>
          <div>
            <div class="w-[80%] h-[1px] bg-grey my-6"></div>
            <RouterLink to="#" class="text-sm md:text-base font-bold text-cta hover:underline inline-flex items-center gap-1">
              Filter by this &rarr;
            </RouterLink>
          </div>
        </div>

        <div class="col-span-12 sm:col-span-1 md:col-span-3 bg-white border border-grey border-t-3 p-6 md:p-8 flex flex-col justify-between rounded-sm">
          <div>
            <div class="flex flex-row items-center gap-4 mb-4 md:flex-col md:items-start md:gap-0 md:mb-0">
              <div class="w-12 h-12 rounded-full bg-secondary/12 flex items-center justify-center md:mb-6 flex-shrink-0">
                <img src="@/assets/svg/network.svg" alt="Networking" class="w-5 h-5" />
              </div>
              <h3 class="text-lg md:text-h3 text-primary font-normal md:font-bold md:mb-4">
                Networking meetings
              </h3>
            </div>
            <p class="text-[15px] md:text-base text-secondary font-normal leading-[1.75]">
              Meet companies, advisors and partner organisations across the border region.
            </p>
          </div>
          <div>
            <div class="w-[80%] h-[1px] bg-grey my-6"></div>
            <RouterLink to="#" class="text-sm md:text-base font-bold text-cta hover:underline inline-flex items-center gap-1">
              Filter by this &rarr;
            </RouterLink>
          </div>
        </div>

        <div class="col-span-12 sm:col-span-1 md:col-span-3 bg-white border border-grey border-t-3 p-6 md:p-8 flex flex-col justify-between rounded-sm">
          <div>
            <div class="flex flex-row items-center gap-4 mb-4 md:flex-col md:items-start md:gap-0 md:mb-0">
              <div class="w-12 h-12 rounded-full bg-support/12 flex items-center justify-center md:mb-6 flex-shrink-0">
                <img src="@/assets/svg/business.svg" alt="Business fairs" class="w-5 h-5" />
              </div>
              <h3 class="text-lg md:text-h3 text-primary font-normal md:font-bold md:mb-4">
                Business fairs
              </h3>
            </div>
            <p class="text-[15px] md:text-base text-secondary font-normal leading-[1.75]">
              Find Business DE-DK and network partners at regional fairs and professional events.
            </p>
          </div>
          <div>
            <div class="w-[80%] h-[1px] bg-grey my-6"></div>
            <RouterLink to="#" class="text-sm md:text-base font-bold text-cta hover:underline inline-flex items-center gap-1">
              Filter by this &rarr;
            </RouterLink>
          </div>
        </div>

        <div class="col-span-12 sm:col-span-1 md:col-span-3 bg-white border border-grey border-t-3 p-6 md:p-8 flex flex-col justify-between rounded-sm">
          <div>
            <div class="flex flex-row items-center gap-4 mb-4 md:flex-col md:items-start md:gap-0 md:mb-0">
              <div class="w-12 h-12 rounded-full bg-[#1A283D]/12 flex items-center justify-center md:mb-6 flex-shrink-0">
                <img src="@/assets/svg/webinars.svg" alt="Webinars" class="w-5 h-5" />
              </div>
              <h3 class="text-lg md:text-h3 text-primary font-normal md:font-bold md:mb-4">
                Webinars
              </h3>
            </div>
            <p class="text-[15px] md:text-base text-secondary font-normal leading-[1.75]">
              Join online sessions about cross-border topics, opportunities and practical knowledge.
            </p>
          </div>
          <div>
            <div class="w-[80%] h-[1px] bg-grey my-6"></div>
            <RouterLink to="#" class="text-sm md:text-base font-bold text-cta hover:underline inline-flex items-center gap-1">
              Filter by this &rarr;
            </RouterLink>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
