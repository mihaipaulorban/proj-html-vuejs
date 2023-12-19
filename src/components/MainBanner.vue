<script>
export default {
  name: 'MainBanner',

  //Props per la modifica e la riusabilitá
  props: {
    headingText: String,
    buttonText: String,
    backgroundPattern: String,
  },
};
</script>

<template>
  <!-- Background -->
  <div
    class="custom-banner d-flex justify-content-center align-items-center"
    :style="{ backgroundImage: 'url(' + backgroundPattern + ')' }"
  >
    <!-- Container con testo e pulsante -->
    <div
      class="banner-container d-flex justify-content-between align-items-center"
    >
      <h3>{{ headingText }}</h3>
      <button class="main-button">{{ buttonText }}</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;

// Stile banner
.custom-banner {
  padding: 2.5rem;
  background-size: cover;
  .banner-container {
    width: 60%;
    // Stile testo
    h3 {
      color: $color-tertiary;
      margin: 0;
      font-weight: 200;
      font-size: 30px;
    }
    // Stile pulsante
    .main-button {
      color: $color-tertiary;
      border: 2px solid $color-tertiary;
      background-color: transparent;
      padding: 10px 15px;

      &:hover {
        background-color: $color-tertiary;
        color: $color-primary;
      }
    }
  }
}
</style>
