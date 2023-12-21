<script>
import { sliderInfo } from '../store';

export default {
  name: 'MainSlider',
  data() {
    return {
      currentIndex: 0,
      sliderInfo: sliderInfo,
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.sliderInfo.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.sliderInfo.length) %
        this.sliderInfo.length;
    },
  },
};
</script>

<template>
  <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-indicators">
      <button
        v-for="(slide, index) in sliderInfo"
        :key="'indicator-' + index"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        :data-bs-slide-to="index"
        :class="{ active: index === currentIndex }"
        :aria-label="'Slide ' + (index + 1)"
        @click="currentIndex = index"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        v-for="(slide, index) in sliderInfo"
        :key="'slide-' + index"
        :class="['carousel-item', { active: index === currentIndex }]"
      >
        <div class="slide-container">
          <div class="info-container">
            <div
              v-for="(info, infoIndex) in slide"
              :key="'info-' + infoIndex"
              class="info"
            >
              <div class="icon">
                <h2>{{ info.icon }}</h2>
              </div>
              <div class="title">
                <h3>{{ info.name }}</h3>
              </div>
              <div class="text">
                <p>{{ info.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      @click="prevSlide"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>
    <button
      class="carousel-control-next"
      @click="nextSlide"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
.carousel-inner {
  background-image: url(../../public/img/parallax_01.jpg);
  background-position: 0;
}
.slide-container {
  width: 100%;
  padding: 150px 0;
  display: flex;
  justify-content: center;
  .info-container {
    width: 60%;
    display: flex;
    justify-content: space-between;
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon {
        width: 150px;
        height: 150px;
        padding: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
        border: 1px $color-tertiary solid;

        h2 {
          margin: 0;
          font-size: 40px;
          color: $color-tertiary;
          font-weight: 200;
        }
      }

      .title {
        text-align: center;
        color: $color-tertiary;
        h3 {
          font-weight: 300;
          font-size: 25px;
          text-wrap: wrap;
        }
      }

      .text {
        text-align: center;
        color: $color-tertiary;
        font-weight: 300;
        font-size: 15px;
        text-wrap: wrap;
      }
    }
  }
}

// Stili Testo slide
.carousel-caption {
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  font-family: 'Indie Flower', cursive;
  font-size: 2rem;
  color: rgba(205, 205, 205, 0.486);
  text-align: center;
}

// Stili per il pulsante dello slider

.carousel-indicators button {
  width: 40px;
  height: 10px;
  margin: 0 5px;
  border: solid 2px $color-tertiary;
  transition: all 0.5s;
  background-color: transparent;
}

.carousel-indicators .active {
  transform: translateY(-20px);
}

// Stili per il background dello slider
.carousel-item {
  position: relative;
  img.d-block {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}
</style>
