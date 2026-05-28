<script setup>

</script>

<template>
  <section id="shorts" class="w-full bg-page-bg border-t border-b border-grey py-12 md:py-[90px]">
    <div class="max-w-[1280px] mx-auto">

      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-14">
        <div class="max-w-[600px]">
          <span class="text-small-title text-support font-bold uppercase tracking-wider block mb-3">
            SHORT VIDEOS
          </span>
          <h2 class="text-h2 text-primary font-bold leading-tight mb-4">
            Short insights
          </h2>
          <p class="text-body text-secondary font-normal leading-relaxed">
            Quick video highlights from interviews, events and partner stories.
          </p>
        </div>

        <RouterLink
          to="#"
          class="cursor-pointer text-body text-cta underline hover:text-[#e05e00] transition-colors whitespace-nowrap self-start sm:self-auto"
        >
          See all shorts &rarr;
        </RouterLink>
      </div>

      <div class="grid grid-cols-12 gap-6 md:gap-8 items-stretch">

        <div class="col-span-12 sm:col-span-6 lg:col-span-3 bg-white border border-grey rounded-sm overflow-hidden flex flex-col justify-between">
          <div class="relative bg-primary aspect-[4/3] w-full p-4 flex flex-col justify-between items-center group">

            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <button class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/40 group-hover:scale-110 group-hover:bg-white/30 transition-all cursor-pointer pointer-events-auto">
                <svg class="w-3.5 h-3.5 text-white transform translate-x-[1px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>

            <div class="mt-auto w-full flex justify-between items-center z-10">
              <span class="bg-secondary text-white text-small-title px-2 py-1 rounded-[2px] uppercase font-bold tracking-wider">
                CHALLENGE
              </span>
              <span class="bg-primary border border-white/20 text-white text-body px-2 py-0.5 rounded-[2px] font-normal">
                2 min
              </span>
            </div>
          </div>

          <div class="p-5 flex flex-col justify-between flex-grow gap-5">
            <div>
              <h3 class="text-h4 text-primary font-bold leading-snug">
                One cross-border challenge
              </h3>
            </div>
            <div class="border-t border-grey pt-4">
              <RouterLink
                to="#"
                class="cursor-pointer block text-center border border-primary text-primary text-[15px] font-semibold p-3 rounded-[4px] bg-transparent hover:bg-primary hover:text-white transition-colors w-full"
              >
                Watch short
              </RouterLink>
            </div>
          </div>
        </div>

        <div class="col-span-12 sm:col-span-6 lg:col-span-3 bg-white border border-grey rounded-sm overflow-hidden flex flex-col justify-between">
          <div class="relative bg-primary aspect-[4/3] w-full p-4 flex flex-col justify-between items-center group">
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <button class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/40 group-hover:scale-110 group-hover:bg-white/30 transition-all cursor-pointer pointer-events-auto">
                <svg class="w-3.5 h-3.5 text-white transform translate-x-[1px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
            <div class="mt-auto w-full flex justify-between items-center z-10">
              <span class="bg-support text-white text-small-title px-2 py-1 rounded-[2px] uppercase font-bold tracking-wider">
                NETWORK
              </span>
              <span class="bg-primary border border-white/20 text-white text-body px-2 py-0.5 rounded-[2px] font-normal">
                3 min
              </span>
            </div>
          </div>

          <div class="p-5 flex flex-col justify-between flex-grow gap-5">
            <div>
              <h3 class="text-h4 text-primary font-bold leading-snug">
                Why companies join the network
              </h3>
            </div>
            <div class="border-t border-grey pt-4">
              <RouterLink
                to="#"
                class="cursor-pointer block text-center border border-primary text-primary text-[15px] font-semibold p-3 rounded-[4px] bg-transparent hover:bg-primary hover:text-white transition-colors w-full"
              >
                Watch short
              </RouterLink>
            </div>
          </div>
        </div>

        <div class="col-span-12 sm:col-span-6 lg:col-span-3 bg-white border border-grey rounded-sm overflow-hidden flex flex-col justify-between">
          <div class="relative bg-primary aspect-[4/3] w-full p-4 flex flex-col justify-between items-center group">
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <button class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/40 group-hover:scale-110 group-hover:bg-white/30 transition-all cursor-pointer pointer-events-auto">
                <svg class="w-3.5 h-3.5 text-white transform translate-x-[1px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
            <div class="mt-auto w-full flex justify-between items-center z-10">
              <span class="bg-cta text-white text-small-title px-2 py-1 rounded-[2px] uppercase font-bold tracking-wider">
                ADVISORS
              </span>
              <span class="bg-primary border border-white/20 text-white text-body px-2 py-0.5 rounded-[2px] font-normal">
                2 min
              </span>
            </div>
          </div>

          <div class="p-5 flex flex-col justify-between flex-grow gap-5">
            <div>
              <h3 class="text-h4 text-primary font-bold leading-snug">
                What advisors can explain
              </h3>
            </div>
            <div class="border-t border-grey pt-4">
              <RouterLink
                to="#"
                class="cursor-pointer block text-center border border-primary text-primary text-[15px] font-semibold p-3 rounded-[4px] bg-transparent hover:bg-primary hover:text-white transition-colors w-full"
              >
                Watch short
              </RouterLink>
            </div>
          </div>
        </div>

        <div class="col-span-12 sm:col-span-6 lg:col-span-3 bg-white border border-grey rounded-sm overflow-hidden flex flex-col justify-between">
          <div class="relative bg-primary aspect-[4/3] w-full p-4 flex flex-col justify-between items-center group">
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <button class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/40 group-hover:scale-110 group-hover:bg-white/30 transition-all cursor-pointer pointer-events-auto">
                <svg class="w-3.5 h-3.5 text-white transform translate-x-[1px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
            <div class="mt-auto w-full flex justify-between items-center z-10">
              <span class="bg-primary text-white text-small-title px-2 py-1 rounded-[2px] uppercase font-bold tracking-wider">
                EVENTS
              </span>
              <span class="bg-primary border border-white/20 text-white text-body px-2 py-0.5 rounded-[2px] font-normal">
                4 min
              </span>
            </div>
          </div>

          <div class="p-5 flex flex-col justify-between flex-grow gap-5">
            <div>
              <h3 class="text-h4 text-primary font-bold leading-snug">
                One lesson from an event
              </h3>
            </div>
            <div class="border-t border-grey pt-4">
              <RouterLink
                to="#"
                class="cursor-pointer block text-center border border-primary text-primary text-[15px] font-semibold p-3 rounded-[4px] bg-transparent hover:bg-primary hover:text-white transition-colors w-full"
              >
                Watch short
              </RouterLink>
            </div>
          </div>
        </div>

      </div>
      <div class=" mt-8 flex justify-center md:hidden">
        <RouterLink
            to="#"
            class="cursor-pointer text-body text-cta underline hover:text-[#e05e00] transition-colors whitespace-nowrap self-start sm:self-auto"
          >
            See all shorts &rarr;
          </RouterLink>
      </div>
    </div>
  </section>
</template>
