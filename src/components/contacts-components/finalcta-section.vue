<script setup>
const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<template>
  <section class="w-full bg-primary border-t border-b border-grey py-16 md:py-[100px] text-center px-6 lg:px-0">
    <div class="max-w-[1280px] mx-auto flex flex-col items-center">

      <h2 class="text-3xl md:text-h2 text-white mb-4 max-w-[600px]">
        Ready to become visible <br class="hidden sm:block"> in the network?
      </h2>

      <p class="text-base md:text-body text-support mb-8 max-w-[500px]">
        Start with a simple request or talk to Business DE-DK first.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">

        <RouterLink
          to="/contacts/#membership-form-section"
          class="cursor-pointer w-full sm:w-auto bg-cta text-white font-bold text-base px-6 py-3.5 rounded-[4px] hover:bg-[#e05e00] transition-colors text-center whitespace-nowrap"
        >
          Start membership request &rarr;
        </RouterLink>

        <RouterLink
          to="/contacts/#contact-section"
          class="cursor-pointer w-full sm:w-auto border border-white text-white font-bold text-base px-6 py-3.5 rounded-[4px] bg-transparent hover:bg-white hover:text-primary transition-all text-center whitespace-nowrap"
        >
          Talk to us first
        </RouterLink>

      </div>

    </div>
  </section>
</template>
