<script>
import GoogleMapComponent from './GoogleMapComponent.vue';
import FooterContactus from './FooterContactus.vue';
import FooterInfo from './FooterInfo.vue';
export default {
  name: 'AppFooter',
  components: {
    GoogleMapComponent,
    FooterContactus,
    FooterInfo,
  },
};
</script>

<template>
  <GoogleMapComponent />
  <FooterContactus />
  <FooterInfo />
  <div class="footer-socials d-flex justify-content-center align-items-center">
    <div class="social-icons">
      <a href="https://behance.net" target="_blank">
        <img src="../../public/FooterIcons/behance.png" alt="Behance" />
      </a>
      <a href="https://behance.net" target="_blank">
        <img src="../../public/FooterIcons/dribbble.png" alt="Behance" />
      </a>
      <a href="https://behance.net" target="_blank">
        <img src="../../public/FooterIcons/envato.png" alt="Behance" />
      </a>
      <a href="https://behance.net" target="_blank">
        <img src="../../public/FooterIcons/facebook.png" alt="Behance" />
      </a>
      <a href="https://behance.net" target="_blank">
        <img src="../../public/FooterIcons/twitter.png" alt="Behance" />
      </a>
    </div>
    <p class="copyright">
      © Fable - Children Kindergarten WordPress Theme by QuanticaLabs
    </p>
  </div>
</template>

<style scoped lang="scss">
.footer-socials {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  padding: 20px;

  .social-icons {
    display: flex;
    gap: 5px;
    margin-bottom: 10px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: #ff6600;
      color: white;

      &:hover {
        background-color: darken(#ff6600, 10%);
      }

      i {
        font-size: 20px;
      }
    }
  }
  .copyright {
    text-align: center;
    color: rgb(177, 177, 177);
    font-size: 12px;
  }
}
</style>
