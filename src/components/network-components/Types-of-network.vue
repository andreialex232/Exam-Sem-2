<script setup>
    import HeadingsTemplate from '../layout/Headings-template.vue';
    import useNetwork from '@/composables/useNetwork';

    const { networkTypes } = useNetwork();
</script>

<template>
    <div class="grid grid-cols-12 w-full bg-page-bg pt-20 pb-20">
        <div class="col-start-2 col-end-12">
            <HeadingsTemplate>
                <template #subtitle>
                    who can you find here?
                </template>
            
                <template #h2>
                    four types of <br>network actors
                </template>
            </HeadingsTemplate>


            <!-- Cards -->
            <div class="grid grid-cols-4 gap-[20px] pt-12">
                <div v-for="network in networkTypes" :key="network.id" class="flex flex-col bg-white border-sm p-5 gap-4">

                    <div>
                        <img 
                            :src="network.icon" 
                            class="w-10 h-10 p-2 bg-[#E863001F] rounded-[20px] object-contain" 
                            alt="Network Icon"/>
                        </img>
                    </div>
                    
                    <h3 class="text-h4 text-primary">{{ network.name }}</h3>
                    <p class="text-body text-secondary">{{ network.description }}</p>

                    <div class="inline-block border-top border-t-[1px] pt-4 border-[#E0E1DD]">
                        <button class="cursor-pointer text-accent">Filter by this &#8594;</button>
                    </div>

                </div>
            </div>




        </div>
    </div>
</template>
