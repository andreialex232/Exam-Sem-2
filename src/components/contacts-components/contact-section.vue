<script setup>
import { ref } from 'vue'

const topic = ref('')
const language = ref('')
</script>

<template>
  <section id="contact-section" class="w-full bg-card-surface border-t border-b border-grey py-12 md:py-[90px]">
    <div class="max-w-[1280px] mx-auto">

      <div class="mb-10 md:mb-16">
        <span class="text-small-title text-support font-bold uppercase tracking-wider block mb-3">
          CONTACT US
        </span>
        <h2 class="text-h3 md:text-h2 text-primary font-bold">
          Contact Business DE-DK
        </h2>
      </div>

      <div class="grid grid-cols-12 gap-8 items-start">

        <div class="col-span-12 md:col-span-4 flex flex-col w-full">

          <div class="flex justify-between items-baseline py-4 border-b border-grey">
            <span class="text-small-title text-support font-bold uppercase tracking-wider">
              EMAIL
            </span>
            <a href="mailto:lecba@toender.dk" class="text-body text-cta font-medium hover:underline cursor-pointer">
              lecba@toender.dk
            </a>
          </div>

          <div class="flex justify-between items-baseline py-4 border-b border-grey">
            <span class="text-small-title text-support font-bold uppercase tracking-wider">
              PHONE
            </span>
            <span class="text-body text-primary font-normal">
              +45 21 77 59 16
            </span>
          </div>

          <div class="flex justify-between items-baseline py-4 border-b border-grey">
            <span class="text-small-title text-support font-bold uppercase tracking-wider">
              ADDRESS
            </span>
            <span class="text-body text-primary font-normal text-right">
              Vestergade 9 6270 Tønder
            </span>
          </div>

          <div class="flex justify-between items-start py-4 border-b border-grey">
            <span class="text-small-title text-support font-bold uppercase tracking-wider">
              OPENING HOURS
            </span>
            <div class="flex flex-col items-end text-body text-primary font-normal gap-1">
              <span>Mon–Fri 08.30–16.00</span>
              <span>Mon–Fri 08.30–16.00</span>
              <span>Mon–Fri 08.30–16.00</span>
            </div>
          </div>

        </div>

        <div class="hidden md:block col-span-1"></div>

        <div class="col-span-12 md:col-span-7 bg-white border border-grey rounded-[4px] p-6 md:p-8">
          <form @submit.prevent class="flex flex-col gap-5" novalidate>

            <div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 sm:gap-y-0">
                <div class="flex flex-col gap-2">
                  <label class="text-small-title text-support font-bold uppercase tracking-wider">
                    NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    class="w-full border border-grey rounded-[4px] sm:rounded-r-none p-3.5 text-body text-primary placeholder-premium-bg/50 focus:outline-none focus:border-primary focus:z-10 relative transition-colors"
                  />
                </div>
                <div class="flex flex-col gap-2 sm:-ml-[1px]">
                  <label class="text-small-title text-support font-bold uppercase tracking-wider sm:pl-4">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    class="w-full border border-grey rounded-[4px] sm:rounded-l-none p-3.5 text-body text-primary placeholder-premium-bg/50 focus:outline-none focus:border-primary focus:z-10 relative transition-colors"
                  />
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-small-title text-support font-bold uppercase tracking-wider">
                ORGANISATION
              </label>
              <input
                type="text"
                placeholder="Your organisation"
                class="w-full border border-grey rounded-[4px] p-3.5 text-body text-primary placeholder-premium-bg/50 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 sm:gap-y-0">
                <div class="flex flex-col gap-2">
                  <label class="text-small-title text-support font-bold uppercase tracking-wider">
                    TOPIC
                  </label>
                  <div class="relative w-full">
                    <select
                      v-model="topic"
                      class="w-full border border-grey rounded-[4px] sm:rounded-r-none p-3.5 text-body text-primary bg-white appearance-none focus:outline-none focus:border-primary focus:z-10 relative transition-colors cursor-pointer pr-10"
                    >
                      <option value="" disabled selected></option>
                      <option value="membership">Membership</option>
                      <option value="events">Events & Workshops</option>
                      <option value="other">Other question</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-support z-20">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col gap-2 sm:-ml-[1px]">
                  <label class="text-small-title text-support font-bold uppercase tracking-wider sm:pl-4">
                    LANGUAGE
                  </label>
                  <div class="relative w-full">
                    <select
                      v-model="language"
                      class="w-full border border-grey rounded-[4px] sm:rounded-l-none p-3.5 text-body text-primary bg-white appearance-none focus:outline-none focus:border-primary focus:z-10 relative transition-colors cursor-pointer pr-10"
                    >
                      <option value="" disabled selected></option>
                      <option value="da">Dansk</option>
                      <option value="de">Deutsch</option>
                      <option value="en">English</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-support z-20">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label class="text-small-title text-support font-bold uppercase tracking-wider">
                MESSAGE
              </label>
              <textarea
                rows="5"
                placeholder="Your message..."
                class="w-full border border-grey rounded-[4px] p-3.5 text-body text-primary placeholder-premium-bg/50 focus:outline-none focus:border-primary transition-colors resize-none"
              ></textarea>
            </div>

            <div class="pt-2">
              <button
                type="submit"
                class="cursor-pointer w-full bg-cta text-white font-semibold text-[15px] p-4 rounded-[4px] hover:bg-[#e05e00] transition-colors text-center block"
              >
                Send message
              </button>
            </div>

          </form>
        </div>

      </div>

    </div>
  </section>
</template>
