<script setup>
import { ref } from 'vue';
import logo from "@/assets/logo.svg";

const activeLang = ref('EN');
const isMenuOpen = ref(false);

const setLanguage = (lang) => {
  activeLang.value = lang;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="w-full border-b border-gray-100 bg-white relative z-50">
    <div class="mx-auto max-w-[1280px] grid grid-cols-4 min-[1001px]:grid-cols-12 items-center h-[61px]">

      <!-- Logo -->
      <div class="col-span-1 min-[1001px]:col-span-3 flex items-center">
        <img
          :src="logo"
          alt="Logo"
          class="w-auto block object-contain object-left transition-all h-[20px] min-[1001px]:h-[35px]"
        />
      </div>

      <!-- Navigation Links -->
      <div class="hidden min-[1001px]:flex min-[1001px]:col-span-6 justify-center items-center gap-10 text-secondary text-sm font-medium">
        <RouterLink to="/network" class="nav-link">Network</RouterLink>
        <RouterLink to="/cases" class="nav-link">Cases & Insights</RouterLink>
        <RouterLink to="/events" class="nav-link">Events</RouterLink>
        <RouterLink to="/join" class="nav-link">Join</RouterLink>
        <RouterLink to="/contacts" class="nav-link">Contact</RouterLink>
      </div>

      <div class="col-span-3 min-[1001px]:col-span-3 flex items-center justify-end gap-4 md:gap-6">

        <!-- Language Switcher -->
        <div class="flex items-center gap-1 text-[12px] uppercase">
          <button @click="setLanguage('DA')"
          :class="activeLang === 'DA' ? 'text-primary font-bold' : 'text-support font-normal'"
          class="transition-all hover:text-primary hover:font-bold cursor-pointer"
          >DA</button>
          <span class="text-support">/</span>
          <button @click="setLanguage('DE')"
          :class="activeLang === 'DE' ? 'text-primary font-bold' : 'text-support font-normal'"
          class="transition-all hover:text-primary hover:font-bold cursor-pointer"
          >DE</button>
          <span class="text-support">/</span>
          <button @click="setLanguage('EN')"
          :class="activeLang === 'EN' ? 'text-primary font-bold' : 'text-support font-normal'"
          class="transition-all hover:text-primary hover:font-bold cursor-pointer"
          >EN</button>
        </div>

        <!-- Become a member button -->
        <a href="#" class="hidden min-[1001px]:block bg-[var(--color-cta)] text-white px-6 py-2.5 text-xs font-semibold uppercase">
          Become a member
        </a>

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
        <RouterLink to="/network" class="py-4 text-secondary text-[15px] font-medium border-b border-gray-50 hover:bg-gray-50 px-2 transition-colors">Network</RouterLink>
        <RouterLink to="/cases" class="py-4 text-secondary text-[15px] font-medium border-b border-gray-50 hover:bg-gray-50 px-2 transition-colors">Cases & Insights</RouterLink>
        <RouterLink to="/events" class="py-4 text-secondary text-[15px] font-medium border-b border-gray-50 hover:bg-gray-50 px-2 transition-colors">Events</RouterLink>
        <RouterLink to="/join" class="py-4 text-secondary text-[15px] font-medium border-b border-gray-50 hover:bg-gray-50 px-2 transition-colors">Join</RouterLink>
        <RouterLink to="/contact" class="py-4 text-secondary text-[15px] font-medium border-b border-gray-50 hover:bg-gray-50 px-2 transition-colors">Contact</RouterLink>
      </div>

      <a href="#" class="bg-[var(--color-cta)] text-white px-6 py-4 text-center text-sm font-semibold uppercase mt-6 tracking-wide shadow-md">
        Become a member
      </a>
    </div>
  </nav>
</template>

<style scoped>
/* Desktop Underline Animation */
@media (min-width: 1001px) {
  .nav-link {
    position: relative;
    padding-bottom: 4px;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
  }
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #e8630a;
    transform: scaleX(0);
    transform-origin: bottom left;
    transition: transform 0.3s ease-out;
  }
  .nav-link:hover::after {
    transform: scaleX(1);
  }
}

/* Simple fade-in for mobile menu */
.animate-fade-in {
  animation: fadeIn 0.2s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
