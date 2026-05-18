<script setup>
    import HeroNetwork from '@/components/network-components/Hero-network.vue';
    import TypesOfNetwork from '@/components/network-components/Types-of-network.vue';
    import AddOrganization from '@/components/network-components/Add-organization.vue';
    import NetworkActors from '@/components/network-components/Network-actors.vue';
</script>

<template>
    <div>
        <HeroNetwork></HeroNetwork>
        <TypesOfNetwork></TypesOfNetwork>
        <NetworkActors></NetworkActors>
        <AddOrganization></AddOrganization>
    </div>
</template>
