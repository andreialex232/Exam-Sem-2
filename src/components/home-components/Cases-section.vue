<script setup>

</script>

<template>
  <section class="w-full bg-primary pb-[90px]">
    <div class="grid max-w-[1280px] grid-cols-12 gap-8 mx-auto px-4">

      <div class="col-span-12 mt-[90px] flex justify-between items-center w-full mb-[40px]">
        <h2 class="text-4xl text-white font-bold">
          News and knowledge from the border region
        </h2>
        <div class="text-white font-medium text-sm">
          <RouterLink to="/Cases" class="hover:underline">Go to Cases & Insights →</RouterLink>
        </div>
      </div>

      <div class="col-span-6 bg-tertiary flex flex-col justify-between overflow-hidden group">
        <div class="relative w-full h-[260px]">
          <span class="absolute top-4 left-4 bg-cta text-white text-[10px] font-semibold uppercase tracking-[1.5px] px-2.5 py-1.5 z-10">
            Interview
          </span>
          <img
            src="https://picsum.photos/600/260"
            alt="Business meeting"
            class="w-full h-full object-cover"
          />
          <div class="bg-tertiary p-8 flex flex-col h-[170px]">
            <h3 class="text-[26px] text-white font-bold leading-snug mt-[32px] mb-2">
              How companies cooperate across <br>the border
            </h3>
            <p class="text-base text-support font-normal mt-5">
              Example Partner · EN
            </p>
            <div class="text-cta font-semibold text-sm">
              <RouterLink to="/Cases" class="hover:underline">Explore case →</RouterLink>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-6 flex flex-col gap-8">

        <div class="bg-tertiary p-8 flex flex-col justify-between h-[234px]">
          <div>
            <span class="text-cta text-[10px] font-semibold uppercase tracking-wider block mb-3">
              Case
            </span>
            <h3 class="text-[26px] text-white font-bold leading-snug mt-[14px] mb-2">
              From local contact to cross-border cooperation
            </h3>
            <p class="text-base text-support font-normal mt-5">
              Example Company · DA
            </p>
            <div class="text-cta font-semibold text-sm">
              <RouterLink to="/Cases" class="hover:underline">Read case →</RouterLink>
            </div>
          </div>
        </div>

        <div class="bg-secondary p-8 flex flex-col justify-between h-[234px]">
          <div>
            <span class="text-support text-[10px] font-semibold uppercase tracking-wider block mb-3">
              Insight
            </span>
            <h3 class="text-[26px] text-white font-bold leading-snug mt-[14px] mb-2">
              What advisors can help with
            </h3>
            <p class="text-base text-support font-normal mt-5">
              Example Advisor · DE
            </p>
            <div class="text-white font-semibold text-sm mt-10  ">
              <RouterLink to="/Cases" class="hover:underline">View insight →</RouterLink>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
