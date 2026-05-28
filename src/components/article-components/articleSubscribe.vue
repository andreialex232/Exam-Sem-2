
<script setup>
</script>

<template>
  <section class="w-full bg-page-bg py-12 md:py-[80px] px-6 lg:px-0">
    <div class="max-w-[1280px] mx-auto">

      <div class="flex flex-col md:grid md:grid-cols-12 md:items-start md:gap-4">

        <div class="col-span-12 md:col-span-4 flex flex-col justify-center">
          <h2 class="text-3xl md:text-h2 text-primary font-bold leading-tight">
            Get cross-border updates
          </h2>
        </div>

        <div class="hidden md:flex col-span-1 justify-center">
          <div class="h-[100px] w-[1px] bg-grey/30"></div>
        </div>

        <div class="col-span-12 md:col-span-3 flex flex-col justify-center mt-4 md:mt-0">
          <p class="text-[15px] md:text-base text-support font-normal leading-relaxed">
            Selected stories, events and network updates from the Danish–German border region.
          </p>
        </div>

        <div class="hidden md:flex col-span-1 justify-center">
          <div class="h-[100px] w-[1px] bg-grey/30"></div>
        </div>

        <div class="col-span-12 md:col-span-3 flex flex-col justify-center mt-6 md:mt-0 w-full max-w-sm md:max-w-none mx-auto">
          <form @submit.prevent class="flex flex-col gap-4 w-full">

            <input
              type="email"
              placeholder="Your email"
              class="w-full bg-page-bg text-sm text-primary placeholder-support/70 px-4 py-3.5 rounded-[4px] border border-grey focus:outline-none focus:border-cta transition-colors"
            />

            <button
              type="submit"
              class="w-full bg-cta text-white text-[15px] font-semibold py-3.5 rounded-[4px] hover:bg-[#e05e00] transition-colors cursor-pointer text-center"
            >
              Subscribe
            </button>

          </form>

          <span class="text-[13px] text-support font-normal text-center md:text-left mt-3">
            Unsubscribe anytime.
          </span>
        </div>

      </div>

    </div>
  </section>
</template>
