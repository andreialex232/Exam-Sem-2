<script setup>
import { ref, onMounted } from 'vue'

// We receive the article ID from the URL as a prop from the router
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})


// Reactive state to save current article data
const article = ref(null)

// In a real application, you would fetch from an API or Pinia store here.
// For demonstration, we'll create a mock database that contains the exact data from our cards.
const articlesDatabase = [
  {
    id: 'from-local-contact-to-cross-border',
    type: 'Case',
    labelBg: 'bg-secondary text-white',
    date: '13 May 2026',
    lang: 'DK',
    topic: 'Onboarding / International workforce',
    author: 'Example Company',
    title: 'From local contact to cross-border cooperation',
    leadText: 'See how one organisation used the network to build new connections and foster sustainable trade partnerships.'
  },
  {
    id: 'what-advisors-can-help-with',
    type: 'Interview',
    labelBg: 'bg-cta text-white',
    date: '13 May 2026',
    lang: 'EN',
    topic: 'Onboarding / International workforce',
    author: 'Example Company',
    title: 'When onboarding becomes a whole experience',
    leadText: 'How can companies help international employees feel safe, included and connected — not only at work, but also in the local community?'
  }
  // ... Then you add the IDs of the remaining cards here so that the correct texts are loaded.
]

onMounted(() => {
  // We search our mock database for the correct article by ID from props
  const found = articlesDatabase.find(item => item.id === props.id)
  if (found) {
    article.value = found
  } else {
    // Fallback for testing – if ID is not found, generate data from your screenshot
    article.value = {
      type: 'Interview',
      labelBg: 'bg-cta text-white',
      date: '13 May 2026',
      lang: 'EN',
      topic: 'Onboarding / International workforce',
      author: 'Example Company',
      title: 'When onboarding becomes a whole experience',
      leadText: 'How can companies help international employees feel safe, included and connected — not only at work, but also in the local community?'
    }
  }
})

const copied = ref(false)

const copyToClipboard = async () => {
  try {
    // Copies the complete current URL from the address bar
    await navigator.clipboard.writeText(window.location.href)

    // Changes state to true (toggles text in button)
    copied.value = true

    // After 2 seconds, revert text back to original value
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy URL: ', err)
  }
}
</script>

<template>
  <section v-if="article" class="w-full bg-card-surface border-t border-b border-grey pt-12 md:pt-[90px] pb-16 md:pb-24">
    <div class="max-w-[1280px] mx-auto px-4 md:px-8">

      <div class="grid grid-cols-12 gap-6 items-start mb-10 md:mb-14">

        <div class="col-span-12 lg:col-span-10 max-w-[850px] w-full">

          <div class="flex flex-wrap items-center gap-x-3 gap-y-2 mb-6 text-[14px] text-support font-normal">
            <span :class="article.labelBg" class="text-small-title px-4 py-1.5 rounded-[20px] uppercase font-bold tracking-wider inline-block">
              {{ article.type }}
            </span>

            <span>·</span>
            <span>{{ article.date }}</span>
            <span>·</span>
            <span class="uppercase">{{ article.lang }}</span>
            <span>·</span>
            <span>{{ article.topic }}</span>
            <span>·</span>
            <span>{{ article.author }}</span>
          </div>

          <h1 class="text-h2 md:text-h1 text-primary font-bold leading-tight mb-6 md:mb-8">
            {{ article.title }}
          </h1>

          <p class="text-body md:text-standfirst text-secondary font-normal leading-relaxed">
            {{ article.leadText }}
          </p>

        </div>

        <div class="col-span-12 lg:col-span-2 lg:justify-self-end w-full lg:w-auto">
          <button
            @click="copyToClipboard"
            :class="copied ? 'border-cta bg-cta/10 text-cta' : 'border-grey bg-page-bg text-primary hover:bg-grey/20'"
            class="cursor-pointer flex items-center justify-center gap-2 border rounded-[4px] px-4 py-2.5 w-full lg:w-auto transition-all"
          >
            <img v-if="!copied" src="@/assets/svg/share.svg" alt="Share icon" class="w-4 h-4 select-none" />

            <span class="text-[13px] lg:text-[14px] font-semibold whitespace-nowrap">
              {{ copied ? 'Copied!' : 'Share content' }}
            </span>
          </button>
        </div>

      </div>

      <div class="max-w-[1100px] w-full mx-auto aspect-[1100/500] bg-primary rounded-[4px] overflow-hidden shadow-sm">
        <img
          src="https://picsum.photos/1100/500"
          alt="Article thumbnail placeholder"
          class="w-full h-full object-cover"
        />
      </div>

    </div>
  </section>

  <section v-else class="w-full bg-card-surface py-24 text-center">
    <p class="text-body text-secondary">Article not found</p>
  </section>
</template>
