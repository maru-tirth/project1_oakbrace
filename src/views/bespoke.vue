<template>
  <div>
    <navbar />
    <div>
      <v-parallax
        class="img"
        dark
        src="	https://oakbrace.co.uk/img/banner_services4_desktop.601802b1.jpg"
      >
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="text-h4 font-weight-bold mb-4 text">BESPOKE FINISHES</h1>
          </v-col>
        </v-row>
      </v-parallax>
    </div>
    <v-row class="mt-1">
      <v-col
        style="background-color: black; color: white; height: 500px"
        cols="12"
        md="6"
      >
        <h1 class="mt-1" style="padding: 5%">Bespoke Finishes</h1>

        <p class="p1" style="padding: 5%">
          Feature walls, flooring, hand made kitchens, shelving systems,
          lighting & SMART solutions
        </p>
        <br />
        <p class="p3" style="padding: 5%">
          Everybody likes to be unique and different, aiming for that ‘wow’
          factor in their home. whether your seeking that special feature wall,
          floor, bespoke handmade kitchen, clever shelving system or lighting
          system, we have the knowledge and experience to deliver your vision
        </p>
      </v-col>
      <v-col style="padding: 0" cols="12" md="6">
        <img
          height="500px"
          width="100%"
          src="	https://oakbrace.co.uk/img/services4_1_desktop.d048ebc1.jpg"
        />
      </v-col>
    </v-row>
    <!-- footer -->
    <footer>
      <div class="row justify-content-evenly align-items-center main">
        <div class="stat col-sm-12 col-md-3">
          <div class="allignnn">
            <a
              href="/"
              aria-current="page"
              class="nav-link color router-link-exact-active active"
              ><img
                height="60px"
                width="100%"
                src="https://oakbrace.co.uk/img/Oaksbrace.ee14c22e.svg" /></a
            ><a href="/" class="nav-link">Home</a>
            <a href="/about" class="nav-link">About</a>
            <a href="/services" class="nav-link"> Services</a
            ><a href="/contact" class="nav-link"> Contact</a>
          </div>
        </div>
        <div class="col-sm-4 col-md-4">
          <div class="paddd">
            <h4 class="titlefoot">Get in touch</h4>
            <v-divider
              style="background-color: white; width: 100px"
            ></v-divider>
            <br />
            <div class="txttt">
              Please feel free to get in touch with us regarding any of our
              services using the following details
            </div>
            <ul>
              <div class="colorrr">
                <li>
                  8H Green Park Copperkins Lane, <br />
                  Amersham HP6 5SS.
                </li>
                <li>Phone: 01296 593 879</li>
                <li>
                  Email:
                  <a style="color: rgb(0, 51, 102) !important">
                    info@oakbrace.co.uk</a
                  >
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div class="col-sm-5 col-md-5">
          <div class="paddd">
            <h4 class="titlefoot">Where we are</h4>
            <v-divider
              style="background-color: white; width: 300px"
            ></v-divider>
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2473.5627724754904!2d-0.6244450843359499!3d51.686145779664876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48765d8169d545cd%3A0x97bd32e094e38661!2sCopperkins%20Ln%2C%20Amersham%2C%20UK!5e0!3m2!1sen!2sin!4v1634887328158!5m2!1sen!2sin"
              allowfullscreen="allowfullscreen"
              loading="lazy"
              class="size"
              style="border: 0px"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
export default {
  components: {
    navbar,
  },
};
</script>
<style scoped>
.text {
  color: black;
  font-family: "Kanit", sans-serif;
}
.img {
  opacity: 70%;
}
p {
  text-align: center;
}
h1 {
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  font-family: "Kanit", sans-serif;
}
.p1,
.p2 {
  font-size: 22px;
  line-height: 25px;
  font-family: "Kanit", sans-serif;
}
.p3 {
  font-size: 16px;
  line-height: 20px !important;
  font-family: "Kanit", sans-serif;
}
.nav-link {
  display: block;
  padding: 0.5rem 1rem;
  color: #0d6efd;
  text-decoration: none;
  transition: color 0.15s ease-in-out;
  font-family: "Kanit", sans-serif;
}
.txttt {
  font-size: 15px;
  line-height: 1;
  color: #2f7ef5 !important;
  padding-bottom: 20px;
  font-family: "Kanit", sans-serif;
}
h4 {
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  font-size: 1.5rem;
  font-family: "Kanit", sans-serif;
}
.titlefoot {
  color: #51b4b6 !important;
  font-family: "Kanit", sans-serif;
}
a {
  text-align: center;
}
.nav-link:hover {
  color: #51b4b6;
}
.main {
  background-color: #add8e6;
  font-family: "Kanit", sans-serif;
}
</style>
