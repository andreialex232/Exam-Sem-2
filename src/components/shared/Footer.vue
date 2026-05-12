<script setup>
    import logo_dark from "@/assets/logo_dark.svg"
    import { RouterLink } from "vue-router";
</script>

<template>
  <footer class="box-border bg-premium-bg text-support text-sm tracking-wide">
 
    <!-- Main grid -->
    <div class="box-border max-w-[1280px] mx-auto px-8 pt-14 pb-12
                grid grid-cols-[220px_repeat(4,1fr)] gap-8 items-start
                max-md:grid-cols-2 max-md:px-5 max-md:pt-10 max-md:pb-8 max-md:gap-x-6 max-md:gap-y-8
                max-[420px]:grid-cols-1">
 
      <!-- Brand -->
      <div class="box-border max-md:col-span-2 max-[420px]:col-span-1">
 
        <!-- Logo placeholder -->
        <div class="mb-4 w-[160px] h-[48px] flex items-center">
          <RouterLink class="block w-full h-full flex items-center" to="/">
            <img :src="logo_dark" alt="Business DE-DK Logo">
          </RouterLink>
        </div>
 
        <!-- Tagline -->
        <p class="box-border m-0 mb-5 text-[0.8125rem] leading-relaxed text-support max-w-[200px]">
          Cross-border business platform for Southern Denmark and Northern Germany.
        </p>
 
        <!-- Socials -->
        <div class="flex gap-2">
          <a href="#" aria-label="LinkedIn"
             class="box-border flex items-center justify-center w-8 h-8 border border-secondary rounded text-support no-underline transition-colors duration-200 hover:border-support hover:text-white">
            <!-- Needs LinkedIn icon -->
          </a>
          <a href="#" aria-label="Facebook"
             class="box-border flex items-center justify-center w-8 h-8 border border-secondary rounded text-support no-underline transition-colors duration-200 hover:border-support hover:text-white">
            <!-- Needs facebook icon -->
          </a>
          <a href="#" aria-label="YouTube"
             class="box-border flex items-center justify-center w-8 h-8 border border-secondary rounded text-support no-underline transition-colors duration-200 hover:border-support hover:text-white">
            <!-- Needs youtube icon -->
          </a>
          <a href="#" aria-label="Instagram"
             class="box-border flex items-center justify-center w-8 h-8 border border-secondary rounded text-support no-underline transition-colors duration-200 hover:border-support hover:text-white">
            <!-- Needs instagram icon -->
          </a>
        </div>
      </div>
 
      <!-- Quick Links -->
      <nav class="box-border flex flex-col gap-2 max-md:col-start-1">
        <h4 class="box-border m-0 mb-3 p-0 text-white text-[0.6875rem] font-semibold tracking-[0.12em] uppercase">QUICK LINKS</h4>
        <ul class="box-border m-0 p-0 list-none flex flex-col gap-[0.45rem]">
          <li class="m-0 p-0"><a href="#" class="block text-support no-underline text-[0.8125rem] leading-normal transition-colors duration-200 hover:text-white">Network</a></li>
          <li class="m-0 p-0"><a href="#" class="block text-support no-underline text-[0.8125rem] leading-normal transition-colors duration-200 hover:text-white">Cases &amp; Insights</a></li>
          <li class="m-0 p-0"><a href="#" class="block text-support no-underline text-[0.8125rem] leading-normal transition-colors duration-200 hover:text-white">Events</a></li>
          <li class="m-0 p-0"><a href="#" class="block text-support no-underline text-[0.8125rem] leading-normal transition-colors duration-200 hover:text-white">Become a member</a></li>
        </ul>
      </nav>
 
      <!-- Åbningstider -->
      <div class="box-border flex flex-col gap-2 max-md:col-start-2 max-[420px]:col-start-1">
        <h4 class="box-border m-0 mb-3 p-0 text-white text-[0.6875rem] font-semibold tracking-[0.12em] uppercase">ÅBNINGSTIDER</h4>
        <p class="box-border m-0 p-0 text-support text-[0.8125rem] leading-normal">Ringetider: Mandag til torsdag:</p>
        <p class="box-border m-0 p-0 text-support text-[0.8125rem] leading-normal">08.30 – 15.00 Fredag: 08.30 – 13.00</p>
        <p class="box-border m-0 p-0 text-support text-[0.8125rem] leading-normal">Besøgstid: Efter aftale</p>
      </div>
 
      <!-- Contact -->
      <div class="box-border flex flex-col gap-1.5 max-md:col-start-1 max-[420px]:col-start-1">
        <h4 class="box-border m-0 mb-3 p-0 text-white text-[0.6875rem] font-semibold tracking-[0.12em] uppercase">CONTACT</h4>
        <a href="tel:+4521775916" class="block text-support no-underline text-[0.8125rem] leading-normal transition-colors duration-200 hover:text-white">+45 21 77 59 16</a>
        <a href="mailto:lecba@toender.dk" class="block text-support no-underline text-[0.8125rem] leading-normal transition-colors duration-200 hover:text-white">lecba@toender.dk</a>
        <p class="box-border m-0 p-0 text-support text-[0.8125rem] leading-normal">Vestergade 9 6270 Tønder</p>
      </div>
 
      <!-- Legal -->
      <nav class="box-border flex flex-col gap-2 max-md:col-start-2 max-[420px]:col-start-1">
        <h4 class="box-border m-0 mb-3 p-0 text-white text-[0.6875rem] font-semibold tracking-[0.12em] uppercase">LEGAL</h4>
        <ul class="box-border m-0 p-0 list-none flex flex-col gap-[0.45rem]">
          <li class="m-0 p-0"><a href="#" class="block text-support no-underline text-[0.8125rem] leading-normal transition-colors duration-200 hover:text-white">Privacy policy</a></li>
          <li class="m-0 p-0"><a href="#" class="block text-support no-underline text-[0.8125rem] leading-normal transition-colors duration-200 hover:text-white">Strategy</a></li>
          <li class="m-0 p-0"><a href="#" class="block text-support no-underline text-[0.8125rem] leading-normal transition-colors duration-200 hover:text-white">For Press</a></li>
        </ul>
      </nav>
 
    </div>
 
    <!-- Bottom bar -->
    <div class="box-border max-w-[1280px] mx-auto px-8 py-5
                border-t border-secondary/35
                flex items-center justify-between
                max-md:flex-col max-md:items-center max-md:gap-3 max-md:px-5 max-md:py-4 max-md:text-center">
      <p class="box-border m-0 p-0 text-xs text-secondary">© 2026 Business DE–DK. All rights reserved.</p>
      <div class="box-border flex items-center gap-1.5 text-xs text-secondary">
        <span class="mr-1">Language:</span>
        <a href="#" class="text-secondary no-underline tracking-[0.04em] transition-colors duration-200 hover:text-white">DA</a>
        <span class="opacity-50">/</span>
        <a href="#" class="text-secondary no-underline tracking-[0.04em] transition-colors duration-200 hover:text-white">DE</a>
        <span class="opacity-50">/</span>
        <a href="#" class="text-secondary no-underline tracking-[0.04em] transition-colors duration-200 hover:text-white">EN</a>
      </div>
    </div>
 
  </footer>
</template>


