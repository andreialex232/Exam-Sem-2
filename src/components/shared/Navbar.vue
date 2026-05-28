<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n'; //
import logo from "@/assets/logo.svg";

// 2. Extract locale from the global scope
const { locale } = useI18n({ useScope: 'global' });

const isMenuOpen = ref(false);

const setLanguage = (lang) => {
  locale.value = lang; // 3. This changes the language site-wide
  localStorage.setItem('user-locale', lang); // Optional: Save preference for page reloads
};

// Optional: Load saved language on mount
onMounted(() => {
  const savedLocale = localStorage.getItem('user-locale');
  if (savedLocale) {
    locale.value = savedLocale;
  }
});

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="w-full border-b border-gray-100 bg-white relative z-50 px-6 lg:px-0">
    <div class="mx-auto max-w-[1280px] grid grid-cols-4 min-[1001px]:grid-cols-12 items-center h-[61px]">

      <RouterLink to="/" class="col-span-1 min-[1001px]:col-span-3 flex items-center">
        <img
          :src="logo"
          alt="Logo"
          class="w-auto block object-contain object-left transition-all h-[20px] min-[1001px]:h-[35px]"
        />
      </RouterLink to="/">

      <div class="hidden min-[1001px]:flex min-[1001px]:col-span-6 justify-center items-center gap-10 text-secondary text-sm font-medium">
        <RouterLink to="/network" class="nav-link">{{ $t('nav.network') }}</RouterLink>
        <RouterLink to="/cases" class="nav-link">{{ $t('nav.cases') }}</RouterLink>
        <RouterLink to="/events" class="nav-link">{{ $t('nav.events') }}</RouterLink>
        <RouterLink to="/contacts" class="nav-link">{{ $t('nav.contact') }}</RouterLink>
      </div>

      <div class="col-span-3 min-[1001px]:col-span-3 flex items-center justify-end gap-4 md:gap-6">

        <div class="flex items-center gap-1 text-[12px] uppercase">
          <button @click="setLanguage('da')"
          :class="locale === 'da' ? 'text-primary font-bold' : 'text-support font-normal'"
          class="transition-all hover:text-primary hover:font-bold cursor-pointer"
          >DA</button>

          <span class="text-support">/</span>

          <button @click="setLanguage('de')"
          :class="locale === 'de' ? 'text-primary font-bold' : 'text-support font-normal'"
          class="transition-all hover:text-primary hover:font-bold cursor-pointer"
          >DE</button>

          <span class="text-support">/</span>

          <button @click="setLanguage('en')"
          :class="locale === 'en' ? 'text-primary font-bold' : 'text-support font-normal'"
          class="transition-all hover:text-primary hover:font-bold cursor-pointer"
          >EN</button>
        </div>

        <RouterLink to="/contacts#membership-form-section" class="hidden min-[1001px]:block bg-[var(--color-cta)] text-white px-6 py-2.5 text-xs font-semibold uppercase">
          {{ $t('nav.become_member') }}
        </RouterLink>

        <button @click="toggleMenu" class="min-[1001px]:hidden text-secondary focus:outline-none p-1">
          <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <div v-if="isMenuOpen" class="min-[1001px]:hidden absolute top-[61px] left-0 w-full bg-white border-b border-gray-100 px-4 py-6 flex flex-col shadow-xl animate-fade-in">
      <div class="flex flex-col border-t border-gray-50">
        <RouterLink to="/network" class="py-4 text-secondary text-[15px] font-medium border-b border-gray-50 hover:bg-gray-50 px-2 transition-colors">{{ $t('nav.network') }}</RouterLink>
        <RouterLink to="/cases" class="py-4 text-secondary text-[15px] font-medium border-b border-gray-50 hover:bg-gray-50 px-2 transition-colors">{{ $t('nav.cases') }}</RouterLink>
        <RouterLink to="/events" class="py-4 text-secondary text-[15px] font-medium border-b border-gray-50 hover:bg-gray-50 px-2 transition-colors">{{ $t('nav.events') }}</RouterLink>
        <RouterLink to="/contacts" class="py-4 text-secondary text-[15px] font-medium border-b border-gray-50 hover:bg-gray-50 px-2 transition-colors">{{ $t('nav.contact') }}</RouterLink>
      </div>

      <RouterLink to="/contacts#membership-form-section" class="bg-[var(--color-cta)] text-white px-6 py-4 text-center text-sm font-semibold uppercase mt-6 tracking-wide shadow-md">
        {{ $t('nav.become_member') }}
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
/* Keep your existing styles here... */
</style>
