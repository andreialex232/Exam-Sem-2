<script setup>
import { ref } from 'vue'

const faqs = ref([
  {
    id: 1,
    question: 'Who can join the network?',
    answer: 'Companies, advisors, partner organisations and institutions connected to cross-border business cooperation can contact Business DE-DK about joining.',
    isOpen: false
  },
  {
    id: 2,
    question: 'What happens after I send a request?',
    answer: 'Our team will review your information and get back to you within 2-3 business days to discuss the next steps and help you set up your profile.',
    isOpen: false
  },
  {
    id: 3,
    question: 'Will my organisation appear in the Network Database?',
    answer: 'Yes, once your request is approved and your profile details are finalized with our advisor, your organisation will be visibly listed in the database.',
    isOpen: false
  },
  {
    id: 4,
    question: 'Can I talk to someone before applying?',
    answer: 'Absolutely. You can use our contact form or reach out directly via email or phone to speak with one of our cross-border network advisors.',
    isOpen: false
  }
])

// opening/closing
const toggleFaq = (id) => {
  const item = faqs.value.find(f => f.id === id)
  if (item) {
    item.isOpen = !item.isOpen
  }
}
</script>

<template>
  <section class="w-full bg-card-surface py-12 md:py-[90px]">
    <div class="max-w-[1280px] mx-auto grid grid-cols-12">

      <div class="col-span-12 lg:col-span-10 lg:col-start-2 flex flex-col">

        <div class="mb-10 md:mb-14">
          <span class="text-small-title text-support font-bold uppercase tracking-wider block mb-3">
            FREQUENTLY ASKED
          </span>
          <h2 class="text-h3 md:text-h2 text-primary font-bold">
            Questions before joining
          </h2>
        </div>

        <div class="flex flex-col w-full">
          <div
            v-for="faq in faqs"
            :key="faq.id"
            class="border-b border-grey last:border-b-0"
          >
            <button
              @click="toggleFaq(faq.id)"
              class="w-full flex items-center justify-between text-left py-5 md:py-6 cursor-pointer group select-none bg-transparent border-none focus:outline-none"
            >
              <h3 class="text-base md:text-h4 text-primary font-bold pr-4 group-hover:text-cta transition-colors">
                {{ faq.question }}
              </h3>

              <div
                class="w-6 h-6 flex items-center justify-center text-primary flex-shrink-0 transition-transform duration-300 ease-in-out"
                :class="{ 'rotate-45': faq.isOpen }"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </button>

            <div
              v-show="faq.isOpen"
              class="pb-5 md:pb-6 transition-all duration-300 ease-in-out"
            >
              <p class="text-body text-secondary font-normal leading-relaxed max-w-[90%]">
                {{ faq.answer }}
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>
