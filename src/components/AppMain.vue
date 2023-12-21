<script>
import MainBanner from './MainBanner.vue';
import MainWelcome from './MainWelcome.vue';
import MainOverview from './MainOverview.vue';
import MainSlider from './MainSlider.vue';
import MainClasses from './MainClasses.vue';
import MainGoals from './MainGoals.vue';
import MainGallery from './MainGallery.vue';

export default {
  name: 'AppMain',
  components: {
    MainBanner,
    MainWelcome,
    MainOverview,
    MainSlider,
    MainClasses,
    MainGoals,
    MainGallery,
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

  <!-- Sezione Goals -->
  <MainGoals />

  <!-- Sezione Gallery -->
  <MainGallery />

  <!-- banner Gallery -->
  <MainBanner
    heading-text="See Our Kindergarten Photo Gallery!"
    button-text="View Gallery >"
    background-pattern="../../public/backgrounds/pattern.png"
  />
</template>

<style scoped lang="scss"></style>
