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
