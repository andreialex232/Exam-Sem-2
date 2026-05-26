<script setup>
// Mock data for 3 recommended cards from media page article-section
const relatedArticles = [
  {
    id: 'what-advisors-can-help-with',
    type: 'Interviews',
    labelBg: 'bg-cta text-white',
    title: 'What advisors can help with',
    buttonText: 'Watch interview'
  },
  {
    id: 'why-overview-matters-in-the-border-region',
    type: 'Insights',
    labelBg: 'bg-page-bg text-primary border border-grey',
    title: 'Why overview matters in the border region',
    buttonText: 'View insight'
  },
  {
    id: 'one-advice-for-companies-working-across',
    type: 'Shorts',
    labelBg: 'bg-primary text-white',
    title: 'One advice for companies working across the border',
    buttonText: 'Watch short'
  }
]
</script>

<template>
  <section class="w-full bg-card-surface border-t border-b border-grey py-12 md:py-[70px]">
    <div class="max-w-[1280px] mx-auto px-4 md:px-8">

      <div class="mb-8 md:mb-10">
        <span class="text-small-title text-support font-bold uppercase tracking-wider block mb-3">
          RELATED CONTENT
        </span>
        <h2 class="text-h2 text-primary font-bold leading-tight">
          Related news & insights
        </h2>
      </div>

      <div class="grid grid-cols-12 gap-6 md:gap-8 items-stretch">
        <div
          v-for="item in relatedArticles"
          :key="item.id"
          class="col-span-12 sm:col-span-6 lg:col-span-4 bg-white border-l border-r border-b border-grey border-t-[3px] border-t-grey rounded-sm overflow-hidden flex flex-col justify-between shadow-sm"
        >
          <div class="p-5 md:p-6 flex flex-col gap-4">

            <div>
              <span :class="item.labelBg" class="text-small-title px-3 py-1 rounded-[20px] uppercase font-bold tracking-wider inline-block">
                {{ item.type }}
              </span>
            </div>

            <h4 class="text-h4 text-primary font-bold leading-snug">
              {{ item.title }}
            </h4>
          </div>

          <div class="border-t border-grey p-5 md:p-6 bg-white">
            <RouterLink
              :to="{ name: 'article-detail', params: { id: item.id } }"
              class="cursor-pointer block text-center border border-primary text-primary text-base font-semibold p-3 rounded-[4px] bg-transparent hover:bg-primary hover:text-white transition-all w-full"
            >
              {{ item.buttonText }}
            </RouterLink>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
