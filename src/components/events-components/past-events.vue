<script setup>

</script>

<template>
  <section class="w-full bg-page-bg py-12 md:py-[90px]">
    <div class="max-w-[1280px] mx-auto px-4">

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

        <div class="col-span-12 sm:col-span-1 md:col-span-4 bg-white border border-grey border-t-[3px] rounded-sm flex flex-col justify-between overflow-hidden">
          <div>
            <div class="w-full h-[200px] bg-grey">
              <img src="https://picsum.photos/355/200" alt="Event" class="w-full h-full object-cover" />
            </div>

            <div class="p-6 md:p-8 flex flex-col items-start">
              <span class="bg-secondary text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Event Recap
              </span>
              <h3 class="text-lg md:text-h4 font-semibold text-primary leading-snug mb-3">
                3 takeaways from a cross-border networking event
              </h3>
              <p class="text-[15px] md:text-base text-secondary font-normal leading-relaxed mb-4">
                A short summary of what companies and partners discussed.
              </p>
              <span class="text-xs text-support font-normal inline-flex items-center gap-1.5">
                ✓ Related case available
              </span>
            </div>
          </div>

          <div class="px-6 pb-6 md:p-8 md:pt-0">
            <div class="w-full h-[1px] bg-grey mb-6"></div>
            <RouterLink
              to="#"
              class="block w-full md:w-auto text-center md:text-left border-[1.6px] border-primary md:border-0 rounded-[4px] md:rounded-none py-3.5 md:py-0 text-[15px] font-semibold text-primary hover:bg-primary hover:text-white md:hover:bg-transparent md:hover:text-primary md:hover:underline transition-colors"
            >
              View recap &rarr;
            </RouterLink>
          </div>
        </div>

        <div class="col-span-12 sm:col-span-1 md:col-span-4 bg-white border border-grey border-t-[3px] rounded-sm flex flex-col justify-between overflow-hidden">
          <div>
            <div class="w-full h-[200px] bg-grey">
              <img src="https://picsum.photos/355/200" alt="Event" class="w-full h-full object-cover" />
            </div>

            <div class="p-6 md:p-8 flex flex-col items-start">
              <span class="bg-secondary text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Photo Recap
              </span>
              <h3 class="text-lg md:text-h4 font-semibold text-primary leading-snug mb-3">
                Business DE-DK at regional fair
              </h3>
              <p class="text-[15px] md:text-base text-secondary font-normal leading-relaxed mb-4">
                Highlights from a fair where companies met advisors and partner organisations.
              </p>
              <span class="text-xs text-support font-normal inline-flex items-center gap-1.5">
                📷 Photo gallery available
              </span>
            </div>
          </div>

          <div class="px-6 pb-6 md:p-8 md:pt-0">
            <div class="w-full h-[1px] bg-grey mb-6"></div>
            <RouterLink
              to="#"
              class="block w-full md:w-auto text-center md:text-left border-[1.6px] border-primary md:border-0 rounded-[4px] md:rounded-none py-3.5 md:py-0 text-[15px] font-semibold text-primary hover:bg-primary hover:text-white md:hover:bg-transparent md:hover:text-primary md:hover:underline transition-colors"
            >
              View photos &rarr;
            </RouterLink>
          </div>
        </div>

        <div class="col-span-12 sm:col-span-2 sm:mx-auto sm:max-w-[50%] md:col-span-4 md:mx-0 md:max-w-none bg-white border border-grey border-t-[3px] rounded-sm flex flex-col justify-between overflow-hidden">
          <div>
            <div class="w-full h-[200px] bg-grey">
              <img src="https://picsum.photos/355/200" alt="Event" class="w-full h-full object-cover" />
            </div>

            <div class="p-6 md:p-8 flex flex-col items-start">
              <span class="bg-secondary text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Event Recap
              </span>
              <h3 class="text-lg md:text-h4 font-semibold text-primary leading-snug mb-3">
                Workshop insights: onboarding international employees
              </h3>
              <p class="text-[15px] md:text-base text-secondary font-normal leading-relaxed mb-4">
                Key points from a workshop about workforce attraction and integration.
              </p>
              <span class="text-xs text-support font-normal inline-flex items-center gap-1.5">
                ▶ Short video available
              </span>
            </div>
          </div>

          <div class="px-6 pb-6 md:p-8 md:pt-0">
            <div class="w-full h-[1px] bg-grey mb-6"></div>
            <RouterLink
              to="#"
              class="block w-full md:w-auto text-center md:text-left border-[1.6px] border-primary md:border-0 rounded-[4px] md:rounded-none py-3.5 md:py-0 text-[15px] font-semibold text-primary hover:bg-primary hover:text-white md:hover:bg-transparent md:hover:text-primary md:hover:underline transition-colors"
            >
              View recap &rarr;
            </RouterLink>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
