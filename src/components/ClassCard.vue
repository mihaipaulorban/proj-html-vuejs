<script>
export default {
  name: 'ClassCard',
  props: {
    classAge: String,
    classSize: String,
    classTitle: String,
    infoSize: String,
    infoAge: String,
    imgUrl: String,
    readMoreLink: String,
  },
};
</script>

<template>
  <div class="my-card d-flex">
    <div class="content">
      <div class="title">
        <h3>{{ classTitle }}</h3>
        <p>Class Name</p>
      </div>
      <div class="class-info d-flex justify-content-between px-4">
        <div class="info">
          <h4>{{ classAge }}</h4>
          <p>{{ infoAge }}</p>
        </div>
        <div class="info">
          <h4>{{ classSize }}</h4>
          <p>{{ infoSize }}</p>
        </div>
      </div>
    </div>
    <div
      class="image d-flex justify-content-end align-items-end"
      :style="{ backgroundImage: 'url(' + imgUrl + ')' }"
    >
      <div class="more">
        <button @click="$emit('read-more', readMoreLink)">Read More ></button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;
.my-card {
  height: 100%;
  .content {
    padding: 15px;
    width: 50%;
    background-color: $color-primary;
    color: $color-tertiary;
    .title {
      h3 {
        font-size: 25px;
      }
      p {
        font-size: 15px;
        font-weight: 200;
      }
    }
    .class-info {
      align-self: centers;

      .info {
        text-align: center;
        margin-top: 40px;

        p {
          font-weight: 200;
        }
      }
    }
  }
  .image {
    width: 50%;
    background-size: cover;
    background-position: center;
  }
  .more {
    button {
      color: $color-tertiary;
      border: none;
      background-color: $color-secondary;
      padding: 10px 15px;
      text-transform: uppercase;

      &:hover {
        background-color: $color-tertiary;
        color: $color-secondary;
      }
    }
  }
}
</style>
