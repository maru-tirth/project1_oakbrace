<template>
  <div>
    <navbar />
    <div>
      <div class="hero">
        <h4 class="text0">ABOUT</h4>
      </div>
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
    <foot />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import foot from "../components/foot.vue";

export default {
  components: {
    navbar,
    foot,
  },
};
</script>
<style scoped>
.hero {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero::before {
  content: "";
  background-image: url("https://oakbrace.co.uk/img/banner_contact_desktop.325b93c3.jpg");
  background-size: cover;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.75;
}

.text0 {
  position: relative;
  color: #000;
  font-size: 3rem;
  line-height: 0.9;
  text-align: center;
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
