<script template>

</script>

<template>
  <section class="w-full bg-primary border-t border-b border-grey py-12 md:py-[90px]">
    <div class="max-w-[1280px] mx-auto">

      <div class="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 items-center lg:items-stretch">

        <div class="w-full lg:col-span-4 pb-6 lg:pb-0 lg:pr-8 border-b lg:border-b-0 lg:border-r border-grey">
          <h2 class="text-h3 md:text-h2 text-white font-bold leading-tight">
            Stay updated
          </h2>
        </div>

        <div class="w-full lg:col-span-4 py-6 lg:py-0 lg:px-8 border-b lg:border-b-0 lg:border-r border-grey">
          <p class="text-[15px] md:text-body text-support font-normal leading-relaxed">
            Get updates about new cases, network actors, events and practical cross-border insights.
          </p>
        </div>

        <div class="w-full lg:col-span-4 pt-6 lg:pt-0 lg:pl-8 flex flex-col gap-3 justify-center">
          <form @submit.prevent class="flex flex-col gap-3 w-full" novalidate>

            <input
              type="email"
              placeholder="Your email"
              class="w-full bg-[#f4f4f4] border border-grey rounded-[4px] p-3.5 text-sm text-support placeholder-support/60 focus:outline-none focus:border-white transition-colors"
            />

            <button
              type="submit"
              class="cursor-pointer w-full bg-cta text-white font-semibold text-[15px] p-3.5 rounded-[4px] hover:bg-[#e05e00] transition-colors text-center block"
            >
              Subscribe
            </button>

          </form>

          <p class="text-[13px] text-support font-normal leading-normal text-right">
            Unsubscribe anytime.
          </p>
        </div>

      </div>

    </div>
  </section>
</template>
