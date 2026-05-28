<script setup>
    import HeroNetwork from '@/components/network-components/Hero-network.vue';
    import TypesOfNetwork from '@/components/network-components/Types-of-network.vue';
    import AddOrganization from '@/components/network-components/Add-organization.vue';
    import NetworkActors from '@/components/network-components/Network-actors.vue';
    import { useSeoMeta, useHead } from '@unhead/vue';


    useHead({
    titleTemplate: '%s | Business DE-DK',
    htmlAttrs: {
        lang: 'en'
    },
    link: [
        {
        rel: 'canonical',
        href: 'https://business-region-13108.web.app/network'
        }
    ]
    });


    useSeoMeta({
    title: 'Explore the Cross-Border Network',
    description: 'Find companies, advisors, partner organisations and institutions working across the Danish-German border region.',
    

    ogType: 'website',
    ogTitle: 'Explore the Cross-Border Network | Business DE-DK',
    ogDescription: 'Find companies, advisors, partner organisations and institutions working across the Danish-German border region. Easily filter by profile type, country, and language.',
    ogUrl: 'https://business-region-13108.web.app/network',
    

    twitterCard: 'summary_large_image',
    twitterTitle: 'Explore the Cross-Border Network | Business DE-DK',
    twitterDescription: 'Find companies, advisors, partner organisations and institutions working across the Danish-German border region.',
    });
</script>

<template>
    <div>
        <HeroNetwork></HeroNetwork>
        <TypesOfNetwork></TypesOfNetwork>
        <NetworkActors></NetworkActors>
        <AddOrganization></AddOrganization>
    </div>
</template>
