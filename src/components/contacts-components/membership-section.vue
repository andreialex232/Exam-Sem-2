<script setup>
import { ref } from 'vue'

const profileType = ref('')
</script>

<template>
  <section id="membership-form-section" class="w-full bg-white py-12 md:py-[90px] px-6 lg:px-0">
    <div class="max-w-[1280px] mx-auto">

      <div class="mb-10 md:mb-14">
        <span class="text-small-title text-support font-bold uppercase tracking-wider block mb-3">
          MEMBERSHIP REQUEST
        </span>
        <h2 class="text-3xl md:text-h2 text-primary font-bold leading-tight mb-4">
          Start membership request
        </h2>
        <p class="text-[15px] md:text-body text-secondary font-normal leading-relaxed">
          Fill in the basic information below. The Business DE-DK team can contact <br>you before anything is published.
        </p>
      </div>

      <div class="grid grid-cols-12 gap-8 lg:gap-16 items-start">

        <form @submit.prevent class="col-span-12 lg:col-span-7 flex flex-col gap-5" novalidate>

          <div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-2">
              <div class="flex flex-col gap-2">
                <label for="request-org" class="text-small-title text-support font-bold uppercase tracking-wider">
                  ORGANISATION NAME
                </label>
                <input
                  id="request-org"
                  type="text"
                  placeholder="Your organisation"
                  class="w-full border border-grey rounded-[4px] sm:rounded-r-none p-3.5 text-[15px] text-primary placeholder-premium-bg/50 focus:outline-none focus:border-primary focus:z-10 relative transition-colors"
                />
              </div>
              <div class="flex flex-col gap-2 sm:-ml-[1px]">
                <label for="request-name" class="text-small-title text-support font-bold uppercase tracking-wider sm:pl-4">
                  CONTACT PERSON
                </label>
                <input
                  id="request-name"
                  type="text"
                  placeholder="Full name"
                  class="w-full border border-grey rounded-[4px] sm:rounded-l-none p-3.5 text-[15px] text-primary placeholder-premium-bg/50 focus:outline-none focus:border-primary focus:z-10 relative transition-colors"
                />
              </div>
            </div>
          </div>

          <div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-2">
              <div class="flex flex-col gap-2">
                <label for="request-email" class="text-small-title text-support font-bold uppercase tracking-wider">
                  EMAIL
                </label>
                <input
                  id="request-email"
                  type="email"
                  placeholder="email@example.com"
                  class="w-full border border-grey rounded-[4px] sm:rounded-r-none p-3.5 text-[15px] text-primary placeholder-premium-bg/50 focus:outline-none focus:border-primary focus:z-10 relative transition-colors"
                />
              </div>
              <div class="flex flex-col gap-2 sm:-ml-[1px]">
                <label for="request-phone" class="text-small-title text-support font-bold uppercase tracking-wider sm:pl-4">
                  PHONE
                </label>
                <input
                  id="request-phone"
                  type="text"
                  placeholder="+45 / +49..."
                  class="w-full border border-grey rounded-[4px] sm:rounded-l-none p-3.5 text-[15px] text-primary placeholder-premium-bg/50 focus:outline-none focus:border-primary focus:z-10 relative transition-colors"
                />
              </div>
            </div>
          </div>

          <div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-2">
              <div class="flex flex-col gap-2">
                <label for="request-country" class="text-small-title text-support font-bold uppercase tracking-wider">
                  COUNTRY
                </label>
                <input
                  id="request-country"
                  type="text"
                  class="w-full border border-grey rounded-[4px] sm:rounded-r-none p-3.5 text-[15px] text-primary focus:outline-none focus:border-primary focus:z-10 relative transition-colors"
                />
              </div>
              <div class="flex flex-col gap-2 sm:-ml-[1px]">
                <label for="request-profile-type" class="text-small-title text-support font-bold uppercase tracking-wider sm:pl-4">
                  PROFILE TYPE
                </label>
                <div class="relative w-full">
                  <select
                    id="request-profile-type"
                    v-model="profileType"
                    class="w-full border border-grey rounded-[4px] sm:rounded-l-none p-3.5 text-[15px] text-primary bg-white appearance-none focus:outline-none focus:border-primary focus:z-10 relative transition-colors cursor-pointer pr-10"
                  >
                    <option value="" disabled selected></option>
                    <option value="partner">Companies & member</option>
                    <option value="company">Advisor</option>
                    <option value="advisor">Partner organisation</option>
                    <option value="institution">Institution</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-support z-20" aria-hidden="true">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <label for="request-website" class="text-small-title text-support font-bold uppercase tracking-wider">
              WEBSITE
            </label>
            <input
              id="request-website"
              type="url"
              placeholder="https://..."
              class="w-full border border-grey rounded-[4px] p-3.5 text-[15px] text-primary placeholder-premium-bg/50 focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label for="request-message" class="text-small-title text-support font-bold uppercase tracking-wider">
              MESSAGE
            </label>
            <textarea
              id="request-message"
              rows="5"
              placeholder="Tell us about your organisation and why you want to join..."
              class="w-full border border-grey rounded-[4px] p-3.5 text-[15px] text-primary placeholder-premium-bg/50 focus:outline-none focus:border-primary transition-colors resize-none"
            ></textarea>
          </div>

          <div class="flex items-start gap-3 pt-2">
            <input
              type="checkbox"
              id="consent"
              class="w-4 h-4 mt-1 border border-grey rounded-[2px] cursor-pointer accent-primary"
            />
            <label for="consent" class="text-[14px] text-secondary font-normal leading-relaxed cursor-pointer select-none">
              I asked the Business DE-DK to contact me about joining the network.
            </label>
          </div>

          <div class="flex flex-col items-center sm:flex-row gap-6 pt-4 w-full">
            <button
              type="submit"
              class="cursor-pointer bg-cta text-white font-bold text-base px-6 py-3.5 rounded-[4px] hover:bg-[#e05e00] transition-colors text-center w-full sm:w-auto inline-block"
            >
              Send request
            </button>

            <RouterLink
              to="#"
              class="cursor-pointer text-[14px] text-support underline hover:text-primary transition-colors font-medium text-center"
            >
              I want to talk to someone first
            </RouterLink>
          </div>

        </form>

        <div class="hidden lg:block col-span-1"></div>

        <div class="col-span-12 lg:col-span-4 bg-page-bg border border-grey rounded-sm p-6 md:p-8 flex flex-col gap-5">
          <div class="pb-3 border-b border-grey">
            <span class="text-small-title text-support font-bold uppercase tracking-wider block">
              WHAT HAPPENS NEXT
            </span>
          </div>

          <ul class="flex flex-col gap-5">
            <li class="flex items-start gap-3 text-body text-primary font-normal leading-relaxed">
              <span class="w-2 h-2 rounded-full bg-cta mt-2 flex-shrink-0" aria-hidden="true"></span>
              <span>Your request is received by the Business DE-DK team</span>
            </li>
            <li class="flex items-start gap-3 text-body text-primary font-normal leading-relaxed">
              <span class="w-2 h-2 rounded-full bg-cta mt-2 flex-shrink-0" aria-hidden="true"></span>
              <span>The team reviews your information</span>
            </li>
            <li class="flex items-start gap-3 text-body text-primary font-normal leading-relaxed">
              <span class="w-2 h-2 rounded-full bg-cta mt-2 flex-shrink-0" aria-hidden="true"></span>
              <span>You will be contacted before anything is published</span>
            </li>
            <li class="flex items-start gap-3 text-body text-primary font-normal leading-relaxed">
              <span class="w-2 h-2 rounded-full bg-cta mt-2 flex-shrink-0" aria-hidden="true"></span>
              <span>Nothing is shared without your approval</span>
            </li>
          </ul>
        </div>

      </div>

    </div>
  </section>
</template>
