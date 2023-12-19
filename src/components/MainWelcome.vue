<script>
import WelcomeIcons from './WelcomeIcons.vue';

export default {
  name: 'MainWelcome',
  components: {
    WelcomeIcons,
  },
};
</script>

<template>
  <div
    class="welcome-container d-flex align-items-center justify-content-center flex-column"
  >
    <div
      class="welcome-title d-flex align-items-center justify-content-center flex-column"
    >
      <h2>Welcome to Fable</h2>
      <p>Fable daycare, preschool, and kindergarten</p>
      <img
        src="../../public/MainIcons/main_divider.png"
        alt="divider"
        class="mt-2"
      />
    </div>
    <WelcomeIcons />
  </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;

.welcome-container {
  width: 100%;

  .welcome-title {
    width: 60%;

    h2 {
      color: $color-primary;
      font-weight: 200;
      font-size: 50px;
      margin-top: 50px;
    }

    p {
      color: gray;
      font-weight: 300;
    }
  }
}
</style>
