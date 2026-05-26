<script setup>
import { ref, computed } from 'vue'

// --- Filter + sort ---
const activeType = ref('All')
const activeLanguage = ref('All')
const sortByNewest = ref(true) // true = from newest, false = from oldest
const visibleRowsCount = ref(1) // How many times we've clicked "Show more" (1 step = 6 cards)

// --- MOCK DATA FOR ARTICLES (Each type has its color and style) ---
const articles = ref([
  {
    id: 'from-local-contact-to-cross-border',
    type: 'Cases',
    labelBg: 'bg-secondary text-white',
    title: 'From local contact to cross-border cooperation',
    description: 'See how one organisation used the network to build new connections.',
    author: 'Example Company',
    langCode: 'DK',
    flag: '🇩🇰',
    buttonText: 'Read case',
    date: '2026-05-20',
    timestamp: 1779235200000
  },
  {
    id: 'what-advisors-can-help-with',
    type: 'Interviews',
    labelBg: 'bg-cta text-white',
    title: 'What advisors can help with',
    description: 'Learn when companies should contact an advisor.',
    author: 'Example Advisor',
    langCode: 'DE',
    flag: '🇩🇪',
    buttonText: 'Watch interview',
    date: '2026-05-18',
    timestamp: 1779062400000,
  },
  {
    id: 'why-overview-matters-in-the-border-region',
    type: 'Insights',
    labelBg: 'bg-page-bg text-primary border border-grey',
    title: 'Why overview matters in the border region',
    description: 'Understand why companies need clearer access to contacts and initiatives.',
    author: 'Business DE-DK',
    langCode: 'EN',
    flag: '🇬🇧',
    buttonText: 'View insight',
    date: '2026-05-15',
    timestamp: 1778803200000
  },
  {
    id: 'one-advice-for-companies-working-across',
    type: 'Shorts',
    labelBg: 'bg-primary text-white',
    title: 'One advice for companies working across the border',
    description: 'A short practical highlight from an existing interview.',
    author: 'Regional Partner',
    langCode: 'DA',
    flag: '🇩🇰',
    buttonText: 'Watch short',
    date: '2026-05-10',
    timestamp: 1778371200000,
  },
  {
    id: '3-takeaways-from-a-cross-border-networking',
    type: 'Event recaps',
    labelBg: 'bg-secondary text-white',
    title: '3 takeaways from a cross-border networking event',
    description: 'A quick summary of what companies and partners discussed.',
    author: 'Business DE-DK',
    langCode: 'DA',
    flag: '🇩🇰',
    buttonText: 'View recap',
    date: '2026-05-05',
    timestamp: 1777939200000
  },
  {
    id: 'business-dedk-joins-regional-business-fair',
    type: 'News & Updates',
    labelBg: 'bg-support text-white',
    title: 'Business DE-DK joins regional business fair',
    description: 'See how the network is presented at regional events.',
    author: 'Business DE-DK',
    langCode: 'EN',
    flag: '🇬🇧',
    buttonText: 'Read update',
    date: '2026-05-01',
    timestamp: 1777593600000
  },
  // More stuff for "show more" showcase
  {
    id: 'supporting-international-recruitment-in-practice',
    type: 'Cases',
    labelBg: 'bg-secondary text-white',
    title: 'Supporting international recruitment in practice',
    description: 'A practical example of how employers can approach workforce attraction.',
    author: 'Labour Market Partner',
    langCode: 'DK',
    flag: '🇩🇰',
    buttonText: 'Read case',
    date: '2026-04-28',
    timestamp: 1777334400000
  },
  {
    id: 'building-trust-between-danish-and-german-partners',
    type: 'Interviews',
    labelBg: 'bg-cta text-white',
    title: 'Building trust between Danish and German partners',
    description: 'A conversation about collaboration, language and regional visit.',
    author: 'Cross-border Network Partner',
    langCode: 'EN',
    flag: '🇬🇧',
    buttonText: 'Watch interview',
    date: '2026-04-25',
    timestamp: 1777075200000,
  },
  {
    id: 'what-makes-the-region-attractive-for-companies',
    type: 'Insights',
    labelBg: 'bg-page-bg text-primary border border-grey',
    title: 'What makes the region attractive for companies',
    description: 'Short insight about visibility, events and network value.',
    author: 'Business DE-DK',
    langCode: 'EN',
    flag: '🇬🇧',
    buttonText: 'View insight',
    date: '2026-04-20',
    timestamp: 1776643200000
  }
])

// --- FILTER + SORT LOGIC ---
const filteredAndSortedArticles = computed(() => {
  return articles.value
    .filter(article => {
      const matchesType = activeType.value === 'All' || article.type === activeType.value
      const matchesLang = activeLanguage.value === 'All' || article.langCode === activeLanguage.value
      return matchesType && matchesLang
    })
    .sort((a, b) => {
      return sortByNewest.value ? b.timestamp - a.timestamp : a.timestamp - b.timestamp
    })
})

// Limited number of displayed items based on "Show More" clicks
const itemsPerPage = 6
const displayedArticles = computed(() => {
  const limit = visibleRowsCount.value * itemsPerPage
  return filteredAndSortedArticles.value.slice(0, limit)
})

// --- Function for buttons ---
const resetFilters = () => {
  activeType.value = 'All'
  activeLanguage.value = 'All'
  visibleRowsCount.value = 1
}

const toggleSort = () => {
  sortByNewest.value = !sortByNewest.value
}

const showMore = () => {
  visibleRowsCount.value++
}

