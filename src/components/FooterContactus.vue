<script>
export default {
  name: 'FooterContactus',
};
</script>

<template>
  <div
    class="contact-structure d-flex align-items-center justify-content-center"
  >
    <div
      class="contact-title d-flex align-items-center justify-content-center flex-column"
    >
      <h2>Contact Us</h2>
      <p>Our postal address and contact details</p>
      <img
        src="../../public/MainIcons/main_divider.png"
        alt="divider"
        class="mt-2"
      />
    </div>

    <div class="contact-icons">
      <div class="icon d-flex">
        <div class="icon-container">
          <div class="icon-ball d-flex justify-content-center">
            <div class="icon d-flex align-items-center justify-content-center">
              <img src="../../public/FooterIcons/mail.png" alt="icon" />
            </div>
          </div>

          <h3>Postal Address</h3>
          <p>Fable Care Center</p>
          <p>85 Fentiman Avel</p>
          <p>Ottawa, ON K1S 0T7</p>
        </div>
        <div class="icon-container">
          <div class="icon-ball d-flex justify-content-center">
            <div class="icon d-flex align-items-center justify-content-center">
              <img src="../../public/FooterIcons/mobile.png" alt="icon" />
            </div>
          </div>

          <h3>Phone & E-mail</h3>
          <p>Phone: 1-800-64-38</p>
          <p>Fax: 1-800-64-39</p>
          <a>office@fable.com</a>
        </div>
        <div class="icon-container">
          <div class="icon-ball d-flex justify-content-center">
            <div class="icon d-flex align-items-center justify-content-center">
              <img src="../../public/FooterIcons/clock.png" alt="icon" />
            </div>
          </div>

          <h3>Business Hours</h3>
          <p>Monday - Friday</p>
          <p>8.00 am - 5.00 pm</p>
          <p>Weekend Closed</p>
        </div>
        <div class="icon-container">
          <div class="icon-ball d-flex justify-content-center">
            <div class="icon d-flex align-items-center justify-content-center">
              <img src="../../public/FooterIcons/doc.png" alt="icon" />
            </div>
          </div>

          <h3>Sessions</h3>
          <p>Mornings, 8 am - 12 noon</p>
          <p>Afternoons, 1 pm - 5 pm</p>
          <p>Full Day, 8 am - 5 pm</p>
        </div>
      </div>
    </div>
    <div class="form-structure">
      <div class="form-container">
        <div class="left-side">
          <input type="text" placeholder="Your Name *" required />
          <input type="email" placeholder="Your E-mail *" required />
          <input type="text" placeholder="Subject" />
        </div>
        <div class="right-side">
          <textarea placeholder="Your Message *" required></textarea>
        </div>
      </div>
    </div>
    <button>Send Message</button>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;
button {
  color: $color-tertiary;
  border: none;
  background-color: $color-secondary;
  padding: 10px 15px;
  text-transform: uppercase;
  margin: 50px 0;

  &:hover {
    background-color: $color-tertiary;
    color: $color-secondary;
    border: $color-secondary solid 1px;
  }
}

.contact-structure {
  width: 100%;
  flex-direction: column;
  .contact-title {
    width: 60%;

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

  .contact-icons {
    width: 60%;
  }
  .icon-container {
    flex-direction: row;
    margin-top: 70px;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 0.5;
    .icon-ball {
      margin-bottom: 30px;
    }

    h3 {
      color: $color-primary;
      margin-bottom: 15px;
    }
    p {
      color: gray;
      font-size: 15px;
      text-align: center;
    }
    a {
      cursor: pointer;
      color: $color-primary;

      &:hover {
        color: $color-secondary;
      }
    }
  }
  .form-structure {
    width: 60%;
    margin-top: 80px;
    .form-container {
      display: flex;
      justify-content: space-between;
      gap: 20px;

      .left-side,
      .right-side {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .left-side {
        flex: 1;
      }

      .right-side {
        flex: 1;
        textarea {
          height: 150px;
        }
      }

      input[type='text'],
      input[type='email'],
      textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
      }
    }
  }
}
</style>
