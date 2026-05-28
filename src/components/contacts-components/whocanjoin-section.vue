<script setup>
import CardsWIcons from '../layout/Cards-w-icons.vue';
import HeroTemplate from '../layout/Hero-template.vue';
import workshop from "@/assets/svg/workshop.svg";
import advisors from "@/assets/svg/advisors.svg";
import partners from "@/assets/svg/partners.svg";
import institutions from "@/assets/svg/Institutions.svg";

const members = [
  {
    id: 1,
    name: 'Companies & members',
    description: 'Businesses active in or interested in cross-border cooperation.',
    icon: workshop
  },
  {
    id: 2,
    name: 'Advisors',
    description: 'People and organisations that guide companies on cross-border topics.',
    icon: advisors
  },
  {
    id: 3,
    name: 'Partner organisations',
    description: 'Regional actors supporting the Business DE-DK network.',
    icon: partners
  },
  {
    id: 4,
    name: 'Institutions',
    description: 'Public, educational or regional organisations connected to the ecosystem.',
    icon: institutions
  }
]
</script>

<template>
    <div class="grid grid-cols-12 w-full bg-page-bg pt-10 pb-10 md:pt-20 md:pb-20 px-6 lg:px-0">
        <div class="col-span-12 sm:col-start-2 sm:col-end-12 sm:px-0">
            <HeroTemplate>
                <template #subtitle>
                    who can you find here?
                </template>

                <template #h2>
                    Who can join?
                </template>
            </HeroTemplate>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] pt-2">
                <CardsWIcons v-for="member in members" :key="member.id" :card_image="member.icon">
                    <template #h3>
                        {{ member.name }}
                    </template>
                    <template #description>
                        {{ member.description }}
                    </template>

                    <template #filter>
                        Filter by this &#8594;
                    </template>
                </CardsWIcons>
            </div>

        </div>
    </div>
</template>
