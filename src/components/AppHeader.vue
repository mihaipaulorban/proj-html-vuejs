<script>
import HeaderNav from './HeaderNav.vue';

export default {
  name: 'AppHeader',
  components: {
    HeaderNav,
  },
};
</script>

<template>
  <header class="d-flex justify-content-center align-items-start">
    <div class="d-flex justify-content-between header-container p-0">
      <img src="../../public/logo.png" alt="logo" />
      <HeaderNav />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header-container {
  width: 60%;

  img {
    width: 200px;
    height: auto;
  }
}
</style>
