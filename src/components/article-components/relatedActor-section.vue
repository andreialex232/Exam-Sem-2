<script setup>

</script>

<template>
  <section class="w-full bg-page-bg border-t border-b border-grey py-12 md:py-[70px]">
    <div class="max-w-[1280px] mx-auto">

      <div class="mb-6 md:mb-8">
        <span class="text-small-title text-support font-bold uppercase tracking-wider block mb-3">
          RELATED NETWORK ACTOR
        </span>
        <h2 class="text-h2 text-primary font-bold leading-tight">
          Related network actor
        </h2>
      </div>

      <div class="max-w-[850px] w-full bg-white border border-grey rounded-sm p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 md:gap-6 shadow-sm">

        <div class="w-20 h-20 bg-page-bg rounded-[4px] border border-grey flex items-center justify-center flex-shrink-0 select-none">
          <span class="text-[12px] text-support font-semibold uppercase tracking-wider">
            Logo
          </span>
        </div>

        <div class="flex flex-col gap-2 flex-grow">

          <div class="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-body text-support font-normal">
            <span class="bg-support text-white text-small-title px-3 py-1 rounded-[20px] uppercase font-bold tracking-wider inline-block">
              COMPANY
            </span>
            <span>·</span>
            <span>Denmark</span>
            <span>·</span>
            <span>International workforce / onboarding</span>
          </div>

          <h4 class="text-h4 text-primary font-bold leading-snug">
            Example Company
          </h4>

          <p class="text-body text-secondary font-normal leading-relaxed max-w-[550px]">
            This organisation shares practical experience from working with international employees.
          </p>

        </div>

        <div class="w-full sm:w-auto sm:ml-auto flex-shrink-0">
          <RouterLink
            to="#"
            class="cursor-pointer block text-center border border-primary text-primary text-[15px] font-semibold px-6 py-3 rounded-[4px] bg-transparent hover:bg-primary hover:text-white transition-all w-full sm:w-auto whitespace-nowrap"
          >
            View profile
          </RouterLink>
        </div>

      </div>

    </div>
  </section>
</template>
