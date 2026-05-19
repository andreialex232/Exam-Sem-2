<script setup>
import homeHeroImage from "@/assets/images/home-hero.jpg";
import HeroTemplate from '../layout/Hero-template.vue';
</script>

<template>
  <section class="w-full bg-card-surface">
    <div class="grid max-w-[1280px] grid-cols-12 gap-8  h-[895px] bg-card-surface mx-auto">
      <div class="col-span-7 flex flex-col justify-center">
        <HeroTemplate cta_1_link="/network" cta_2_link="/contact" class="col-start-2 col-end-6">
              <template #subtitle>
                  Danish–German Business Network
              </template>

              <template #h1>
                  Connect across <br>the Danish–<br>German <br>border
              </template>

              <template #hero-description>
                  Find companies, advisors and organisations working across Southern Denmark and Northern Germany. One platform. Real connections.
              </template>

              <template #cta1>
                  Explore the Network &#8594;
              </template>

              <template #cta2>
                  Browse Cases
              </template>

      </HeroTemplate>
        <div class="col-span-6 flex flex-row gap-10 mt-[60px] items-center">
          <div>
            <h4 class="text-h4 text-primary">
              Interreg
            </h4>
            <p class="text-body-sm uppercase text-support">
              Programme
            </p>
          </div>

          <div class="h-10 w-[1px] bg-[#E0E1DD]"></div>

          <div>
            <h4 class="text-h4 text-primary">
              Across
            </h4>
            <p class="text-body-sm uppercase text-support">
              the border
            </p>
          </div>

          <div class="h-10 w-[1px] bg-[#E0E1DD]"></div>

          <div>
            <h4 class="text-h4 text-primary">
              DK + DE
            </h4>
            <p class="text-body-sm uppercase text-support">
              Countries
            </p>
          </div>

          <div class="h-10 w-[1px] bg-[#E0E1DD]"></div>

          <div>
            <h4 class="text-h4 text-primary">
              Network
            </h4>
            <p class="text-body-sm uppercase text-support">
              Platform
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute top-[62px] bottom-0 left-[57.5%] max-h-[895px] right-0 z-0 hidden md:block">
      <img
        :src="homeHeroImage"
        alt="Business meeting"
        class="w-full h-full object-cover object-center block"
      />
    </div>
  </section>
</template>
