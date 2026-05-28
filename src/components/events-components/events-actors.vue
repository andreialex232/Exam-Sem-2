<script setup>
import HeroTemplate from '../layout/Hero-template.vue';
import { computed, ref, onMounted, onUnmounted, watch } from 'vue';
import { useEvents } from '@/composables/useEvents';

const { events } = useEvents();

// element refs for jumping
const searchInput = ref(null);
const eventsHeading = ref(null);

// states
const search = ref('');
const selectedType = ref('all');
const selectedCountries = ref(['all']);
const selectedLanguages = ref(['all']);

// pagination states
const currentPage = ref(1);
const itemsPerPage = ref(12);

const eventTypeOptions = ref([
  { label: 'All', value: 'all' },
  { label: 'Workshop', value: 'workshop' },
  { label: 'Webinar', value: 'webinar' },
  { label: 'Meeting', value: 'meeting' },
  { label: 'Business Breakfast', value: 'business breakfast' },
  { label: 'Business Fair', value: 'business fair' },
]);

const countryOptions = ref([
  { label: 'All', value: 'all' },
  { label: 'Denmark', value: 'denmark' },
  { label: 'Germany', value: 'germany' },
]);

const languageOptions = ref([
  { label: 'All', value: 'all' },
  { label: 'EN', value: 'en' },
  { label: 'DK', value: 'da' },
  { label: 'DE', value: 'de' },
]);

// jump to search input and focus it
const jumpToSearch = () => {
  if (searchInput.value) {
    searchInput.value.scrollIntoView({ block: 'center' });
    searchInput.value.focus();
  }
};

// jump to the beginning of the events list
const scrollToList = () => {
  if (eventsHeading.value) {
    eventsHeading.value.scrollIntoView({ block: 'start' });
  }
};

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

// reset filters and jump to search bar
const clearFilters = () => {
  search.value = '';
  selectedType.value = 'all';
  selectedCountries.value = ['all'];
  selectedLanguages.value = ['all'];
  jumpToSearch();
};

// search & filter
const filteredEvents = computed(() => {
  return events.value.filter(event => {
    //search
    const query = search.value.toLowerCase().trim();
    const matchesSearch = !query || 
      event.name.toLowerCase().includes(query) ||
      event.description.toLowerCase().includes(query) ||
      event.location.toLowerCase().includes(query);

    //event type filter
    const matchesType = selectedType.value === 'all' || 
      event.role.toLowerCase() === selectedType.value;

    //country filter (checking if the location string includes the country name)
    const matchesCountry = selectedCountries.value.includes('all') || 
      selectedCountries.value.some(country => event.location.toLowerCase().includes(country));

    //language filter
    const matchesLanguage = selectedLanguages.value.includes('all') || 
      event.language.some(lang => selectedLanguages.value.includes(lang.toLowerCase()));

    return matchesSearch && matchesType && matchesCountry && matchesLanguage;
  });
});

// responsive pagination logic
const updateItemsPerPage = () => {
  if (typeof window !== 'undefined') {
    itemsPerPage.value = window.innerWidth >= 1024 ? 12 : 6;
  }
};

onMounted(() => {
  updateItemsPerPage();
  window.addEventListener('resize', updateItemsPerPage);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateItemsPerPage);
});

// reset back to page 1 whenever filters or search criteria update
watch([search, selectedType, selectedCountries, selectedLanguages], () => {
  currentPage.value = 1;
});

const totalItems = computed(() => filteredEvents.value.length);
const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage.value));

const paginatedEvents = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  return filteredEvents.value.slice(start, start + itemsPerPage.value);
});

const displayStart = computed(() => {
  if (totalItems.value === 0) return 0;
  return (currentPage.value - 1) * itemsPerPage.value + 1;
});

const displayEnd = computed(() => {
  return Math.min(currentPage.value * itemsPerPage.value, totalItems.value);
});

// Helper for event tags
const badgeColor = (role) => {
  if (!role) return 'bg-slate-500 text-white';
  const roleLower = role.toLowerCase();
  
  if (roleLower === 'workshop') {
    return 'bg-[#F97316] text-white'; // Orange from design
  }
  return 'bg-[#334155] text-white'; // Dark blue/slate from design
};

// Format ["da", "en"] to "DA / EN"
const formatLanguages = (langs) => {
  if (!langs || !langs.length) return '';
  return langs.join(' / ').toUpperCase();
};
</script>

