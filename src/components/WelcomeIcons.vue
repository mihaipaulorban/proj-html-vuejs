<script>
import { welcomeIcons } from '../../src/store';

export default {
  name: 'WelcomeIcons',
  data() {
    return {
      welcomeIcons,
    };
  },
  methods: {
    isPrimary(index) {
      // Assegna i colori alternati agli indici dispari
      return index % 2 !== 0;
    },
  },
};
</script>

<template>
  <section class="welcome-icons">
    <div
      v-for="(icon, index) in welcomeIcons"
      :key="icon.name"
      class="welcome-icon"
    >
      <div
        class="icon-circle"
        :class="{
          'primary-color': isPrimary(index),
          'secondary-color': !isPrimary(index),
        }"
      >
        <img :src="icon.icon" :alt="icon.name" />
      </div>
      <h3>{{ icon.name }}</h3>
      <p>{{ icon.text }}</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;

.welcome-icons {
  display: flex;
  margin-top: 80px;
  width: 60%;

  .welcome-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;

    h3 {
      color: $color-primary;
      font-size: 20px;
      font-weight: 400;
    }

    p {
      color: gray;
      font-size: 16px;
      font-weight: 300;
      margin-top: 10px;
    }

    .icon-circle {
      width: 150px;
      height: 150px;
      padding: 50px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem;

      &.primary-color {
        background-color: $color-primary;
      }

      &.secondary-color {
        background-color: $color-secondary;
      }

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
}
</style>
