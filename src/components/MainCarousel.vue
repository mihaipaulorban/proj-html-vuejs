<script>
export default {
  name: 'MainCarousel',
  data() {
    return {
      pics: [
        {
          image: '../../public/img/gallery_07-690x506.jpg',
        },
        {
          image: '../../public/img/gallery_08-690x506.jpg',
        },
        {
          image: '../../public/img/gallery_01-690x506.jpg',
        },
      ],
      currentIndex: 0,
    };
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.pics.length;
    },
    prev() {
      this.currentIndex =
        (this.currentIndex + this.pics.length - 1) % this.pics.length;
    },
    changeImage(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<template>
  <div class="my-carousel-container">
    <div class="my-carousel-active">
      <img
        :src="pics[currentIndex].image"
        class="d-block w-100"
        :alt="'Slide ' + (currentIndex + 1)"
      />
      <!-- Pulsanti di navigazione come div -->
      <div class="my-carousel-control my-carousel-prev" @click="prev">
        <img src="../../public/MainIcons/slider_previous.png" alt="Previous" />
      </div>
      <div class="my-carousel-control my-carousel-next" @click="next">
        <img src="../../public/MainIcons/slider_next.png" alt="Next" />
      </div>
    </div>
    <div class="my-carousel-thumbnails">
      <div
        v-for="(pic, index) in pics"
        :key="index"
        class="my-thumb"
        :class="{ active: currentIndex === index }"
        @click="changeImage(index)"
      >
        <img
          :src="pic.image"
          class="d-block w-100"
          :alt="'Thumbnail ' + (index + 1)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;
.my-carousel-container {
  position: relative;
  width: 95%;
  margin: auto;

  .my-carousel-active {
    position: relative;
    img {
      width: 90%;
      height: auto;
      object-fit: cover;
    }

    // Aggiungi i pulsanti di navigazione
    .my-carousel-control {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 5;
      background: none;
      border: none;
      cursor: pointer;

      img {
        width: 30px;
        height: 30px;
      }
    }
    .my-carousel-prev {
      left: 0px;
      background-color: $color-secondary;
    }
    .my-carousel-next {
      right: 0px;
      background-color: $color-secondary;
    }
  }

  .my-carousel-thumbnails {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;

    .my-thumb {
      width: calc(95% / 3);
      cursor: pointer;
      padding: 5px 0;

      img {
        height: 120px;
        object-fit: cover;
      }

      &.active {
        border-bottom: 2px solid $color-secondary;
      }
    }
  }
}
</style>
