<script setup>

</script>

<template>
  <section class="w-full py-12 md:py-[90px] bg-page-bg border-t border-b border-grey px-6 lg:px-0">
    <div class="max-w-[1280px] mx-auto">

      <div class="mb-10 md:mb-14 max-w-[650px]">
        <h2 class="text-3xl md:text-h2 text-primary font-bold leading-tight mb-4">
          Not ready to apply?
        </h2>
        <p class="text-body text-secondary font-normal leading-relaxed">
          You can contact Business DE-DK first if you have questions about membership, events, advisors or media stories.
        </p>
      </div>

      <div class="grid grid-cols-12 gap-6 md:gap-8 items-stretch">

        <div class="col-span-12 sm:col-span-6 lg:col-span-3 bg-white border border-secondary border-l-[3px] border-l-secondary rounded-[4px] p-6 flex flex-col justify-between">
          <div class="mb-6">
            <h3 class="text-h4 text-primary font-bold mb-3">
              Membership questions
            </h3>
            <p class="text-body text-secondary font-normal leading-relaxed">
              Ask about the process of creating an organisation profile.
            </p>
          </div>
          <div>
            <RouterLink
              to="/contacts#contact-section"
              class="cursor-pointer block text-center border border-primary text-primary text-[14px] font-semibold px-4 py-3 rounded-[4px] bg-transparent hover:bg-primary hover:text-white transition-colors w-full"
            >
              Contact membership team
            </RouterLink>
          </div>
        </div>

        <div class="col-span-12 sm:col-span-6 lg:col-span-3 bg-white border border-cta border-l-[3px] border-l-cta rounded-[4px] p-6 flex flex-col justify-between">
          <div class="mb-6">
            <h3 class="text-h4 text-primary font-bold mb-3">
              Find an advisor
            </h3>
            <p class="text-body text-secondary font-normal leading-relaxed">
              Find the right advisor or partner organisation.
            </p>
          </div>
          <div>
            <RouterLink
              to="/network"
              class="cursor-pointer block text-center border border-primary text-primary text-[14px] font-semibold px-4 py-3 rounded-[4px] bg-transparent hover:bg-primary hover:text-white transition-colors w-full"
            >
              Go to Network
            </RouterLink>
          </div>
        </div>

        <div class="col-span-12 sm:col-span-6 lg:col-span-3 bg-white border border-support border-l-[3px] border-l-support rounded-[4px] p-6 flex flex-col justify-between">
          <div class="mb-6">
            <h3 class="text-h4 text-primary font-bold mb-3">
              Events and workshops
            </h3>
            <p class="text-body text-secondary font-normal leading-relaxed">
              Find out about events, participation or hosting a session.
            </p>
          </div>
          <div>
            <RouterLink
              to="/events"
              class="cursor-pointer block text-center border border-primary text-primary text-[14px] font-semibold px-4 py-3 rounded-[4px] bg-transparent hover:bg-primary hover:text-white transition-colors w-full"
            >
              View events
            </RouterLink>
          </div>
        </div>

        <div class="col-span-12 sm:col-span-6 lg:col-span-3 bg-white border border-primary border-l-[3px] border-l-primary rounded-[4px] p-6 flex flex-col justify-between">
          <div class="mb-6">
            <h3 class="text-h4 text-primary font-bold mb-3">
              Cases and media
            </h3>
            <p class="text-body text-secondary font-normal leading-relaxed">
              Share a story, interview idea or event recap with Business DE-DK.
            </p>
          </div>
          <div>
            <RouterLink
              to="/cases"
              class="cursor-pointer block text-center border border-primary text-primary text-[14px] font-semibold px-4 py-3 rounded-[4px] bg-transparent hover:bg-primary hover:text-white transition-colors w-full"
            >
              Contact about cases
            </RouterLink>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
