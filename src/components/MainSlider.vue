<script>
export default {
  name: 'MainSlider',
};
</script>

<template>
  <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="../../public/img/gallery_07-690x506.jpg"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="..." class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="..." class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');

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
