<script>
export default {
  name: 'HeaderSlider',
};
</script>

<template>
  <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <!-- Pulsante Slide 1 -->
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-label="Slide 1"
        aria-current="true"
      ></button>

      <!-- Pulsante Slide 2 -->
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
        class=""
      ></button>

      <!-- Pulsante Slide 13-->
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
        class=""
      ></button>
    </div>

    <div class="carousel-inner">
      <!-- Slide 1 -->
      <div class="carousel-item active">
        <img
          src="../../public/backgrounds/slider_slide1_background.png"
          class="d-block w-100"
          alt="First slide"
        />
        <img
          src="../../public/img/slider_slide1_img1.png"
          class="slide-img"
          alt="Slide 1 Image 1"
        />
        <img
          src="../../public/img/slider_slide1_img2.png"
          class="slide-img-2"
          alt="Slide 1 Image 2"
        />
      </div>
      <!-- Slide 2 -->
      <div class="carousel-item">
        <img
          src="../../public/backgrounds/slider_slide2_background.png"
          class="d-block w-100"
          alt="Second slide"
        />
        <img
          src="../../public/img/slider_slide2_img1.png"
          class="slide-img"
          alt="Slide 2 Image 1"
        />
        <img
          src="../../public/img/slider_slide2_img2.png"
          class="slide-img-2"
          alt="Slide 2 Image 2"
        />
      </div>
      <!-- Slide 3 -->
      <div class="carousel-item">
        <img
          src="../../public/backgrounds/slider_slide3_background.png"
          class="d-block w-100"
          alt="Third slide"
        />
        <img
          src="../../public/img/slider_slide3_img1.png"
          class="slide-img"
          alt="Slide 3 Image 1"
        />
        <img
          src="../../public/img/slider_slide3_img2.png"
          class="slide-img-2"
          alt="Slide 3 Image 2"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// Stili per il pulsante dello slider
.carousel-indicators button {
  width: 40px;
  height: 10px;
  margin: 0 5px;
  border: solid 2px #fe6601;
  transition: all 0.5s;
}

.carousel-indicators .active {
  background-color: #ffffff;
  transform: translateY(-20px);
}

// Stili per il background dello slider
.carousel-item {
  position: relative;
  img.d-block {
    width: 100%;
    height: 600px;
  }
  img.slide-img {
    width: 200px;
    position: absolute;
    z-index: 1;
    top: 370px;
    left: 580px;
  }
  img.slide-img-2 {
    width: 200px;
    position: absolute;
    z-index: 1;
    top: 380px;
    right: 280px;
  }
}
</style>
