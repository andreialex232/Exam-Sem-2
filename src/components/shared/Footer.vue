<script setup>
import { useI18n } from 'vue-i18n'
import logo from "@/assets/logo.svg"
import { RouterLink } from "vue-router"

const { t } = useI18n()
</script>

<template>
<footer class="box-border border-t border-secondary bg-premium-bg text-support font-raleway md:grid md:grid-cols-12">
  <div class="box-border col-span-full md:col-start-2 md:col-end-12 pt-14 pb-12
              grid grid-cols-[220px_repeat(4,auto)] gap-8 items-start justify-between
              max-md:grid-cols-2 max-md:px-5 max-md:pt-10 max-md:pb-8 max-md:gap-x-6 max-md:gap-y-8
              max-[420px]:grid-cols-1">
    <div class="box-border max-md:col-span-2 max-[420px]:col-span-1">
 
      <div class="mb-4 w-[160px] h-[48px] flex items-center">
        <RouterLink class="block w-full h-full flex items-center" to="/">
          <img class="white-svg" :src="logo" alt="Business DE-DK Logo">
        </RouterLink>
      </div>
      <p class="box-border m-0 mb-5 text-meta text-support max-w-[200px]">
        {{ t('footer.tagline') }}
      </p>
 
      <div class="flex gap-2">
        <a href="https://www.linkedin.com/company/businessdedk/posts/?feedView=all" aria-label="LinkedIn"
           class="box-border flex items-center justify-center w-8 h-8 border border-secondary rounded text-support no-underline transition-colors duration-200 hover:border-support hover:text-white">
           <img src="@/assets/svg/linked.svg" alt="LinkedIn Icon" class="w-8 h-8">
          </a>
        <a href="https://www.facebook.com/BusinessDEDK/" aria-label="Facebook"
           class="box-border flex items-center justify-center w-8 h-8 border border-secondary rounded text-support no-underline transition-colors duration-200 hover:border-support hover:text-white">
           <img src="@/assets/svg/fb.svg" alt="Facebook Icon" class="w-5 h-5">
          </a>
        <a href="https://www.youtube.com/@Business-region/videos" aria-label="YouTube"
           class="box-border flex items-center justify-center w-8 h-8 border border-secondary rounded text-support no-underline transition-colors duration-200 hover:border-support hover:text-white">
           <img src="@/assets/svg/yt.svg" alt="YouTube Icon" class="w-8 h-8">
          </a>
        <a href="#" aria-label="Instagram"
           class="box-border flex items-center justify-center w-8 h-8 border border-secondary rounded text-support no-underline transition-colors duration-200 hover:border-support hover:text-white">
           <img src="@/assets/svg/ig.svg" alt="Instagram Icon" class="w-8 h-8">
          </a>
      </div>
    </div>
    
    <nav class="box-border flex flex-col gap-2 max-md:col-start-1">
      <h4 class="box-border m-0 mb-3 p-0 text-white text-label uppercase">{{ t('footer.quickLinks.title') }}</h4>
      <ul class="box-border m-0 p-0 list-none flex flex-col gap-[0.45rem]">
        <li class="m-0 p-0">
          <RouterLink class="block text-support no-underline text-meta transition-colors duration-200 hover:text-white" to="/network">{{ t('footer.quickLinks.network') }}</RouterLink>
        </li>
        <li class="m-0 p-0">
          <RouterLink class="block text-support no-underline text-meta transition-colors duration-200 hover:text-white" to="/cases">{{ t('footer.quickLinks.cases') }}</RouterLink>
        </li>
        <li class="m-0 p-0">
          <RouterLink class="block text-support no-underline text-meta transition-colors duration-200 hover:text-white" to="/events">{{ t('footer.quickLinks.events') }}</RouterLink>
        </li>
        <li class="m-0 p-0">
          <RouterLink class="block text-support no-underline text-meta transition-colors duration-200 hover:text-white" to="/contacts">{{ t('footer.quickLinks.member') }}</RouterLink>
        </li>
      </ul>
    </nav>
    
    <div class="box-border flex flex-col gap-2 max-md:col-start-2 max-[420px]:col-start-1">
      <h4 class="box-border m-0 mb-3 p-0 text-white text-label uppercase">{{ t('footer.openingHours.title') }}</h4>
      <p class="box-border m-0 p-0 text-support text-meta">{{ t('footer.openingHours.callHours') }}</p>
      <p class="box-border m-0 p-0 text-support text-meta">{{ t('footer.openingHours.times') }}</p>
      <p class="box-border m-0 p-0 text-support text-meta">{{ t('footer.openingHours.visitingHours') }}</p>
    </div>
    
    <div class="box-border flex flex-col gap-1.5 max-md:col-start-1 max-[420px]:col-start-1">
      <h4 class="box-border m-0 mb-3 p-0 text-white text-label uppercase">{{ t('footer.contact.title') }}</h4>
      <a href="tel:+4521775916" class="block text-support no-underline text-meta transition-colors duration-200 hover:text-white">+45 21 77 59 16</a>
      <a href="mailto:lecba@toender.dk" class="block text-support no-underline text-meta transition-colors duration-200 hover:text-white">lecba@toender.dk</a>
      <p class="box-border m-0 p-0 text-support text-meta">{{ t('footer.contact.address') }}</p>
    </div>
    
    <nav class="box-border flex flex-col gap-2 max-md:col-start-2 max-[420px]:col-start-1">
      <h4 class="box-border m-0 mb-3 p-0 text-white text-label uppercase">{{ t('footer.legal.title') }}</h4>
      <ul class="box-border m-0 p-0 list-none flex flex-col gap-[0.45rem]">
        <li class="m-0 p-0"><a href="#" class="block text-support no-underline text-meta transition-colors duration-200 hover:text-white">{{ t('footer.legal.privacy') }}</a></li>
        <li class="m-0 p-0"><a href="#" class="block text-support no-underline text-meta transition-colors duration-200 hover:text-white">{{ t('footer.legal.strategy') }}</a></li>
        <li class="m-0 p-0"><a href="#" class="block text-support no-underline text-meta transition-colors duration-200 hover:text-white">{{ t('footer.legal.press') }}</a></li>
      </ul>
    </nav>
 
  </div>
  
  <div class="box-border col-span-full md:col-start-2 md:col-end-13 px-8 py-5
              border-t border-secondary/35
              flex items-center justify-between
              max-md:flex-col max-md:items-center max-md:gap-3 max-md:px-5 max-md:py-4 max-md:text-center">
    <p class="box-border m-0 p-0 text-caption text-secondary">{{ t('footer.bottomBar.copyright') }}</p>
    <div class="box-border flex items-center gap-1.5 text-caption text-secondary">
      <span class="mr-1">{{ t('footer.bottomBar.language') }}</span>
      <a href="#" class="text-secondary no-underline tracking-[0.04em] transition-colors duration-200 hover:text-white">DA</a>
      <span class="opacity-50">/</span>
      <a href="#" class="text-secondary no-underline tracking-[0.04em] transition-colors duration-200 hover:text-white">DE</a>
      <span class="opacity-50">/</span>
      <a href="#" class="text-secondary no-underline tracking-[0.04em] transition-colors duration-200 hover:text-white">EN</a>
    </div>
  </div>
 
</footer>
</template>