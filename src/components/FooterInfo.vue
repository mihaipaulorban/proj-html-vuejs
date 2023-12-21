<script>
export default {
  name: 'FooterInfo',
};
</script>

<template>
  <div class="footer-structure d-flex justify-content-center">
    <div class="info-container d-flex">
      <div class="info-sections">
        <h3>About Us</h3>
        <hr />
        <p>
          Elipsis magna a nulla elite forte maecenas est elementum magna etos
          interdum movum morbi vehicula morbi.
        </p>
        <img
          class="logo"
          src="../../public/FooterIcons/logo_footer.png"
          alt="logo"
        />
      </div>
      <div class="info-sections">
        <h3>Archives</h3>
        <hr />
        <div class="archives">
          <p>October 2014 (2)</p>
        </div>
        <div class="archives">
          <p>September 2014 (2)</p>
        </div>
        <div class="archives">
          <p>August 2014 (2)</p>
        </div>
        <div class="archives">
          <p>July 2014 (2)</p>
        </div>
        <div class="archives">
          <p>June 2014 (2)</p>
        </div>
        <div class="archives">
          <p>May 2014 (1)</p>
        </div>
      </div>
      <div class="info-sections">
        <h3>Our Features</h3>
        <hr />
        <p>
          Nunc gravida rutrum mauris vehin hasellus ac pretium augue vivamul
          lacus ligul mattis ac vene:
        </p>
        <div class="check d-flex">
          <img src="../../public/FooterIcons/style_4_alt.png" alt="" />
          <p>Friendly and welcoming place</p>
        </div>
        <div class="check d-flex">
          <img src="../../public/FooterIcons/style_4_alt.png" alt="" />
          <p>Science and art classes</p>
        </div>
        <div class="check d-flex">
          <img src="../../public/FooterIcons/style_4_alt.png" alt="" />
          <p>Positive learning environment</p>
        </div>
        <div class="check d-flex">
          <img src="../../public/FooterIcons/style_4_alt.png" alt="" />
          <p>Educational field trips</p>
        </div>
        <div class="check d-flex">
          <img src="../../public/FooterIcons/style_4_alt.png" alt="" />
          <p>Writing and reading classes</p>
        </div>
        <div class="check d-flex">
          <img src="../../public/FooterIcons/style_4_alt.png" alt="" />
          <p>Science and art classes</p>
        </div>
      </div>
      <div class="info-sections">
        <h3>Recent Posts</h3>
        <hr />
        <div class="posts">
          <div class="image">
            <img src="../../public/img/blog_09-150x150.jpg" alt="" />
          </div>
          <div class="info">
            <h4>Drawing and painting Lessons</h4>
            <div class="check d-flex">
              <img src="../../public/FooterIcons/date_footer.png" alt="" />
              <p>October 03, 2014</p>
            </div>
          </div>
        </div>
        <div class="posts">
          <div class="image">
            <img src="../../public/img/blog_10-150x150.jpg" alt="" />
          </div>
          <div class="info">
            <h4>Drawing and painting Lessons</h4>
            <div class="check d-flex">
              <img src="../../public/FooterIcons/date_footer.png" alt="" />
              <p>October 03, 2014</p>
            </div>
          </div>
        </div>
        <div class="posts d-flex">
          <div class="image">
            <img src="../../public/img/blog_08-150x150.jpg" alt="" />
          </div>
          <div class="info">
            <h4>Drawing and painting Lessons</h4>
            <div class="check d-flex">
              <img src="../../public/FooterIcons/date_footer.png" alt="" />
              <p>October 03, 2014</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-structure {
  width: 100%;
  color: rgba(255, 255, 255, 0.682);
  background-image: url(../../public/backgrounds/pattern.png);
  .info-container {
    width: 60%;

    .info-sections {
      width: calc(100% / 4);
      padding: 20px;
      margin: 30px 0;
      h3 {
        text-transform: uppercase;
        color: white;
        font-size: 20px;
      }
      hr {
        width: 20%;
        border: 1px solid white;
      }
      .logo {
        width: 200px;
      }
      .archives {
        padding: 10px;
        border: 1px solid rgba(255, 255, 255, 0.682);
        margin: 5px 0;
        width: 100%;
        p {
          text-transform: uppercase;
          margin: 0;
        }
      }
      .check {
        img {
          margin-right: 10px;
          width: 15px;
          height: 15px;
        }
        p {
          font-size: 12px;
        }
      }
      .posts {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        .image {
          flex-shrink: 0;
          width: 80px;
          height: 80px;
          margin-right: 10px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .info {
          flex-grow: 1;

          h4 {
            margin: 0px;
            font-size: 1rem;
          }
        }
      }
    }
  }
}
</style>
