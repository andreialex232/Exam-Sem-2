<script setup>
    import ContactsHero from '@/components/contacts-components/contacts-hero.vue';
    import WhyJoinSection from '@/components/contacts-components/whyjoin-section.vue';
    import WhoCanJoin from '@/components/contacts-components/whocanjoin-section.vue';
    import HowItWorksSection from '@/components/contacts-components/howitworks-section.vue';
    import ProfilePreviewSection from '@/components/contacts-components/profilepreview-section.vue';
    import MembershipSection from '@/components/contacts-components/membership-section.vue';
    import NotReadySection from '@/components/contacts-components/notReady-section.vue';
    import ContactSection from '@/components/contacts-components/contact-section.vue';
    import SubscribeSection from '@/components/contacts-components/subscribe-section.vue';
    import FaqSection from '@/components/contacts-components/faq-section.vue';
    import FinalCtaSection from '@/components/contacts-components/finalcta-section.vue';

    import { useSeoMeta, useHead } from '@unhead/vue';


  useHead({
    titleTemplate: '%s | Business DE-DK',
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      {
        rel: 'canonical',
        href: 'https://business-region-13108.web.app/contacts'
      }
    ]
  });


  useSeoMeta({
    title: 'Become part of the cross-border business network ',
    description: 'Create visibility for your organisation, connect with relevant companies and advisors, and take part in cross-border knowledge sharing. ',
    
    ogType: 'website',
    ogTitle: 'Cross-Border Business Network | Business DE-DK',
    ogDescription: 'Create visibility for your organisation, connect with relevant companies and advisors, and take part in cross-border knowledge sharing. ',
    ogUrl: 'https://business-region-13108.web.app/contacts',
    
    twitterCard: 'summary_large_image',
    twitterTitle: 'Cross-Border Business Network | Business DE-DK',
    twitterDescription: 'Create visibility for your organisation, connect with relevant companies and advisors, and take part in cross-border knowledge sharing. ',

  });
</script>

<template>
    <div>
        <ContactsHero />
        <WhyJoinSection />
        <WhoCanJoin />
        <HowItWorksSection />
        <ProfilePreviewSection />
        <MembershipSection />
        <NotReadySection />
        <ContactSection />
        <SubscribeSection />
        <FaqSection />
        <FinalCtaSection />
    </div>
</template>
