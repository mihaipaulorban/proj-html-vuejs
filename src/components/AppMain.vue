<script>
import MainBanner from './MainBanner.vue';
import MainWelcome from './MainWelcome.vue';
import MainOverview from './MainOverview.vue';
import MainSlider from './MainSlider.vue';
import MainClasses from './MainClasses.vue';

export default {
  name: 'AppMain',
  components: {
    MainBanner,
    MainWelcome,
    MainOverview,
    MainSlider,
    MainClasses,
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

  <!-- Slider con info -->
  <MainSlider />

  <!-- Sezione Our CLasses -->
  <MainClasses />
</template>

<style scoped lang="scss"></style>
