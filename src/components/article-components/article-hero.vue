<script setup>
import { ref, onMounted } from 'vue'
import { articlesData } from '@/data/articles.js' // Import shared data

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const article = ref(null)

onMounted(() => {
  // Simple loop to find the correct article by ID in our data file
  for (let i = 0; i < articlesData.length; i++) {
    if (articlesData[i].id === props.id) {
      article.value = articlesData[i]
    }
  }

  // Fallback if no ID matched, so the page doesn't break
  if (article.value === null) {
    article.value = articlesData[0]
  }
})

// --- CLIPBOARD COPY ---
const copied = ref(false)
const copyToClipboard = () => {
  const dummyInput = document.createElement('input')
  dummyInput.value = window.location.href
  document.body.appendChild(dummyInput)
  dummyInput.select()
  document.execCommand('copy')
  document.body.removeChild(dummyInput)
  copied.value = true
  setTimeout(function() { copied.value = false }, 2000)
}
</script>

<template>
  <section v-if="article" class="w-full bg-card-surface border-t border-b border-grey pt-12 md:pt-[90px] pb-16 md:pb-24 px-6 lg:px-0">
    <div class="max-w-[1280px] mx-auto">

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
          src="https://picsum.photos/id/6/1100/500"
          alt="Article thumbnail placeholder"
          class="w-full h-full object-cover"
        />
      </div>

    </div>
  </section>
</template>
