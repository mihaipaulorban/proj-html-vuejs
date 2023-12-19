<script>
export default {
  name: 'MainCarousel',
};
</script>

<template>
  <div class="contain">
    <div
      id="carouselWithThumbnails"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <!-- Slides principali -->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../../public/img/gallery_01-690x506.jpg"
            class="d-block w-100"
            alt="First slide"
          />
        </div>
        <div class="carousel-item">
          <img
            src="../../public/img/gallery_07-690x506.jpg"
            class="d-block w-100"
            alt="Second slide"
          />
        </div>
        <div class="carousel-item">
          <img
            src="../../public/img/gallery_08-690x506.jpg"
            class="d-block w-100"
            alt="Third slide"
          />
        </div>
      </div>
      <!-- Controlli del carosello -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselWithThumbnails"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselWithThumbnails"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
      <!-- Miniature -->
      <div class="carousel-thumbnails">
        <ol class="carousel-indicators">
          <li
            data-bs-target="#carouselWithThumbnails"
            data-bs-slide-to="0"
            class="active"
          >
            <img
              src="../../public/img/gallery_01-690x506.jpg"
              alt="First slide thumbnail"
            />
          </li>
          <li data-bs-target="#carouselWithThumbnails" data-bs-slide-to="1">
            <img
              src="../../public/img/gallery_07-690x506.jpg"
              alt="Second slide thumbnail"
            />
          </li>
          <li data-bs-target="#carouselWithThumbnails" data-bs-slide-to="2">
            <img
              src="../../public/img/gallery_08-690x506.jpg"
              alt="Third slide thumbnail"
            />
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contain {
  width: 600px;
  height: 600px;
}
.carousel-inner {
  /* width: 400px; */
}

.carousel-thumbnails {
  text-align: center;
  padding-top: 10px;
}

.carousel-thumbnails .carousel-indicators li {
  display: inline-block;
  margin: 0 10px;
}

.carousel-thumbnails .carousel-indicators img {
  width: 300px;
  height: auto;
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
}

.carousel-thumbnails .carousel-indicators .active img {
  opacity: 1;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
}
</style>
