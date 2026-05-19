<script setup>
import { ref } from 'vue'

// Fields with data for individual events
const events = ref([
  {
    id: 1,
    day: '12',
    month: 'Jun',
    category: 'Workshop',
    isPrimaryCategory: false, // determines the label color (false = gray, true = dark)
    title: 'Cross-border networking workshop',
    details: 'DA / EN · 08:30–16:00',
    location: 'Kolding, Denmark',
    actionText: 'Register →',
    isPrimaryAction: true // determines the button color (true = orange, false = outlined)
  },
  {
    id: 2,
    day: '22',
    month: 'Jun',
    category: 'Business Breakfast',
    isPrimaryCategory: true,
    title: 'Business breakfast: recruitment across the border',
    details: 'DE / EN',
    location: 'Flensburg, Germany',
    actionText: 'View event',
    isPrimaryAction: false
  }
])
</script>

<template>
  <section class="w-full bg-card-surface py-[90px]">
    <div class="max-w-[1280px] mx-auto px-4">

      <div class="mb-12 flex justify-between items-center w-full">
        <h2 class="text-h2 text-primary font-bold">
          Upcoming events
        </h2>
        <button class="cursor-pointer border-[1.6px] border-primary text-primary font-semibold text-[15px] px-6 py-3 rounded-sm hover:bg-primary hover:text-white transition-colors">
          See all events
        </button>
      </div>

      <div class="grid grid-cols-12 gap-8 border-t border-b border-[#E0E1DD] py-4 text-[11px] font-bold uppercase tracking-wider">
        <div class="col-span-1">Date</div>
        <div class="col-span-7 pl-4">Event</div>
        <div class="col-span-2 pl-[17px]">Location</div>
        <div class="col-span-1"></div>
      </div>

      <div
        v-for="event in events"
        :key="event.id"
        class="grid grid-cols-12 gap-8 items-center border-b border-[#E0E1DD] py-8"
      >
        <div class="col-span-1 text-center md:text-left">
          <span class="text-[42px] font-bold text-primary block leading-none">{{ event.day }}</span>
          <span class="text-sm font-semibold text-cta uppercase tracking-wide">{{ event.month }}</span>
        </div>

        <div class="col-span-7 border-l border-[#E0E1DD] pl-4 flex flex-col gap-1.5">
          <span
            :class="[
              event.isPrimaryCategory ? 'bg-primary text-white' : 'bg-page-bg text-primary',
              'self-start text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full'
            ]"
          >
            {{ event.category }}
          </span>
          <h3 class="text-h4 text-primary font-semibold">
            {{ event.title }}
          </h3>
          <p class="text-[14px] font-semibold text-support">
            {{ event.details }}
          </p>
        </div>

        <div class="col-span-2 flex items-center h-full gap-4 relative">

          <div class="h-[60px] w-[1px] bg-[#E0E1DD] flex-shrink-0"></div>

          <div class="flex items-center gap-1.5 text-[13px] text-support">
            <span>📍 {{ event.location }}</span>
          </div>

        </div>

        <div class="col-span-2 flex justify-end">
          <button
            :class="[
              event.isPrimaryAction
                ? 'bg-cta font-semibold text-white text-[15px] hover:bg-[#e05e00]'
                : 'border-[1.6px] border-primary text-primary font-semibold text-[15px] hover:bg-primary hover:text-white',
              'w-full cursor-pointer py-3 rounded-sm text-center transition-colors max-w-[135px]'
            ]"
          >
            {{ event.actionText }}
          </button>
        </div>
      </div>

    </div>
  </section>
</template>
