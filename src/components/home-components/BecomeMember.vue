<script setup>

</script>

<template>
  <section class="w-full bg-primary py-12 md:py-[90px]">
    <div class="max-w-[1280px] mx-auto px-4 grid grid-cols-12 gap-8">

      <div class="col-span-12 md:col-start-1 md:col-span-5 flex flex-col text-white">
        <span class="text-[11px] font-bold uppercase tracking-widest text-support mb-4">
          Become a member
        </span>
        <h2 class="text-h3 md:text-h2 font-bold leading-tight mb-6">
          Join the cross-border<br class="hidden md:block">business network
        </h2>
        <p class="text-[16px] text-support font-normal leading-relaxed max-w-[440px] mb-8 md:mb-0">
          Become visible, find relevant contacts, join events and share your experience through the platform.
        </p>

        <ul class="flex md:hidden flex-col gap-5 text-[16px] font-normal mb-10">
          <li class="flex items-start gap-3">
            <span class="w-2 h-2 rounded-full bg-cta mt-2 flex-shrink-0"></span>
            <span>Be visible in the border region</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-2 h-2 rounded-full bg-cta mt-2 flex-shrink-0"></span>
            <span>Connect with companies and advisors</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-2 h-2 rounded-full bg-cta mt-2 flex-shrink-0"></span>
            <span>Join events and knowledge sharing</span>
          </li>
        </ul>

        <div class="flex md:hidden flex-col gap-4 w-full">
          <button class="w-full cursor-pointer bg-cta text-white font-normal text-[15px] py-4 rounded-sm hover:bg-[#e05e00] transition-colors text-center">
            Become a member
          </button>
          <button class="w-full cursor-pointer border-[1.6px] border-white text-white font-normal text-[15px] py-4 rounded-sm hover:bg-white hover:text-primary transition-colors text-center">
            Talk to us first
          </button>
        </div>

        <div class="hidden md:flex flex-row gap-4 items-center mt-[65px]">
          <button class="cursor-pointer bg-cta text-white font-semibold text-[15px] px-6 py-3.5 rounded-sm hover:bg-[#e05e00] transition-colors">
            Become a member
          </button>
          <button class="cursor-pointer border-[1.6px] border-white text-white font-semibold text-[15px] px-6 py-3.5 rounded-sm hover:bg-white hover:text-primary transition-colors">
            Talk to us first
          </button>
        </div>
      </div>

      <div class="hidden md:block col-span-12 md:col-start-8 md:col-span-5 bg-tertiary border border-support p-10 rounded-sm text-white self-start">
        <span class="text-[14px] font-semibold uppercase tracking-widest text-support block mb-4">
          What you get
        </span>

        <div class="w-full h-[1px] bg-support mb-6"></div>

        <ul class="flex flex-col gap-5 text-[16px] font-normal">
          <li class="flex items-start gap-3">
            <span class="w-2 h-2 rounded-full bg-cta mt-2 flex-shrink-0"></span>
            <span>Be visible in the border region</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-2 h-2 rounded-full bg-cta mt-2 flex-shrink-0"></span>
            <span>Connect with companies and advisors</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-2 h-2 rounded-full bg-cta mt-2 flex-shrink-0"></span>
            <span>Join events and knowledge sharing</span>
          </li>
        </ul>
      </div>

    </div>
  </section>
</template>
