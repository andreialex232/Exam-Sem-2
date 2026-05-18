<script setup>
import HeroTemplate from '../layout/Hero-template.vue';
import { computed, ref } from 'vue';
import { useNetworkActors } from '@/composables/useNetwork';
import danishFlag from '@/assets/svg/da.svg';
import germanFlag from '@/assets/svg/de.svg';

const { networkActors } = useNetworkActors();

// states
const search = ref('');
const selectedProfile = ref('all');
const selectedCountries = ref(['all']);
const selectedLanguages = ref(['all']);

const profileTypeOptions = ref([
    { label: 'All', value: 'all' },
    { label: 'Companies', value: 'company' },
    { label: 'Advisors', value: 'advisor' },
    { label: 'Partner organizations', value: 'partner organization' },
    { label: 'Institutions', value: 'institution' },
]);

const countryOptions = ref([
    { label: 'All', value: 'all' },
    { label: 'Denmark', value: 'Denmark' },
    { label: 'Germany', value: 'Germany' },
]);

const languageOptions = ref([
    { label: 'All', value: 'all' },
    { label: 'EN', value: 'en' },
    { label: 'DK', value: 'da' },
    { label: 'DE', value: 'de' },
]);

// checkbox switching behavior for countries
const handleCountryChange = (value) => {
  if (value === 'all') {
    selectedCountries.value = ['all'];
  } else {
    selectedCountries.value = selectedCountries.value.filter(c => c !== 'all');
    if (selectedCountries.value.length === 0) {
      selectedCountries.value = ['all'];
    }
  }
};

// checkbox switching behavior for langs
const handleLanguageChange = (value) => {
  if (value === 'all') {
    selectedLanguages.value = ['all'];
  } else {
    selectedLanguages.value = selectedLanguages.value.filter(l => l !== 'all');
    if (selectedLanguages.value.length === 0) {
      selectedLanguages.value = ['all'];
    }
  }
};

// reset filters
const clearFilters = () => {
  search.value = '';
  selectedProfile.value = 'all';
  selectedCountries.value = ['all'];
  selectedLanguages.value = ['all'];
};

// search & filter
const filteredNetworkActors = computed(() => {
  return networkActors.value.filter(actor => {
    //search
    const query = search.value.toLowerCase().trim();
    const matchesSearch = !query || 
      actor.name.toLowerCase().includes(query) ||
      actor.subtitle.toLowerCase().includes(query) ||
      actor.description.toLowerCase().includes(query) ||
      actor.country.toLowerCase().includes(query);

    //profile type filter
    const matchesProfile = selectedProfile.value === 'all' || 
      actor.role.toLowerCase() === selectedProfile.value ||
      (selectedProfile.value === 'institution' && actor.role.toLowerCase() === 'institution');

    //country filter
    const matchesCountry = selectedCountries.value.includes('all') || 
      selectedCountries.value.includes(actor.country);

    //language filter
    const matchesLanguage = selectedLanguages.value.includes('all') || 
      actor.language.some(lang => selectedLanguages.value.includes(lang));

    return matchesSearch && matchesProfile && matchesCountry && matchesLanguage;
  });
});

const colorBasedOnRole = (actor, el) => {
  if(actor.role) {
    switch(actor.role.toLowerCase()) {
      case 'company':
        console.log('company')
        return `${el}-accent`;
      case 'advisor':
        return `${el}-secondary`;
      case 'partner organization':
        return `${el}-support`;
      case 'institution':
        return `${el}-support`
      default:
        return 'bg-white text-red-500';
    }
    
  };
};
</script>

