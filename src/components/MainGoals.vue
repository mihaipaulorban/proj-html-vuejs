<script>
export default {
  name: 'MainGoals',
};
</script>

<template>
  <div class="goal-structure d-flex align-items-center justify-content-center">
    <div class="goal-container d-flex">
      <div class="goal-info">
        <h2>
          We have been educating children for over fifteen years. Our goal is to
          create a place that engages each child.
        </h2>
        <p class="info-text">
          Praesent arcu gravida vehlcula est node maecenas loareet morbl a dosis
          luctus. Urna eget lacinia eleifend praesent luctus a arcu quis
          facilisis venenatis aenean Interdum.
        </p>
        <div class="check d-flex">
          <img src="../../public/MainIcons/style_1.png" alt="checkicon" />
          <p>Comprehensive reporting on individual achievement</p>
        </div>
        <div class="check d-flex">
          <img src="../../public/MainIcons/style_1.png" alt="checkicon" />
          <p>Educational field trips and school presentations</p>
        </div>
        <div class="check d-flex">
          <img src="../../public/MainIcons/style_1.png" alt="checkicon" />
          <p>Individual attention in a small-class setting</p>
        </div>
        <div class="check d-flex">
          <img src="../../public/MainIcons/style_1.png" alt="checkicon" />
          <p>Learning program with alter-school care</p>
        </div>
        <div class="check d-flex">
          <img src="../../public/MainIcons/style_1.png" alt="checkicon" />
          <p>Opportunities to carry out scientihic investigations</p>
        </div>
        <div class="check d-flex">
          <img src="../../public/MainIcons/style_1.png" alt="checkicon" />
          <p>Positive learning environment for your child</p>
        </div>
      </div>
      <div class="goal-icons d-flex">
        <div class="icon-top">
          <div class="icon-container">
            <div class="icon-ball d-flex justify-content-center">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <img src="../../public/MainIcons/toy.png" alt="icon" />
              </div>
            </div>

            <h3>Learning & Fun</h3>
            <p>Praesent modea est gravidal node venicula lucius.</p>
          </div>
          <div class="icon-container">
            <div class="icon-ball d-flex justify-content-center">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <img src="../../public/MainIcons/school.png" alt="icon" />
              </div>
            </div>

            <h3>Friendly Place</h3>
            <p>Terminal interdum a eleifend maecenas est morbi.</p>
          </div>
        </div>
        <div class="icon-down">
          <div class="icon-container">
            <div class="icon-ball d-flex justify-content-center">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <img src="../../public/MainIcons/meal.png" alt="icon" />
              </div>
            </div>

            <h3>Healthy Meals</h3>
            <p>Terminal interdum a eleifend maecenas est morbi.</p>
          </div>
          <div class="icon-container">
            <div class="icon-ball d-flex justify-content-center">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <img src="../../public/MainIcons/shield.png" alt="icon" />
              </div>
            </div>

            <h3>Children Safety</h3>
            <p>Praesent modea est gravida node vehicula luctus.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
.goal-structure {
  width: 100%;
  background-color: rgb(239, 239, 239);
  padding: 20px 0;
  .goal-container {
    width: 60%;
    height: 500px;

    .goal-info {
      width: 50%;
      padding-top: 40px;
      .info-text {
        margin-bottom: 50px;
      }

      h2 {
        color: $color-primary;
        font-size: 25px;
        margin-bottom: 50px;
        font-weight: 300;
      }
      p {
        color: gray;
        font-size: 13px;
      }
      .check {
        img {
          width: 18px;
          height: 18px;
          margin-right: 15px;
        }
      }
    }

    .goal-icons {
      width: 50%;

      .icon-container {
        margin: 50px 50px;
        width: 200px;
        .icon-ball {
          margin-bottom: 20px;
          .icon {
            padding: 10px;
            border-radius: 50%;
            background-color: $color-tertiary;
            width: 70px;
            height: 70px;
            img {
              width: 30px;
            }
          }
        }
        h3 {
          color: $color-primary;
          font-size: 20px;
          text-align: center;
          margin-bottom: 20px;
        }
        p {
          color: gray;
          font-size: 12px;
          text-align: center;
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
