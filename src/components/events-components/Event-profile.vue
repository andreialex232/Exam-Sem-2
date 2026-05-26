<script setup>
import HeroTemplate from '../layout/Hero-template.vue';


</script>

<template>
    <div class="bg-card-surface grid grid-cols-12 gap-4 py-20">
        
        <div class="col-start-2 col-end-7 flex flex-col gap-6 text-white">
            <div>
                <p class="text-small-title px-3 bg-premium-bg py-1.5 inline-block rounded-full uppercase">
                    business breakfast
                </p>
            </div>
        
            <HeroTemplate cta_1_link="" cta_2_link="">
                <template #h1>
                    Recruitment across the border
                </template>
                <template #hero-description>
                    A practical business breakfast for companies that want to understand international recruitment, onboarding and cross-border workforce opportunities.
                </template>
            </HeroTemplate>
        </div>

        <div class="bg-white col-start-8 col-end-11 border border-gray-200 rounded-sm p-6 flex flex-col justify-between min-h-[500px]">
            
            <div class="uppercase pb-4 border-b border-gray-100">
                <p class="text-small-title text-support tracking-wider font-semibold">practical information</p>
            </div>

            <div class="flex-1 flex flex-col justify-between py-2">
                <div class="flex justify-between items-center py-3 border-b border-gray-100">
                    <p class="body-regular text-support capitalize">date</p>
                    <p class="text-[16px] font-[700] text-premium-bg">20 june</p>
                </div>
                <div class="flex justify-between items-center py-3 border-b border-gray-100">
                    <p class="body-regular text-support capitalize">time</p>
                    <p class="text-[16px] font-[700] text-premium-bg">08:30 - 10:45</p>
                </div>
                <div class="flex justify-between items-center py-3 border-b border-gray-100">
                    <p class="body-regular text-support capitalize">location</p>
                    <p class="text-[16px] font-[700] text-premium-bg">Flensburg, Germany</p>
                </div>
                <div class="flex justify-between items-center py-3 border-b border-gray-100">
                    <p class="body-regular text-support capitalize">language</p>
                    <p class="text-[16px] font-[700] text-premium-bg">DE / EN</p>
                </div>
                <div class="flex justify-between items-start py-3 pb-6">
                    <p class="body-regular text-support capitalize pt-0.5">host</p>
                    <p class="text-[16px] font-[700] text-premium-bg text-right max-w-[60%]">Labour Market Partner</p>
                </div>

                <div class="capitalize flex flex-col gap-3 pt-4">
                    <RouterLink class="accent-btn text-center block w-full py-3">register</RouterLink>
                    <RouterLink class="secondary-btn text-center block w-full py-3">contact organizer</RouterLink>
                </div>
                
            </div>
        </div>
    </div>



    <!-- who is this for  -->
    <div class="grid grid-cols-12 gap-8 my-20">
        
        <div class="col-start-2 col-end-7 flex flex-col gap-12">
            
            <div class="flex flex-col gap-3">
                <h2 class="text-2xl font-bold">Who is this for?</h2>
                <p class="body-regular text-support">
                    Companies, employers, advisors and partner organisations working with recruitment or workforce attraction.
                </p>
            </div>

            <div class="flex flex-col gap-4">
                <h2 class="text-2xl font-bold">What will you learn?</h2>
                <ul class="flex flex-col gap-3">
                    <li class="flex items-start gap-2">
                        <span>—</span>
                        <p class="body-regular text-support">How cross-border recruitment can support local companies</p>
                    </li>
                    <li class="flex items-start gap-2">
                        <span>—</span>
                        <p class="body-regular text-support">Which advisors and partners can help</p>
                    </li>
                    <li class="flex items-start gap-2">
                        <span>—</span>
                        <p class="body-regular text-support">What practical onboarding topics companies should consider</p>
                    </li>
                </ul>
            </div>

            <div class="flex flex-col gap-4">
                <h2 class="text-2xl font-bold">Programme</h2>
                
                <div class="border border-gray-200 rounded-sm overflow-hidden flex flex-col">
                    
                    <div class="grid grid-cols-12 items-center bg-card-surface-alt py-4 px-6 border-b border-gray-200">
                        <p class="col-span-2 font-semibold text-support-alt">08:30</p>
                        <p class="col-span-10 font-medium">Arrival and breakfast</p>
                    </div>
                    
                    <div class="grid grid-cols-12 items-center bg-white py-4 px-6 border-b border-gray-200">
                        <p class="col-span-2 font-semibold text-support-alt">09:00</p>
                        <p class="col-span-10 font-medium">Welcome by Business DE-DK</p>
                    </div>
                    
                    <div class="grid grid-cols-12 items-center bg-card-surface-alt py-4 px-6 border-b border-gray-200">
                        <p class="col-span-2 font-semibold text-support-alt">09:15</p>
                        <p class="col-span-10 font-medium">Short presentation: recruitment and onboarding</p>
                    </div>
                    
                    <div class="grid grid-cols-12 items-center bg-white py-4 px-6 border-b border-gray-200">
                        <p class="col-span-2 font-semibold text-support-alt">09:45</p>
                        <p class="col-span-10 font-medium">Partner examples</p>
                    </div>
                    
                    <div class="grid grid-cols-12 items-center bg-card-surface-alt py-4 px-6 border-b border-gray-200">
                        <p class="col-span-2 font-semibold text-support-alt">10:15</p>
                        <p class="col-span-10 font-medium">Networking</p>
                    </div>
                    
                    <div class="grid grid-cols-12 items-center bg-white py-4 px-6">
                        <p class="col-span-2 font-semibold text-support-alt">10:45</p>
                        <p class="col-span-10 font-medium">Closing</p>
                    </div>

                </div>
            </div>
        </div>

        <div class="col-start-7 col-end-2 flex flex-col gap-6">
            
            <div class="uppercase">
                <p class="text-support text-small-title">related content</p>
            </div>

            <div class="border border-[#E0E1DD] rounded-sm p-6 flex flex-col gap-4 items-start min-w-[150px]">
                <span class="text-small-title text-support px-3 py-1.5 rounded-full uppercase bg-page-bg border border-premium-bg">
                    related case
                </span>
                <h3 class="text-h4 text-premium-bg">
                    Supporting international recruitment in practice
                </h3>
                <RouterLink to="" class="mt-2 inline-flex items-center gap-1 text-accent font-[700]">
                    Read case <span>&rarr;</span>
                </RouterLink>
            </div>

            <div class="border border-[#E0E1DD] rounded-sm p-6 flex flex-col gap-4 items-start min-w-[150px]">
                <span class="text-small-title text-support px-3 py-1.5 rounded-full uppercase bg-page-bg border border-premium-bg">
                    related case
                </span>
                <h3 class="text-h4 text-premium-bg">
                    Supporting international recruitment in practice
                </h3>
                <RouterLink to="" class="mt-2 inline-flex items-center gap-1 text-accent font-[700]">
                    Read case <span>&rarr;</span>
                </RouterLink>
            </div>

        </div>
    </div>





    <!-- upcoming events -->
    <div class="grid grid-cols-12 gap-y-10 my-20">
        
        <div class="col-start-2 col-end-12 flex justify-between items-end border-b border-gray-100 pb-4">
            <div class="flex flex-col gap-2">
                <span class="text-xs uppercase tracking-wider font-semibold text-support">More events</span>
                <h2 class="text-3xl font-bold">Other upcoming events</h2>
            </div>
            
            <div>
                <RouterLink to="" class="accent-link font-bold flex items-center gap-1 whitespace-nowrap">
                    See all events <span>&rarr;</span>
                </RouterLink>
            </div>
        </div>

        <div class="col-start-2 col-end-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div class="bg-white border border-gray-200 rounded-sm p-6 flex flex-col justify-between min-h-[280px]">
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-3 flex flex-col items-center justify-start text-center">
                        <span class="text-3xl font-bold leading-none">12</span>
                        <span class="text-xs uppercase font-bold tracking-wider text-support mt-1">Jun</span>
                    </div>
                    
                    <div class="col-span-9 flex flex-col gap-3 items-start">
                        <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wide bg-orange-100 text-orange-700">
                            Workshop
                        </span>
                        <h3 class="text-lg font-bold leading-snug">
                            Cross-border networking workshop
                        </h3>
                        <div class="flex flex-col gap-1 text-sm text-support mt-2">
                            <span class="flex items-center gap-1.5">📍 Kolding, Denmark</span>
                            <span class="flex items-center gap-1.5">🌐 DA / EN</span>
                        </div>
                    </div>
                </div>

                <div class="flex items-center gap-6 pt-6 mt-4 border-t border-gray-100">
                    <RouterLink to="" class="font-bold text-orange-600 flex items-center gap-1">
                        Register <span>&rarr;</span>
                    </RouterLink>
                    <RouterLink to="" class="text-sm text-support hover:underline">
                        View details
                    </RouterLink>
                </div>
            </div>

            <div class="bg-white border border-gray-200 rounded-sm p-6 flex flex-col justify-between min-h-[280px]">
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-3 flex flex-col items-center justify-start text-center">
                        <span class="text-3xl font-bold leading-none">25</span>
                        <span class="text-xs uppercase font-bold tracking-wider text-support mt-1">Jun</span>
                    </div>
                    
                    <div class="col-span-9 flex flex-col gap-3 items-start">
                        <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wide bg-slate-900 text-white">
                            Webinar
                        </span>
                        <h3 class="text-lg font-bold leading-snug">
                            How advisors can support companies
                        </h3>
                        <div class="flex flex-col gap-1 text-sm text-support mt-2">
                            <span class="flex items-center gap-1.5">📍 Online</span>
                            <span class="flex items-center gap-1.5">🌐 DA / EN</span>
                        </div>
                    </div>
                </div>

                <div class="flex items-center gap-6 pt-6 mt-4 border-t border-gray-100">
                    <RouterLink to="" class="font-bold text-orange-600 flex items-center gap-1">
                        Register <span>&rarr;</span>
                    </RouterLink>
                    <RouterLink to="" class="text-sm text-support hover:underline">
                        View details
                    </RouterLink>
                </div>
            </div>

            <div class="bg-white border border-gray-200 rounded-sm p-6 flex flex-col justify-between min-h-[280px]">
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-3 flex flex-col items-center justify-start text-center">
                        <span class="text-3xl font-bold leading-none">28</span>
                        <span class="text-xs uppercase font-bold tracking-wider text-support mt-1">Jun</span>
                    </div>
                    
                    <div class="col-span-9 flex flex-col gap-3 items-start">
                        <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wide bg-blue-100 text-blue-800">
                            Business Fair
                        </span>
                        <h3 class="text-lg font-bold leading-snug">
                            Meet Business DE-DK at the regional business fair
                        </h3>
                        <div class="flex flex-col gap-1 text-sm text-support mt-2">
                            <span class="flex items-center gap-1.5">📍 Sønderborg, Denmark</span>
                            <span class="flex items-center gap-1.5">🌐 DA / DE / EN</span>
                        </div>
                    </div>
                </div>

                <div class="flex items-center gap-6 pt-6 mt-4 border-t border-gray-100">
                    <RouterLink to="" class="font-bold text-orange-600 flex items-center gap-1">
                        Register <span>&rarr;</span>
                    </RouterLink>
                    <RouterLink to="" class="text-sm text-support hover:underline">
                        View details
                    </RouterLink>
                </div>
            </div>

        </div>
    </div>




    <!-- stay connected to crossborder business -->
     <div class="bg-card-surface w-full py-24 px-4 flex flex-col items-center justify-center text-center text-white">
        
        <div class="max-w-2xl flex flex-col gap-4 items-center">
            
            <h2 class="text-4xl font-bold tracking-tight">
                Stay connected to cross-border business
            </h2>
            
            <p class="body-regular text-support text-base max-w-lg">
                Get updates about events, cases and network opportunities in the Danish-German border region.
            </p>
            
            <div class="flex flex-col sm:flex-row items-center gap-4 mt-8">
                
                <RouterLink to="" class="accent-btn px-6 py-3 font-semibold rounded-sm transition-colors block w-full sm:w-auto">
                    Join the network
                </RouterLink>
                
                <RouterLink to="" class="secondary-btn border border-white px-6 py-3 font-semibold rounded-sm transition-colors block w-full sm:w-auto">
                    Get event updates
                </RouterLink>
                
                <RouterLink to="" class="text-link font-medium hover:underline px-4 py-3 flex items-center gap-1.5 whitespace-nowrap">
                    Contact us <span>&rarr;</span>
                </RouterLink>
                
            </div>

        </div>
    </div>
</template>