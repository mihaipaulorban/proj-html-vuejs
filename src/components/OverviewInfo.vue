<script>
export default {
  name: 'OverviewInfo',

  //   Funzione per monitorare lo stato attivo o no
  data() {
    return {
      activeTab: 'overview',
    };
  },
};
</script>

<template>
  <div class="tabs-container">
    <div class="tabs d-flex">
      <div
        class="tab"
        :class="{ active: activeTab === 'overview' }"
        @click="activeTab = 'overview'"
      >
        Overview
      </div>
      <div
        class="tab"
        :class="{ active: activeTab === 'mission' }"
        @click="activeTab = 'mission'"
      >
        Our Mission
      </div>
    </div>
    <div class="tab-content">
      <div v-if="activeTab === 'overview'">
        <!-- Contenuto per "Overview" -->
        <h2>
          Our philosophy is learning through play as we offer a stimulating
          environment for children.
        </h2>
        <div class="overview-icons">
          <div class="icon-info d-flex">
            <div class="d-flex align-items-center icon-container">
              <img
                src="../../public/MainIcons/clock_alt.png"
                alt="Clock icon"
                class="icon"
              />
            </div>
            <div class="info">
              <h3>Full Day Sessions</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
                sit quo est nulla animi alias minima natus ab.
              </p>
            </div>
          </div>
          <div class="icon-info d-flex">
            <div class="d-flex align-items-center icon-container">
              <img
                src="../../public/MainIcons/diagram_alt.png"
                alt=""
                class="icon"
              />
            </div>

            <div class="info">
              <h3>Varied Classes</h3>
              <p>
                Pulvinar est metro ligula blandit maecenas retrum gravida
                cuprum. Maecenas node estibulum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="activeTab === 'mission'">
        <!-- Contenuto per "Our Mission" -->
        <h2>We eant to be better at our jobs improving ourselves</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta sit
          quo est nulla animi alias minima natus ab.
        </p>
        <h2>
          The main objective for us is to help others from the education to the
          development of the brain and intellect
        </h2>
        <p>
          Pulvinar est metro ligula blandit maecenas retrum gravida cuprum.
          Maecenas node estibulum.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
.tabs-container {
  .tabs {
    .tab {
      cursor: pointer;
      padding: 10px 20px;
      color: gray;
      position: relative;

      &.active {
        background-color: $color-secondary;
        color: $color-tertiary;

        &::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 10px solid $color-secondary;
        }
      }
    }
  }
  .tab-content {
    h2 {
      color: $color-primary;
      font-weight: 300;
      font-size: 30px;
      margin-top: 40px;
    }
    .icon-info {
      margin: 20px 0;
      h3 {
        color: $color-primary;
        font-weight: 300;
        font-size: 18px;
      }
    }
    p {
      color: gray;
      font-weight: 200;
      font-size: 13;
      margin: 0;
    }
    .icon-container {
      background-color: $color-secondary;
      padding: 25px;
      margin-right: 20px;
      border-radius: 50%;

      img {
        width: 30px;
        height: auto;
      }
    }
  }
}
</style>
