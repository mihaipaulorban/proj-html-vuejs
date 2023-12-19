<script>
import HeaderNav from './HeaderNav.vue';
import HeaderSlider from './HeaderSlider.vue';

export default {
  name: 'AppHeader',
  components: {
    HeaderNav,
    HeaderSlider,
  },
};
</script>

<template>
  <header class="d-flex justify-content-center">
    <div class="d-flex justify-content-between header-container p-0">
      <img src="../../public/logo.png" alt="logo" />
      <HeaderNav />
    </div>
  </header>
  <HeaderSlider />
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
