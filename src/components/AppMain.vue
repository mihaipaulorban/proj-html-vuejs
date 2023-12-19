<script>
// Banner riusabile
import MainBanner from './MainBanner.vue';

// Sezione Welcome
import MainWelcome from './MainWelcome.vue';

export default {
  name: 'AppMain',
  components: {
    MainBanner,
    MainWelcome,
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
</template>

<style scoped lang="scss"></style>
