<script setup>
  import Footer from './components/shared/Footer.vue';
  import Navbar from './components/shared/Navbar.vue';
</script>

<template>
    <div>
        <Navbar />
        <router-view />
        <Footer />
    </div>
</template>
