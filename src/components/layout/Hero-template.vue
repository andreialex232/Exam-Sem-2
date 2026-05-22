<script setup>
import { RouterLink } from 'vue-router';

    defineProps({
        custom: {
            type: Boolean,
            default: false
        },
        cta_1_link: {
            type: String,
            default: ''
        },
        cta_2_link: {
            type: String,
            default: ''
        }
    });
</script>

<template>
    <header class="hero-section w-full">
        <div class="hero-container flex flex-col w-full">

            <!-- Subtitle -->
            <p v-if="$slots.subtitle" class="uppercase text-small-title text-support pb-3 md:pb-4">
                <slot name="subtitle"></slot>
            </p>
            <p v-if="custom && $slots['subtitle-custom']">
                <slot :baseClass="'uppercase text-small-title pb-3 md:pb-4'" name="subtitle-custom"></slot>
            </p>

            <!-- H1 -->
            <h1 v-if="$slots.h1" class="capitalize text-premium-bg text-h2 pb-4 md:text-h1 md:pb-8">
                <slot name="h1"></slot>
            </h1>
            <h1 v-if="custom && $slots['h1-custom']">
                <slot :baseClass="'capitalize text-h1 pb-4 md:pb-8'" name="h1-custom"></slot>
            </h1>

            <!-- H2 -->
            <h2 v-if="$slots.h2" class="text-h2 text-primary capitalize pb-4 md:pb-8">
                <slot name="h2"></slot>
            </h2>
            <h2 v-if="custom && $slots['h2-custom']">
                <slot :baseClass="'text-h2 capitalize pb-4 md:pb-8'" name="h2-custom"></slot>
            </h2>

            <!-- Description -->
            <p v-if="$slots['hero-description']" class="capitalize text-body md:text-standfirst text-secondary pb-6 md:pb-8">
                <slot name="hero-description"></slot>
            </p>
            <p v-if="custom && $slots['hero-description-custom']" class="capitalize text-standfirst text-secondary pb-6 md:pb-8">
                <slot :baseClass="'capitalize pb-6 md:pb-8'" name="hero-description-custom"></slot>
            </p>

            <!-- CTA -->
            <div v-if="$slots.cta1 && (($slots.cta2 && !custom) || ($slots['cta2-custom'] && custom))" class="flex w-full">

                <div class="flex flex-col sm:flex-row flex-wrap items-center w-full gap-4">

                    <!-- 1 -->
                    <RouterLink :to="cta_1_link" class="accent-btn w-full sm:w-auto text-center">
                        <slot name="cta1"></slot>
                    </RouterLink>

                    <!-- 2 -->
                    <RouterLink :to="cta_2_link" v-if="$slots.cta2 && !custom" class="secondary-btn w-full sm:w-auto text-center">
                        <slot name="cta2"></slot>
                    </RouterLink>

                    <slot 
                        v-if="custom && $slots['cta2-custom']" 
                        :baseClass="'cursor-pointer capitalize border-[1.6px] text-btn px-5 py-4 rounded-sm w-full sm:w-auto text-center'"
                        name="cta2-custom">
                    </slot>
                    
                </div>
            </div>

        </div>
    </header>
</template>