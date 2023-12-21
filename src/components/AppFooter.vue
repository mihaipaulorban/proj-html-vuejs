<script>
import GoogleMapComponent from './GoogleMapComponent.vue';
import FooterContactus from './FooterContactus.vue';
export default {
  name: 'AppFooter',
  components: {
    GoogleMapComponent,
    FooterContactus,
  },
};
</script>

<template>
  <GoogleMapComponent />
  <FooterContactus />
</template>

<style scoped lang="scss"></style>
