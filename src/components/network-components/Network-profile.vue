<script setup>
    import HeroTemplate from '../layout/Hero-template.vue';
</script>

<template>
    <div class="grid grid-cols-1 lg:grid-cols-12 w-full pb-12 lg:pb-20 mt-12 lg:mt-20 px-6 lg:px-0 gap-8 lg:gap-0">
        
        <div class="lg:col-start-2 lg:col-end-6 order-1">
            <HeroTemplate>
                <template #subtitle>
                    advisor
                </template>
                <template #h1>
                    recruitment support advisor        
                </template>
                <template #hero-description>
                    Get personalized support in finding the right network actors for your organization. Our recruitment support advisor is here to guide you through the process and connect you with the most relevant contacts.
                </template>
            </HeroTemplate>
        </div>

        <div class="lg:col-start-8 lg:col-end-12 lg:row-span-2 order-2 lg:order-2">
            <div class="flex flex-col gap-4 items-start justify-center rounded-sm">
                <img class="w-full h-auto object-cover" src="https://placehold.co/1920x1080" alt="Recruitment Support">
                <div>
                    <p class="text-h4 text-premium-bg">recruitment support advisor</p>
                    <div class="text-body text-support">
                        denmark &#8729;  advisor
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-wrap gap-2 lg:col-start-2 lg:col-end-6 order-3 lg:order-3 mt-2 lg:mt-6">
            <p class="capitalize border-[0.8px] border-[#E0E1DD] py-2 px-4 rounded-full text-body text-premium-bg">recruitment</p>
            <p class="capitalize border-[0.8px] border-[#E0E1DD] py-2 px-4 rounded-full text-body text-premium-bg">onboarding</p>
            <p class="capitalize border-[0.8px] border-[#E0E1DD] py-2 px-4 rounded-full text-body text-premium-bg">business support</p>
            <p class="capitalize border-[0.8px] border-[#E0E1DD] py-2 px-4 rounded-full text-body text-premium-bg">events</p>
        </div>

    </div>


    <div class="bg-page-bg py-12 lg:pt-20 lg:pb-18 px-6 lg:px-0">
        <div class="grid grid-cols-1 lg:grid-cols-12 w-full gap-6">
            <h2 class="lg:col-start-2 lg:col-end-12 uppercase text-small-title text-support">
                quick facts and contact
            </h2>

            <div class="flex flex-col gap-5 lg:col-start-2 lg:col-end-7 px-6 py-6 lg:px-8 lg:pt-8 lg:pb-4 bg-white">
                <div>
                    <h3 class="capitalize text-h3 text-premium-bg pb-6 lg:pb-8">
                        quick facts
                    </h3>
                    <div>
                        <div class="flex flex-col sm:flex-row sm:gap-6 py-4 border-t-[0.8px] border-[#E0E1DD] sm:items-center justify-start">
                            <p class="uppercase text-small-title text-support w-full sm:w-[140px]">profile type</p>
                            <p class="capitalize">advisor</p>
                        </div>
                        <div class="flex flex-col sm:flex-row sm:gap-6 py-4 border-t-[0.8px] border-[#E0E1DD] sm:items-center justify-start">
                            <p class="uppercase text-small-title text-support w-full sm:w-[140px]">country/region</p>
                            <p class="capitalize">denmark</p>
                        </div>
                        <div class="flex flex-col sm:flex-row sm:gap-6 py-4 border-t-[0.8px] border-[#E0E1DD] sm:items-center justify-start">
                            <p class="uppercase text-small-title text-support w-full sm:w-[140px]">sector or service</p>
                            <p class="capitalize">international recruitment</p>
                        </div>
                        <div class="flex flex-col sm:flex-row sm:gap-6 py-4 border-t-[0.8px] border-[#E0E1DD] sm:items-center justify-start">
                            <p class="uppercase text-small-title text-support w-full sm:w-[140px]">languages</p>
                            <p class="uppercase">da / de</p>
                        </div>
                        <div class="flex flex-col sm:flex-row sm:gap-6 py-4 border-t-[0.8px] border-[#E0E1DD] sm:items-center justify-start">
                            <p class="uppercase text-small-title text-support w-full sm:w-[140px]">main focus</p>
                            <p class="capitalize">workforce attraction</p>
                        </div>
                        <div class="flex flex-col sm:flex-row sm:gap-6 py-4 border-t-[0.8px] border-[#E0E1DD] sm:items-center justify-start">
                            <p class="uppercase text-small-title text-support w-full sm:w-[140px]">linkedin</p>
                            <p class="break-all">www.example.dk</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-5 lg:col-start-7 lg:col-end-12 px-6 py-6 lg:px-8 lg:pt-8 lg:pb-4 bg-white">
                <div>
                    <h3 class="capitalize text-h3 text-premium-bg pb-6 lg:pb-8">
                        contact
                    </h3>
                    <div>
                        <div class="flex flex-col sm:flex-row sm:gap-6 py-4 border-t-[0.8px] border-[#E0E1DD] sm:items-center justify-start">
                            <p class="uppercase text-small-title text-support w-full sm:w-[140px]">contact person</p>
                            <p class="capitalize">contact name placeholder</p>
                        </div>
                        <div class="flex flex-col sm:flex-row sm:gap-6 py-4 border-t-[0.8px] border-[#E0E1DD] sm:items-center justify-start">
                            <p class="uppercase text-small-title text-support w-full sm:w-[140px]">email</p>
                            <p class="break-all">contact@example.dk</p>
                        </div>
                        <div class="flex flex-col sm:flex-row sm:gap-6 py-4 border-t-[0.8px] border-[#E0E1DD] sm:items-center justify-start">
                            <p class="uppercase text-small-title text-support w-full sm:w-[140px]">phone</p>
                            <p class="capitalize">+45 xx xx xx</p>
                        </div>
                        <div class="flex flex-col sm:flex-row sm:gap-6 py-4 border-t-[0.8px] border-[#E0E1DD] sm:items-center justify-start">
                            <p class="uppercase text-small-title text-support w-full sm:w-[140px]">website</p>
                            <p class="break-all">www.example.dk</p>
                        </div>
                        <div class="flex flex-col sm:flex-row sm:gap-6 py-4 border-t-[0.8px] border-[#E0E1DD] sm:items-center justify-start">
                            <p class="uppercase text-small-title text-support w-full sm:w-[140px]">address</p>
                            <p class="capitalize">Kanzleistraße 91-93, 24943 Flensburg</p>
                        </div>
                        <RouterLink to='/network' class="text-center mt-6 secondary-btn-long mx-auto block w-full">
                            back to network
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="grid grid-cols-1 lg:grid-cols-12 py-12 lg:pt-20 w-full bg-[#FAFAF8] px-6 lg:px-0 gap-6 lg:gap-0">
        <HeroTemplate class="lg:col-start-2 lg:col-end-12">
            <template #subtitle>
                about
            </template>
            <template #h2>
                recruitment support advisor
            </template>
        </HeroTemplate>
        
        <div class="lg:col-start-2 lg:col-end-12 flex flex-col gap-4 font-semibold text-base lg:text-[18px] leading-relaxed lg:leading-[24px] text-secondary lg:mt-6">
            <p>Jackstädt-Zentrum Flensburg er en fælles institution for økonomifakulteterne ved Europa-Universität Flensburg og Hochschule Flensburg.</p>
            <p>Vi er en partner for virksomheder, studerende og forskere inden for iværksætteri, små og mellemstore virksomheder (SMV’er) og vidensoverførsel. Vores mission er at forbinde forskning og praksis ved at fremme forskning, undervisning og innovation inden for iværksættertænkning og fremtiden for SMV’er.</p>
        </div>
        
        <div class="text-secondary mt-8 lg:mt-20 lg:col-start-2 lg:col-end-12 bg-white p-6 lg:p-8 flex flex-col gap-8 border-[#E0E1DD] border-[0.8px] rounded-sm">
            <div class="flex flex-col gap-4">
                <p>Som en del af Interreg-projektet Business DE-DK leder Jackstädt-Zentrum Flensburg opgaven “Analyse og Kortlægning” (delmål 2).</p>
                <p>Formålet er at indsamle relevante data, analysere behovene hos nøgleaktører i grænseregionen og forbedre kontinuitet og gennemsigtighed – især i lyset af den presserende udfordring med mangel på arbejdskraft og kvalificerede medarbejdere, som udgør en alvorlig trussel for mange virksomheder i området.</p>
                <p>Derudover arbejder vi tæt sammen med regionale aktører for at skabe forbindelse mellem internationale studerende og faglærte samt lokale virksomheder og karrieremuligheder. Gennem forskellige projekter, arrangementer og partnerskaber bidrager vi til langsigtet integration af international arbejdskraft i det regionale arbejdsmarked og støtter aktivt grænseoverskridende vidensudveksling og iværksætteri.</p>
            </div>
            <div class="flex flex-col gap-4">
                <h3 class="text-h3">Grænseoverskridende bidrag</h3>
                <p class="text-body">Som et bindeled mellem akademia, erhvervsliv og samfund bidrager vi med vores kompetencer specifikt i grænseoverskridende sammenhænge – gennem projektpartnerskaber, udvekslingsformater, vidensoverførsel og vores mangeårige erfaring med ledelse af offentligt finansierede projekter.</p>
                <p>Grænseoverskridende projekter og netværk I det aktuelle projekt *Cross Border Business Development in Germany Denmark (Business DE-DK)* bidrager vi målrettet med vores erfaring fra internationale konsortieprojekter. Vi forbinder tyske og danske virksomheder, universiteter og forskningspartnere for at identificere og udvikle nye samarbejdsmuligheder.</p>
            </div>
            <div class="flex flex-col gap-4">
                <h3 class="text-h3">Vidensoverførsel og udvekslingsorienterede arrangementer</h3>
                <p class="text-body">Formater som *JuleVenture* (afholdes årligt i december som et grænseoverskridende event) og *International Green Entrepreneurship Forum (IGEF)* fremmer direkte udveksling mellem aktører fra Tyskland og Danmark. Disse arrangementer styrker netværk, tillid og udviklingen af fælles innovationsidéer.</p>
            </div>
            <div class="flex flex-col gap-4">
                <h3 class="text-h3">Projektledelse og ekspertise i finansiering</h3>
                <p class="text-body">Med over 30 finansierede projekter og ekstern støtte i millionklassen over det seneste årti tilbyder vi omfattende erfaring med projektansøgninger og -koordinering – også i tysk-danske samarbejder.</p>
            </div>
        </div>
    </div>

    <div class="bg-[#FAFAF8] px-6 lg:px-0">
        <div class="grid grid-cols-1 lg:grid-cols-12 w-full gap-6 py-12 lg:pt-20 lg:pb-20">
            <div class="lg:col-start-2 lg:col-end-12 gap-4 lg:gap-6 flex flex-col lg:flex-row">
                <img class="w-full lg:w-1/2 object-cover" src="https://placehold.co/1920x1080" alt="Media 1">
                <img class="w-full lg:w-1/2 object-cover" src="https://placehold.co/1920x1080" alt="Media 2">
            </div>
        </div>
    </div>
    

    <div class="bg-page-bg flex flex-col py-12 lg:pt-20 lg:pb-20 px-6 lg:px-0 gap-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 w-full">
            <div class="lg:col-start-2 lg:col-end-6">
                <HeroTemplate>
                    <template #subtitle>
                        related content
                    </template>
                    <template #h2>
                        related content
                    </template>
                    <template #hero-description>
                        explore related content and resources to further support your international recruitment efforts. From best practices to success stories, find valuable insights and inspiration to enhance your workforce attraction strategies.
                    </template>
                </HeroTemplate>
            </div>   
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 w-full">
            <div class="lg:col-start-2 lg:col-end-12 flex flex-col lg:flex-row gap-6">
                
                <div class="flex w-full flex-col gap-6 bg-white p-6 rounded-sm">
                    <div>
                        <p class="inline px-3 py-1.5 rounded-full uppercase text-small-title text-white bg-accent">case</p>
                    </div>
                    <h3 class="pb-6 capitalize text-h4 text-premium-bg">supporting cross-border cooperation in practice</h3>
                    <RouterLink class="text-center mx-auto block secondary-btn-long w-full" to="/">Read case</RouterLink>
                </div>

                <div class="flex w-full flex-col gap-6 bg-white p-6 rounded-sm">
                    <div>
                        <p class="inline px-3 py-1.5 rounded-full uppercase text-small-title text-white bg-accent">case</p>
                    </div>
                    <h3 class="pb-6 capitalize text-h4 text-premium-bg">supporting cross-border cooperation in practice</h3>
                    <RouterLink class="text-center mx-auto block secondary-btn-long w-full" to="/">Read case</RouterLink>
                </div>

                <div class="flex w-full flex-col gap-6 bg-white p-6 rounded-sm">
                    <div>
                        <p class="inline px-3 py-1.5 rounded-full uppercase text-small-title text-white bg-accent">case</p>
                    </div>
                    <h3 class="pb-6 capitalize text-h4 text-premium-bg">supporting cross-border cooperation in practice</h3>
                    <RouterLink class="text-center mx-auto block secondary-btn-long w-full" to="/">Read case</RouterLink>
                </div>

            </div>
        </div>
    </div>


    <div class="grid grid-cols-1 lg:grid-cols-12 bg-premium-bg py-12 lg:pt-20 lg:pb-20 px-6 lg:px-0 gap-8 lg:gap-0">
        
        <HeroTemplate cta_1_link="/" cta_2_link="/contact" custom class="lg:col-start-2 lg:col-end-6">
            <template #subtitle>
                add your organization
            </template>
            <template #h2-custom="{baseClass}">
                <div :class="`${baseClass} text-white`">
                    add your organization <br>to the network
                </div>
            </template>
            <template #hero-description-custom="{baseClass}">
                <span :class="`${baseClass} text-body text-support block`">
                    Companies, advisors and partner organizations can create a profile and become easier to find across the Danish - German border region.
                </span>
            </template>
            <template #cta1>
                Add your organization
            </template>
            <template #cta2-custom="{ baseClass }">
                <RouterLink :class="`${baseClass} border-white text-white`" to="/contact">
                    talk to Business DE-DK first
                </RouterLink>
            </template>
        </HeroTemplate>

        <div class="lg:col-start-8 lg:col-end-12 border border-secondary bg-[#1B2B4B] rounded-sm p-8 lg:p-10 flex flex-col justify-center">
            <div class="flex flex-col">
                <h3 class="uppercase pb-5 text-support text-small-title">why join the network</h3>
                <ul class="flex flex-col pt-5 space-y-3 border-t-[1.6px] border-secondary list-disc list-inside text-body marker:text-accent marker:text-2xl">
                    <li class="text-body text-white">Be found by relevant companies and partners.</li>
                    <li class="text-body text-white">Show your services, language and region.</li>
                    <li class="text-body text-white">Connect your profile to cases and events.</li>
                </ul>
            </div>
        </div>

    </div>
</template>
