<template>
  <div>
    <navbar />
    <div>
      <v-parallax
        class="img"
        dark
        src="https://oakbrace.co.uk/img/banner_about_desktop.feaef9a7.jpg"
        gradient="to bottom,rgba(235,235,235,0)9%,rgba(255,250,250,1)93%)"
      >
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <v-title class="text-h4 font-weight-bold mb-4 text"
              >ABOUT US</v-title
            >
          </v-col>
        </v-row>
      </v-parallax>
    </div>
    <v-container>
      <v-row>
        <v-col cols="6">
          <div class="text1">
            Our design & build team are highly qualified with a proven track
            record
          </div>
        </v-col>
        <v-col cols="6"></v-col>
        <v-col cols="4"
          ><div class="text2">Professional</div>
          <div class="text3">
            Oakbrace Limited fully complies as a principal contractor and takes
            H&S very seriously.
          </div></v-col
        >
        <v-col cols="4"
          ><div class="text4">Committed</div>
          <div class="text5">
            We are always happy to use a JCT contract committed to delivering
            your project on time and budget.
          </div></v-col
        >
        <v-col cols="4"
          ><div class="text6">Comprehensive</div>
          <div class="text7">
            We cater for all your needs from design, build, interior design and
            after care packages.
          </div></v-col
        >

        <v-row>
          <v-col cols="4"
            ><div class="text8">Stress-freel</div>
            <div class="text9">
              Complete peace of mind and stress free project, with your own
              designated project manager and foreman.
            </div></v-col
          >
          <v-col cols="4"
            ><div class="text10">Courteous</div>
            <div class="text11">
              When it comes to working by neighbouring properties, we're
              empathetic, courteous and compliant.
            </div></v-col
          >
          <v-col cols="4"
            ><div class="text12">Experienced</div>
            <div class="text13">
              With years of experience, our clients have confidence in our
              knowledge, and our reviews speak for themselves.
            </div></v-col
          >
        </v-row>
      </v-row>
    </v-container>
    <br />
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
            ><a href="/" class="nav-link"> Home</a>
            <a href="/services" class="nav-link"> Services</a
            ><a href="/contact" class="nav-link"> Contact</a>
          </div>
        </div>
        <div class="col-sm-4 col-md-4">
          <div class="paddd">
            <h4 class="titlefoot">Get in touch</h4>
            <v-divider
              style="background-color: white; width: 400px"
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
              @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;1,400&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
}class="size"
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
// import foot from "../components/foot.vue";
export default {
  components: {
    navbar,
    // foot,
  },
};
</script>
<style scoped>
.text {
  color: black;
  font-family: "Kanit", sans-serif;
}
.text1 {
  color: #51b4b6;
  font-size: 28px;
  font-family: "Kanit", sans-serif;
}
.text2 {
  color: grey;
  font-weight: 500;
  font-size: 16px;
  font-family: "Kanit", sans-serif;
}
.text3 {
  color: #2f7ef5;
  line-height: 25px;
  font-size: 18px;
  font-family: "Kanit", sans-serif;
}
.img {
  opacity: 70%;
}
.text4 {
  color: grey;
  font-weight: 500;
  font-size: 16px;
  font-family: "Kanit", sans-serif;
}
.text5 {
  color: #2f7ef5;
  line-height: 25px;
  font-size: 18px;
  font-family: "Kanit", sans-serif;
}
.text6 {
  color: grey;
  font-weight: 500;
  font-size: 16px;
  font-family: "Kanit", sans-serif;
}
.text7 {
  color: #2f7ef5;
  line-height: 25px;
  font-size: 18px;
  font-family: "Kanit", sans-serif;
}
.text8 {
  color: grey;
  font-weight: 500;
  font-size: 16px;
  font-family: "Kanit", sans-serif;
}
.text9 {
  color: #2f7ef5;
  line-height: 25px;
  font-size: 18px;
  font-family: "Kanit", sans-serif;
}
.text10 {
  color: grey;
  font-weight: 500;
  font-size: 16px;
  font-family: "Kanit", sans-serif;
}
.text11 {
  color: #2f7ef5;
  line-height: 25px;
  font-size: 18px;
  font-family: "Kanit", sans-serif;
}
.text12 {
  color: grey;
  font-weight: 500;
  font-size: 16px;
  font-family: "Kanit", sans-serif;
}
.text13 {
  color: #2f7ef5;
  line-height: 25px;
  font-size: 18px;
  font-family: "Kanit", sans-serif;
}
.main {
  background-color: #add8e6;
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
</style>