const showLess = () => {
  visibleRowsCount.value = 1
  const element = document.getElementById('filter-section')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const scrollToFilter = () => {
  const element = document.getElementById('filter-section')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <div class="w-full">

    <section id="filter-section" class="w-full bg-white border-t border-b border-grey py-10 md:py-14">
      <div class="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-8">

        <h2 class="text-h2 text-primary font-bold">Browse by content type</h2>

        <div class="flex flex-col gap-5">
          <div class="flex flex-wrap items-center gap-3">
            <span class="text-small-title text-support font-bold uppercase tracking-wider min-w-[90px]">ITEMS</span>
            <button
              v-for="type in ['All', 'Cases', 'Interviews', 'Insights', 'News & Updates', 'Event recaps', 'Shorts']"
              :key="type"
              @click="activeType = type; visibleRowsCount = 1"
              :class="activeType === type ? 'bg-primary text-white border border-primary' : 'bg-card-surface text-primary border border-grey hover:bg-primary hover:text-white'"
              class="cursor-pointer text-body font-medium px-4 py-2 rounded-[20px] transition-all"
            >
              {{ type }}
            </button>
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <span class="text-small-title text-support font-bold uppercase tracking-wider min-w-[90px]">LANGUAGE</span>
            <button
              v-for="lang in ['All', 'EN', 'DK', 'DE']"
              :key="lang"
              @click="activeLanguage = lang; visibleRowsCount = 1"
              :class="activeLanguage === lang ? 'bg-primary text-white border border-primary' : 'bg-card-surface text-primary border border-grey hover:bg-primary hover:text-white'"
              class="cursor-pointer text-body font-medium px-6 py-2 rounded-[20px] transition-all"
            >
              {{ lang }}
            </button>
          </div>
        </div>

        <div class="pt-2">
          <button
            @click="resetFilters"
            class="cursor-pointer text-body text-primary font-semibold hover:text-cta transition-colors flex items-center gap-2"
          >
            Clear filters
          </button>
        </div>

      </div>
    </section>

    <section class="w-full bg-card-surface border-b border-grey py-12 md:py-[90px]">
      <div class="max-w-[1280px] mx-auto px-4 md:px-8">

        <div class="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-10 md:mb-14">
          <div>
            <h2 class="text-h2 text-primary font-bold leading-tight mb-3">Latest news, cases and insights</h2>
            <p class="text-body text-secondary font-normal">Showing practical examples, interviews and updates from the border region.</p>
          </div>

          <button
            @click="toggleSort"
            class="cursor-pointer bg-white border border-grey rounded-[4px] px-4 py-2.5 text-body text-primary font-medium hover:bg-card-surface transition-colors flex items-center gap-2 self-start sm:self-auto"
          >
            Sort by {{ sortByNewest ? 'oldest' : 'newest' }} &#8595;
          </button>
        </div>

        <div class="grid grid-cols-12 gap-6 md:gap-8 items-stretch">
          <div
            v-for="article in displayedArticles"
            :key="article.id"
            class="col-span-12 sm:col-span-6 lg:col-span-4 bg-white border border-grey border-t-[3px] rounded-sm overflow-hidden flex flex-col justify-between shadow-sm"
          >
            <div>
              <div class="relative w-full aspect-[355/200] bg-primary overflow-hidden group">
                <img
                  src="https://picsum.photos/355/200"
                  alt="Article thumbnail"
                  class="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                />

                <div class="absolute top-4 left-4 z-10">
                  <span :class="article.labelBg" class="text-small-title px-3 py-1 rounded-[20px] uppercase font-bold tracking-wider inline-block">
                    {{ article.type }}
                  </span>
                </div>
              </div>

              <div class="p-5 md:p-6 flex flex-col gap-4">
                <h3 class="text-h4 text-primary font-bold leading-snug">
                  {{ article.title }}
                </h3>
                <p class="text-body text-secondary font-normal leading-relaxed">
                  {{ article.description }}
                </p>

                <div class="flex flex-col gap-2 pt-2">
                  <div class="text-[11px] font-semibold text-support uppercase tracking-wider flex items-center gap-2">
                    <span>🏢</span>
                    {{ article.author }}
                  </div>
                  <div class="inline-flex items-center gap-2 bg-grey px-2 py-1 rounded-[4px] text-[11px] font-semibold text-support max-w-max">
                    <span>{{ article.flag }}</span>
                    <span>{{ article.langCode }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="border-t border-grey p-5 md:p-6 bg-white">
              <RouterLink
                :to="{ name: 'article-detail', params: { id: article.id } }"
                class="cursor-pointer block text-center border border-primary text-primary text-[15px] font-semibold p-3 rounded-[4px] bg-transparent hover:bg-primary hover:text-white transition-all w-full"
              >
                {{ article.buttonText }}
              </RouterLink>
            </div>
          </div>
        </div>

      </div>
      <div class="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-center gap-4 pt-10">

        <button
          v-if="displayedArticles.length < filteredAndSortedArticles.length"
          @click="showMore"
          class="cursor-pointer border border-primary text-primary bg-transparent text-[15px] font-semibold px-6 py-3 rounded-[4px] hover:bg-primary hover:text-white transition-all w-full sm:w-auto"
        >
          Show more
        </button>

        <button
          v-else-if="filteredAndSortedArticles.length > itemsPerPage"
          @click="showLess"
          class="cursor-pointer border border-primary text-primary bg-transparent text-[15px] font-semibold px-6 py-3 rounded-[4px] hover:bg-primary hover:text-white transition-all w-full sm:w-auto"
        >
          Show less
        </button>

        <button
          @click="scrollToFilter"
          class="cursor-pointer border border-primary text-primary bg-transparent text-[15px] font-semibold px-6 py-3 rounded-[4px] hover:bg-primary hover:text-white transition-all w-full sm:w-auto"
        >
          Back to filter
        </button>

      </div>
    </section>
  </div>
</template>