<template>
  <div class="grid grid-cols-12 w-full min-h-screen bg-white py-12 px-4 font-sans selection:bg-slate-200 pb-12">
    
    <div class="col-start-2 col-end-12 flex flex-col gap-6">
      
      <HeroTemplate>
        <template #subtitle>search & filter</template>
        <template #h2>search the network</template>
      </HeroTemplate>
      
      <div class="relative w-full">
        <span class="absolute inset-y-0 left-4 flex items-center pointer-events-none text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.602Z" />
          </svg>
        </span>
        <input 
          v-model="search"
          type="text" 
          placeholder="Search by name, sector, service or location" 
          class="w-full pl-12 pr-4 py-4 bg-subtle rounded-md text-primary placeholder-secondary/60 outline-none transition-all duration-200 focus:ring-1 focus:ring-secondary/40"
        />
      </div>

      <div class="flex flex-col gap-5 mt-2">
        <div class="flex flex-wrap items-center justify-between gap-y-6">
          <fieldset class="flex flex-wrap items-center gap-2">
            <legend class="text-label text-secondary uppercase mr-3 float-left">Profile Type</legend>
            <label v-for="profile in profileTypeOptions" :key="profile.value" class="cursor-pointer">
              <input type="radio" name="profile_type" :value="profile.value" v-model="selectedProfile" class="sr-only peer" />
              <div class="px-4 py-1.5 text-btn rounded-full border border-secondary/20 bg-card-surface text-secondary transition-all peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary hover:bg-subtle">{{profile.label}}</div>
            </label>
          </fieldset>

          <fieldset class="flex flex-wrap items-center gap-2">
            <legend class="text-label text-secondary uppercase mr-3 float-left">Country</legend>
            <label v-for="country in countryOptions" :key="country.value" class="cursor-pointer">
              <input type="checkbox" :value="country.value" v-model="selectedCountries" @change="handleCountryChange(country.value)" class="sr-only peer" />
              <div class="px-4 py-1.5 text-btn rounded-full border border-secondary/20 bg-card-surface text-secondary transition-all peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary hover:bg-subtle">{{country.label}}</div>
            </label>
          </fieldset>
        </div>

        <fieldset class="flex flex-wrap items-center gap-2">
          <legend class="text-label text-secondary uppercase mr-3 float-left">Language</legend>
          <label v-for="option in languageOptions" :key="option.value" class="cursor-pointer">
            <input type="checkbox" :value="option.value" v-model="selectedLanguages" @change="handleLanguageChange(option.value)" class="sr-only peer" />
            <div class="px-4 py-1.5 text-btn rounded-full border border-secondary/20 bg-card-surface text-secondary transition-all peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary hover:bg-subtle">{{ option.label }}</div>
          </label>
        </fieldset>
      </div>

      <div class="flex flex-wrap items-center justify-between text-meta mt-6 text-support">
        <div class="flex items-center gap-2">
          <button @click="clearFilters" type="button" class="hover:underline text-support cursor-pointer">Clear filters</button>
          <span class="text-support/40 select-none px-1">.</span>
          <button @click="clearFilters" type="button" class="hover:underline text-support cursor-pointer">Back to all results</button>
        </div>
        <div class="text-support/90">
          Showing {{ filteredNetworkActors.length }} of {{ networkActors.length }} network actors
        </div>
      </div>




      
      

      <h2 class="text-premium-bg text-h2 pt-12" >
        Network actors
      </h2>
      <div class="grid grid-cols-1 grid-md-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div v-for="actor in filteredNetworkActors" :key="actor.id" class="bg-white rounded-sm flex flex-col gap-0.5 border border-slate-100 shadow-sm">
          <div class="h-16 flex px-6 bg-page-bg justify-between items-center">
            <img v-if="actor.logo !== ''" :src="actor.logo" :alt="actor.name" class="w-16 h-16 object-contain">
            <div v-else :class="colorBasedOnRole(actor, 'bg')" class="text-white w-12 h-12 rounded-full flex items-center justify-center text-h4">{{ actor.name[0] }}</div>
            <p :class="colorBasedOnRole(actor, 'text')" class="uppercase text-small-title">{{ actor.role }}</p>
          </div>
          <p class="px-6 py-3 text-h4 text-premium-bg">{{ actor.name }}</p>
          <div class="px-6 flex justify-content items-center gap-2">
            <img v-if="actor.country === 'Denmark'" class="w-4 h-4" :src="danishFlag" alt="">
            <img v-if="actor.country === 'Germany'" class="w-4 h-4" :src="germanFlag" alt="">
            <p class="text-body-sm text-support">{{ actor.country }}</p>
          </div>
          
          <p class="px-6 text-body-sm text-support">{{ actor.subtitle }}</p>
          <p class="text-body text-secondary px-6">{{ actor.description }}</p>

          <div class="px-6 pb-6 flex gap-1 mt-auto pt-4">
            <span v-for="lang in actor.language" :key="lang" class="bg-[#E0E1DD] text-small-title text-support px-3 py-1.5 rounded-full uppercase">
              {{ lang }}
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>