<template>
  <div id="upcoming" class="grid grid-cols-12 w-full min-h-screen bg-white py-12 px-4 font-sans selection:bg-slate-200 pb-12">
    
    <div class="col-start-2 col-end-12 flex flex-col gap-6">
      
      <HeroTemplate>
        <template #subtitle>Showing events connected to cross-border business cooperation.</template>
        <template #h2>Upcoming events</template>
      </HeroTemplate>
      
      <div class="relative w-full">
        <span class="absolute inset-y-0 left-4 flex items-center pointer-events-none text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.602Z" />
          </svg>
        </span>
        <input 
          ref="searchInput"
          v-model="search"
          type="text" 
          placeholder="Search by event name, description, or location" 
          class="w-full pl-12 pr-4 py-4 bg-subtle rounded-md text-primary placeholder-secondary/60 outline-none transition-all duration-200 focus:ring-1 focus:ring-secondary/40"
        />
      </div>

      <div class="flex flex-col gap-5 mt-2">
        <div class="flex flex-wrap items-center justify-between gap-y-6">
          <fieldset class="flex flex-wrap items-center gap-2">
            <legend class="text-label text-secondary uppercase mr-3 float-left">Event Type</legend>
            <label v-for="option in eventTypeOptions" :key="option.value" class="cursor-pointer">
              <input type="radio" name="event_type" :value="option.value" v-model="selectedType" class="sr-only peer" />
              <div class="px-4 py-1.5 text-btn rounded-full border border-secondary/20 bg-card-surface text-secondary transition-all peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary hover:bg-subtle">{{option.label}}</div>
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
          <button @click="clearFilters" type="button" class="hover:underline text-support cursor-pointer">Back to all events</button>
        </div>
        <div class="text-support/90">
          Showing {{ filteredEvents.length }} of {{ events.length }} events
        </div>
      </div>

      <h2 id="events" ref="eventsHeading" class="sr-only">Event List</h2>

      <div v-if="filteredEvents.length > 0">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          
          <div v-for="event in paginatedEvents" :key="event.id" class="bg-white rounded border border-slate-200 shadow-sm p-6 lg:p-8 flex gap-6 hover:shadow-md transition-shadow">
            
            <div class="flex flex-col items-center min-w-[3rem] mt-1">
              <span class="text-3xl font-extrabold text-slate-900 leading-none">{{ event.date.day }}</span>
              <span class="text-xs font-bold text-[#F97316] uppercase mt-1 tracking-wider">{{ event.date.time }}</span>
            </div>

            <div class="flex flex-col w-full">
              
              <div class="mb-3">
                <span :class="badgeColor(event.role)" class="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {{ event.role }}
                </span>
              </div>
              
              <h3 class="text-[1.1rem] font-semibold text-slate-800 leading-snug mb-3">
                {{ event.name }}
              </h3>
              
              <p class="text-sm text-slate-500 mb-6 leading-relaxed line-clamp-2">
                {{ event.description }}
              </p>

              <div class="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400 mb-6">
                <div class="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <span>{{ event.location }}</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.91 0-5.657-.534-8.143-1.493m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                  <span>{{ formatLanguages(event.language) }}</span>
                </div>
              </div>

              <div class="flex items-center gap-6 mt-auto border-t border-slate-100 pt-5">
                <RouterLink :to="`/events/${event.slug}/register`" class="text-[#F97316] font-semibold text-sm hover:underline flex items-center gap-1">
                  Register &rarr;
                </RouterLink>
                <RouterLink :to="`/events/${event.slug}`" class="text-slate-400 text-sm hover:underline">
                  View details
                </RouterLink>
              </div>
              
            </div>
          </div>
        </div>

        <div class="mt-16 border-t border-slate-100 pt-12 flex flex-col items-center gap-6">
          <p class="text-slate-500 font-sans text-base">
            Showing {{ displayStart }}–{{ displayEnd }} of {{ totalItems }} events
          </p>

          <div class="flex items-center gap-2">
            <button 
              :disabled="currentPage === 1" 
              @click="currentPage--; scrollToList()" 
              class="px-5 py-3 border border-slate-800 rounded text-slate-800 font-medium disabled:opacity-30 disabled:cursor-not-allowed"
            >
              &larr; Previous
            </button>

            <button 
              v-for="page in totalPages" 
              :key="page" 
              @click="currentPage = page; scrollToList()" 
              :class="[
                'w-12 h-12 flex items-center justify-center font-medium rounded',
                currentPage === page 
                  ? 'bg-[#1E293B] text-white' 
                  : 'bg-white border border-slate-200 text-slate-800'
              ]"
            >
              {{ page }}
            </button>

            <span v-if="totalPages > 3 && currentPage < totalPages - 1" class="px-2 text-slate-400">...</span>

            <button 
              :disabled="currentPage === totalPages" 
              @click="currentPage++; scrollToList()" 
              class="px-5 py-3 border border-slate-800 rounded text-slate-800 font-medium disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-16 flex flex-col items-center justify-center gap-2 border border-dashed border-slate-200 rounded-md mt-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-slate-300">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
        <p class="text-xl font-medium text-slate-700 mt-2">We couldn't find any events matching your criteria.</p>
        <p class="text-slate-400 text-sm max-w-sm">Try adjusting your search query parameters or changing your event filters.</p>
      </div>

      <div class="bg-page-bg p-6 md:p-10 text-center flex flex-col items-center gap-3 md:gap-4 mt-8 rounded-sm w-[90%] md:w-160 mx-auto">
        <p class="text-sm md:text-body text-secondary">
          Need to refine your search?
        </p>
        <div class="flex items-center justify-center gap-3 md:gap-5 mt-2">
          <button @click="jumpToSearch" class="secondary-btn text-sm md:text-base">
            Back to filters
          </button>
          <button @click="clearFilters" class="cursor-pointer text-sm md:text-body text-support">
            Clear filters
          </button>
        </div>
      </div>

    </div>
  </div>
</template>