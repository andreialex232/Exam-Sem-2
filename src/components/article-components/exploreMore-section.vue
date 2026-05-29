<script setup>

</script>

<template>
  <section class="w-full bg-primary border-t border-b border-grey py-14 md:py-[80px] text-center px-6 lg:px-0">
    <div class="max-w-[1280px] mx-auto flex flex-col items-center gap-6 md:gap-8">

      <div class="flex flex-col gap-3 max-w-[650px] w-full">
        <h2 class="text-h2 text-white font-bold leading-tight">
          Explore more from the network
        </h2>
        <p class="text-body text-support font-normal leading-relaxed">
          Find more cases, interviews and organisations connected to cross-border business cooperation.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto pt-4">

        <div class="flex flex-row items-center gap-3 w-full sm:w-auto">

          <RouterLink
            to="/cases"
            class="cursor-pointer block text-center bg-cta text-white text-base font-semibold px-4 py-3.5 rounded-[4px] hover:bg-cta/90 transition-colors flex-1 sm:flex-none sm:px-6 whitespace-nowrap"
          >
            More cases
          </RouterLink>

          <RouterLink
            to="/events"
            class="cursor-pointer block text-center bg-transparent border border-white text-white text-base font-semibold px-4 py-3.5 rounded-[4px] hover:bg-white/10 transition-colors flex-1 sm:flex-none sm:px-6 whitespace-nowrap"
          >
            View events
          </RouterLink>

        </div>

        <RouterLink
          to="/network"
          class="cursor-pointer text-body text-white font-semibold hover:underline transition-all py-2 sm:py-0 whitespace-nowrap"
        >
          Go to Network <span aria-hidden="true">&#8594;</span>
        </RouterLink>

      </div>

    </div>
  </section>
</template>
