<script>
import MainBanner from './MainBanner.vue';
import MainWelcome from './MainWelcome.vue';
import MainOverview from './MainOverview.vue';

export default {
  name: 'AppMain',
  components: {
    MainBanner,
    MainWelcome,
    MainOverview,
  },
};
</script>

<template>
  <!-- Banner How To Enroll -->
  <MainBanner
    heading-text="How to Enroll Your Child to a Class?"
    button-text="Learn More >"
    background-pattern="../../public/backgrounds/pattern.png"
  />

  <!-- Sezione Welcome con icone -->
  <MainWelcome />

  <!-- Sezione Overview con carosello -->
  <MainOverview />
</template>

<style scoped lang="scss"></style>
