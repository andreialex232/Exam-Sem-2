<script setup>

</script>

<template>
  <section class="w-full bg-primary pb-[90px]">
    <div class="grid max-w-[1280px] grid-cols-12 gap-8 mx-auto px-4">

      <div class="col-span-12 mt-[90px] flex flex-col justify-start w-full mb-[40px]">
        <div class="flex flex-col md:flex-row justify-between md:items-center w-full gap-4">
          <h2 class="text-h3 md:text-4xl text-white font-bold">
            News and knowledge from the border region
          </h2>
          <div class="hidden md:block text-white font-medium text-sm">
            <RouterLink to="/Cases" class="hover:underline">Go to Cases & Insights →</RouterLink>
          </div>
        </div>

        <p class="text-base text-support font-normal mt-4 max-w-[700px] md:hidden">
          Stories, interviews and experiences from the Danish-German border region.
        </p>
      </div>

      <div class="col-span-12 md:col-span-6 bg-tertiary border border-secondary md:border-0 flex flex-col overflow-hidden group pb-6 md:pb-0 rounded-sm">
        <div class="hidden md:block relative w-full h-[260px]">
          <img
            src="https://picsum.photos/600/260"
            alt="Business meeting"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="bg-tertiary p-6 md:p-8 flex flex-col h-auto md:h-[170px]">
          <span class="absolute top-4 left-4 bg-cta text-white text-[10px] font-semibold uppercase tracking-[1.5px] px-2.5 py-1.5 z-10 hidden md:block">
            Interview
          </span>
          <span class="inline-block md:hidden self-start bg-cta text-white text-[11px] font-bold uppercase tracking-[1.5px] px-3 py-1 rounded-full mb-4">
            Interview
          </span>
          <h3 class="text-h4 md:text-[26px] text-white font-bold leading-snug mb-2 md:mt-5">
            How companies cooperate across <br class="hidden md:block">the border
          </h3>
          <p class="text-base text-support font-normal mt-2 md:mt-5 mb-4 md:mb-0">
            Example Partner · EN
          </p>
          <div class="text-cta font-semibold text-[11px] md:text-sm">
            <RouterLink to="/Cases" class="hover:underline">Explore case →</RouterLink>
          </div>
        </div>
      </div>

      <div class="col-span-12 md:col-span-6 flex flex-col gap-6 md:gap-8">

        <div class="bg-tertiary border border-secondary md:border-0 p-6 md:p-8 flex flex-col justify-between h-auto md:h-[234px] rounded-sm">
          <div>
            <span class="inline-block md:hidden bg-secondary text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Case
            </span>
            <span class="text-cta text-[10px] font-semibold uppercase tracking-wider hidden md:block mb-3">
              Case
            </span>
            <h3 class="text-h4 md:text-[26px] text-white font-bold leading-snug md:mt-[14px] mb-2">
              From local contact to cross-border cooperation
            </h3>
            <p class="text-base text-support font-normal mt-2 md:mt-5 mb-4 md:mb-0">
              Example Company · DA
            </p>
            <div class="text-cta font-semibold text-[11px] md:text-sm">
              <RouterLink to="/Cases" class="hover:underline">Read case →</RouterLink>
            </div>
          </div>
        </div>

        <div class="bg-tertiary md:bg-secondary border border-secondary md:border-0 p-6 md:p-8 flex flex-col justify-between h-auto md:h-[234px] rounded-sm">
          <div>
            <span class="inline-block md:hidden bg-[#4B5E78] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Insight
            </span>
            <span class="text-support text-[10px] font-semibold uppercase tracking-wider hidden md:block mb-3">
              Insight
            </span>
            <h3 class="text-h4 md:text-[26px] text-white font-bold leading-snug md:mt-[14px] mb-2">
              What advisors can help with
            </h3>
            <p class="text-base text-support font-normal mt-2 md:mt-5 mb-4 md:mb-0">
              Example Advisor · DE
            </p>
            <div class="text-white font-semibold text-[11px] md:text-sm mt-4 md:mt-10">
              <RouterLink to="/Cases" class="hover:underline">View insight →</RouterLink>
            </div>
          </div>
        </div>

      </div>

      <div class="col-span-12 block md:hidden mt-4 w-full">
        <RouterLink
          to="/Cases"
          class="block w-full text-center border-[1.6px] border-white text-white font-semibold text-[15px] py-4 rounded-sm hover:bg-white hover:text-primary transition-colors"
        >
          Go to Cases & Insights →
        </RouterLink>
      </div>

    </div>
  </section>
</template>
