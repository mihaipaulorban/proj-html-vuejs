<script>
export default {
  name: 'MainGallery',
};
</script>

<template>
  <div class="gallery-structure d-flex">
    <div class="photo" v-for="i in 4" :key="i">
      <img :src="`../../public/img/gallery_0${i}-690x506.jpg`" alt="" />
      <div class="hover-icon">
        <img src="../../public/MainIcons/image_overlay.png" alt="Zoom Icon" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gallery-structure {
  width: 100%;
  height: 300px;
  .photo {
    width: calc(100% / 4);
    height: 100%;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hover-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: none;
      background-color: #554e9e9b;
      border-radius: 50%;
      padding: 40px;

      img {
        width: 50px;
        height: auto;
      }
    }

    &:hover {
      .hover-icon {
        display: block;
      }
    }
  }
}
</style>
