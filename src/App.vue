<script>
// Importazione componenti principali
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import MainCarousel from './components/MainCarousel.vue';
export default {
  name: 'DefaultTemplate',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    MainCarousel,
  },
};
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
  <MainCarousel />
</template>

<style scoped lang="scss">
@use './assets/scss/partials/variables' as *;
@use './assets/scss/partials/common' as *;
@use './assets/scss/partials/reset' as *;
</style>
