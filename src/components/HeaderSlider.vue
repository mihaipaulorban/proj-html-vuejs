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
      </div>
      <!-- Slide 2 -->
      <div class="carousel-item">
        <img
          src="../../public/backgrounds/slider_slide2_background.png"
          class="d-block w-100"
          alt="Second slide"
        />
      </div>
      <!-- Slide 3 -->
      <div class="carousel-item">
        <img
          src="../../public/backgrounds/slider_slide3_background.png"
          class="d-block w-100"
          alt="Third slide"
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
  img {
    width: 100%;
    height: 600px;
  }
}
</style>
