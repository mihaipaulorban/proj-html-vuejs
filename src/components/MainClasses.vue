<script>
import ClassCard from './ClassCard.vue';
export default {
  name: 'MainClasses',
  components: {
    ClassCard,
  },
};
</script>

<template>
  <div
    class="classes-structure d-flex justify-content-center align-items-center"
  >
    <div
      class="classes-container d-flex align-items-center justify-content-center flex-column"
    >
      <div
        class="classes-title d-flex align-items-center justify-content-center flex-column"
      >
        <h2>Our Classes</h2>
        <p>Our preschool program has four dedicated classes</p>
        <img
          src="../../public/MainIcons/main_divider.png"
          alt="divider"
          class="mt-2"
        />
      </div>
      <div class="classes-text d-flex">
        <div class="text-subtitle">
          <h2>
            We provided four classes with nine to twenty children each aged
            twelve month to five years of age.
          </h2>
        </div>
        <div class="text-content">
          <p>
            Praesent arcu gravida vehicula est node mecenas loareet morbi a
            dosis luctus. Urna eget lacinia eleifend praesent luctus a arcu quis
            | facilisis venenatis. Aenean interdum, nich vitae sodales, magna
            ante teugiat ellt maecenas.
          </p>
        </div>
      </div>
    </div>
    <div class="cards">
      <div class="card-container">
        <ClassCard
          class-age="12-24"
          class-size="9"
          class-title="Little Lambs"
          img-url="../../public/img/gallery_04-690x506.jpg"
          info-age="Month olds"
          info-size="Class size"
        />
      </div>
      <div class="card-container">
        <ClassCard
          class-age="2-3"
          class-size="12"
          class-title="Bouncy Bears"
          img-url="../../public/img/class_02-690x506.jpg"
          info-age="Year olds"
          info-size="Class size"
        />
      </div>
    </div>
    <div class="cards">
      <div class="card-container">
        <ClassCard
          class-age="3-4"
          class-size="15"
          class-title="Tenderhearts"
          img-url="../../public/img/class_03-690x506.jpg"
          info-age="Mont olds"
          info-size="Class size"
        />
      </div>
      <div class="card-container">
        <ClassCard
          class-age="4-5"
          class-size="20"
          class-title="Shining Stars"
          img-url="../../public/img/class_04-690x506.jpg"
          info-age="Year olds"
          info-size="Class size"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;
.classes-structure {
  flex-direction: column;
  .classes-container {
    width: 60%;
    margin-bottom: 40px;

    .classes-title {
      width: 100%;

      h2 {
        color: $color-primary;
        font-weight: 200;
        font-size: 50px;
        margin-top: 50px;
      }

      p {
        color: gray;
        font-weight: 300;
      }
    }

    .classes-text {
      margin-top: 50px;
      .text-subtitle {
        width: 50%;
        h2 {
          color: $color-primary;
          font-weight: 200;
          font-size: 30px;
        }
      }

      .text-content {
        width: 50%;
        p {
          color: gray;
          font-size: 17px;
          margin-left: 40px;
        }
      }
    }
  }
}

.classes-container {
  width: 60%;
  margin-bottom: 40px;

  .classes-title {
    width: 100%;

    h2 {
      color: $color-primary;
      font-weight: 200;
      font-size: 50px;
      margin-top: 50px;
    }

    p {
      color: gray;
      font-weight: 300;
    }
  }

  .classes-text {
    .text-subtitle {
      h2 {
        color: $color-primary;
        font-weight: 200;
      }
    }

    .text-content {
      p {
        color: gray;
      }
    }
  }
}

.cards {
  width: 60%;
  display: flex;
  justify-content: space-between;
  height: 200px;
  margin-bottom: 40px;

  .card-container {
    width: 48%;
    height: 100%;
  }
}
</style>
