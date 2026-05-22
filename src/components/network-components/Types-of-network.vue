<script setup>
    import HeroTemplate from '../layout/Hero-template.vue';
    import useNetwork from '@/composables/useNetwork';
    import CardsWIcons from '../layout/Cards-w-icons.vue';
    const { networkTypes } = useNetwork();
</script>

<template>
    <div class="grid grid-cols-12 w-full bg-page-bg pt-10 pb-10 md:pt-20 md:pb-20">
        <div class="col-span-12 px-4 sm:col-start-2 sm:col-end-12 sm:px-0">
            <HeroTemplate>
                <template #subtitle>
                    who can you find here?
                </template>
            
                <template #h2>
                    four types of <br>network actors
                </template>
            </HeroTemplate>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] pt-12">
                <CardsWIcons v-for="network in networkTypes" :key="network.id" :card_image="network.icon">
                    <template #h3>
                        {{ network.name }}
                    </template>
                    <template #description>
                        {{ network.description }}
                    </template>
                    <template #filter>
                        Filter by this &#8594;
                    </template>
                </CardsWIcons>
            </div>
            
            

        </div>
    </div>
</template>