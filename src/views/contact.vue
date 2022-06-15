<template>
  <div>
    <navbar />
    <div>
      <v-parallax
        class="img"
        dark
        src="https://oakbrace.co.uk/img/banner_contact_desktop.325b93c3.jpg"
        gradient="to bottom,rgba(235,235,235,0)9%,rgba(255,250,250,1)93%)"
      >
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <v-title class="text-h4 font-weight-bold mb-4 text"
              >CONTACT US</v-title
            >
          </v-col>
        </v-row>
      </v-parallax>
      <br />
      <br />
      <v-container>
        <v-row>
          <v-col cols="10" class="text1" align="center"
            >Contact Us for the best solution for your building project
            <hr />
          </v-col>
          <v-col cols="2"></v-col>
          <v-col cols="2">
            <div class="text2">
              <v-icon class="icons">mdi-map-marker-outline</v-icon>
              <b> Address: </b>
            </div>
            <div class="text3">
              Oakbrace Limited,<br />8H Green Park ,<br />
              Copperkins Lane,<br />Amersham,<br />HP6 5SS.
            </div>
          </v-col>
          <v-col cols="6"></v-col>
          <v-col cols="3">
            <div class="text4">
              <v-icon class="icons">mdi-phone</v-icon>
              <b>Landline:</b>
              01296 593 879
            </div>
            <div class="text4">
              <v-icon class="icons">mdi-email</v-icon> <b>Email:</b>
              <u>info@oakbrace.co.uk</u>
            </div>
          </v-col>
          <v-col cols="12">
            <div class="text6"><h1>WHERE WE ARE</h1></div>
            <hr />
            <br />
            <div class="item1" align="center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4947.102900779311!2d-0.622533!3d51.686353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48765d8169d545cd%3A0x97bd32e094e38661!2sCopperkins%20Ln%2C%20Amersham%2C%20UK!5e0!3m2!1sen!2sin!4v1654236161729!5m2!1sen!2sin"
                width="100%"
                height="500"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <br />
      <div class="stat col-sm-12 col-md-12 imp">
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
          <a href="/about" class="nav-link">About</a
          ><a href="/services" class="nav-link">Services</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text {
  color: black;
  font-family: "Kanit", sans-serif;
}
.text1 {
  color: #51b4b6;
  font-size: 30px;
  font-family: "Kanit", sans-serif;
}
.text2 {
  color: #51b4b6;
  font-size: 20px;
  font-family: "Kanit", sans-serif;
}
.text3 {
  color: #51b4b6;
  font-size: 18px;
  font-family: "Kanit", sans-serif;
  font-weight: lighter;
}
.text4 {
  color: #51b4b6;
  font-size: 20px;
  font-family: "Kanit", sans-serif;
}
.text5 {
  color: #51b4b6;
  font-size: 20px;
  font-family: "Kanit", sans-serif;
}
.text6 {
  color: #51b4b6;
  font-family: "Kanit", sans-serif;
}
a {
  text-align: center;
}
.nav-link {
  display: block;
  padding: 0.5rem 1rem;
  color: #0d6efd;
  text-decoration: none;
  transition: color 0.15s ease-in-out;
  font-family: "Kanit", sans-serif;
}
.imp {
  background-color: #add8e6;
  font-family: "Kanit", sans-serif;
}
.nav-link:hover {
  color: #51b4b6;
}
.img {
  opacity: 70%;
}
.icons {
  color: #51b4b6;
}
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap");
</style>

<script>
import navbar from "../components/navbar.vue";
// import { Icon } from "@iconify/vue2";
export default {
  components: {
    navbar,
    // Icon,
  },
};
</script>
