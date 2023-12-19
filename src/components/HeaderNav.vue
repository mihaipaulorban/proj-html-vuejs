<script>
import { headerIcons } from '../store';
import { ref } from 'vue';

export default {
  name: 'Headernav',
  setup() {
    // Aggiungo rettivitá con ref
    const icons = ref(headerIcons);

    // Cambia lo stato di hover
    function toggleHover(iconName, value) {
      const icon = icons.value.find((i) => i.name === iconName);
      if (icon) {
        icon.hover = value;
      }
    }

    return { icons, toggleHover };
  },
};
</script>

<template>
  <nav>
    <ul class="navbar-nav d-flex flex-row list-unstyled">
      <li v-for="icon in icons" :key="icon.name" class="nav-item">
        <a
          class="nav-link d-flex flex-column"
          @mouseover="() => toggleHover(icon.name, true)"
          @mouseleave="() => toggleHover(icon.name, false)"
        >
          <img :src="icon.hover ? icon.altIcon : icon.icon" :alt="icon.name" />
          <div>{{ icon.name }}</div>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;
.navbar-nav {
  padding: 0;
  margin: 0;
  .nav-item {
    cursor: pointer;

    .nav-link {
      background-color: transparent;
      transition: background-color 0.3s ease;
      padding: 40px 20px;

      &:hover {
        background-color: $color-secondary;
        color: $color-tertiary;
      }

      img {
        transition: opacity 0.3s ease;
        align-self: center;
        margin: 0;
      }
    }
  }
}
</style>
