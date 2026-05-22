<script setup>
    defineProps({
        card_image: {
            type: String,
            required: true
        },
    });
</script>
<template>
    <div class="flex flex-col h-full bg-white border-sm p-5 gap-4">
        <div>
            <img 
                :src="card_image" 
                class="w-10 h-10 p-2 bg-[#E863001F] rounded-[20px] object-contain" 
                alt=""
                aria-hidden="true"/>
        </div>

        <h3 class="text-h4 text-primary">
            <slot name="h3"></slot>
        </h3>

        <p class="text-body text-secondary">
            <slot name="description"></slot>
        </p>

        <div v-if="$slots.filter" class="block mt-auto border-top border-t-[1px] pt-4 border-[#E0E1DD]">
            <button class="cursor-pointer text-accent">
                <slot name="filter"></slot>
            </button>
        </div>

    </div>
</template>
