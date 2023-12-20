<script>
import MainCarousel from './MainCarousel.vue';
import OverviewInfo from './OverviewInfo.vue';
export default {
  name: 'MainOverview',
  components: {
    MainCarousel,
    OverviewInfo,
  },
};
</script>

<template>
  <div class="overview-back d-flex align-items-center justify-content-center">
    <div class="overview-container d-flex">
      <div class="overview-info">
        <OverviewInfo />
      </div>
      <div class="overview-carousel">
        <MainCarousel />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.overview-back {
  width: 100%;
  background-color: rgb(239, 239, 239);
  padding: 50px 0;

  .overview-container {
    width: 60%;
    height: 500px;

    .overview-info {
      width: 50%;
    }

    .overview-carousel {
      width: 50%;
    }
  }
}
</style>
