<script setup>
</script>

<template>
  <section class="w-full bg-card-surface py-12 md:py-[90px] px-6 lg:px-0">
    <div class="max-w-[1280px] mx-auto">

      <div class="mb-10 md:mb-16 max-w-[650px]">
        <span class="text-[11px] font-bold uppercase tracking-widest text-support block mb-3">
          Connected to the network
        </span>
        <h2 class="text-3xl md:text-h2 text-primary font-bold leading-tight mb-4">
          Find the people behind the stories
        </h2>
        <p class="text-[15px] md:text-text-body text-secondary font-normal leading-relaxed">
          Each case or interview is connected to organisations, advisors or partners in the <br>Business DE-DK network.
        </p>
      </div>

      <div class="flex flex-col gap-6 md:grid md:grid-cols-12 md:gap-8 items-stretch">

        <div class="col-span-12 md:col-span-6 bg-white border border-cta border-l-[3px] p-6 md:p-8 flex flex-col justify-between rounded-sm">
          <div class="mb-6 md:mb-8">
            <h3 class="text-lg md:text-h3 text-primary font-semibold md:font-bold mb-3">
              Explore the network
            </h3>
            <p class="text-[15px] md:text-body text-secondary font-normal leading-relaxed">
              Find companies, advisors and partners mentioned in cases and interviews.
            </p>
          </div>

          <div>
            <RouterLink
              to="/network"
              class="block md:inline-block w-full md:w-auto text-center bg-cta text-white text-[15px] font-semibold px-6 py-3.5 rounded-[4px] hover:bg-[#e05e00] transition-colors cursor-pointer"
            >
              Go to Network &rarr;
            </RouterLink>
          </div>
        </div>

        <div class="col-span-12 md:col-span-6 bg-white border border-secondary border-l-[3px] p-6 md:p-8 flex flex-col justify-between rounded-sm">
          <div class="mb-6 md:mb-8">
            <h3 class="text-lg md:text-h3 text-primary font-semibold md:font-bold mb-3">
              Share your experience
            </h3>
            <p class="text-[15px] md:text-body text-secondary font-normal leading-relaxed">
              Companies and partners can contribute stories, cases or event insights.
            </p>
          </div>

          <div>
            <RouterLink
              to="contacts/#contact-section"
              class="block md:inline-block w-full md:w-auto text-center border-[1.6px] border-primary bg-transparent text-primary text-[15px] font-semibold px-6 py-3.5 rounded-[4px] hover:bg-primary hover:text-white transition-colors cursor-pointer"
            >
              Talk to Business DE-DK &rarr;
            </RouterLink>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
