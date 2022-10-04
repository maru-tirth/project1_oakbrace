<template>
  <div>
    <navbar />
    <div>
      <br />
      <br />
      <br />
      <!-- CAROUSEL-START -->
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="false"
        autoplay
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner" style="height: 100%">
          <div class="carousel-item active">
            <a href="https://oakbrace.co.uk"
              ><img
                src="https://images4.alphacoders.com/114/1141675.jpg"
                class="d-block w-100"
                alt="oakbrace"
            /></a>
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://images2.alphacoders.com/995/995155.png"
              class="d-block w-100"
              alt="oakbrace"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://cdn.homedit.com/wp-content/uploads/2020/01/River-House-Indonesia-by-Alexis-Dornier.jpg"
              class="d-block w-100"
              style="height: 100%"
              alt="oakbrace"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <!-- <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> -->
      </div>
      <!-- CAROUSEL-END -->

      <br />

      <!-- CARD-START -->
      <br />
      <cards />
      <!-- CARD END -->
      <br />
      <br />
      <!-- TEXT-START -->
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="text1">Why choose us?</div>
            <div class="text2">
              Our design & build team are highly qualified with a proven track e
              on desktorecord
            </div>
          </v-col>
          <v-col cols="6"></v-col>
          <v-col cols="4"
            ><div class="text3">Professional</div>
            <div class="text4">
              Oakbrace Limited fully complies as a principal contractor and
              takes H&S very seriously.
            </div></v-col
          >
          <v-col cols="4"
            ><div class="text5">Committed</div>
            <div class="text6">
              We are always happy to use a JCT contract committed to delivering
              your project on time and budget.
            </div></v-col
          >
          <v-col cols="4"
            ><div class="text7">Comprehensive</div>
            <div class="text8">
              We cater for all your needs from design, build, interior design
              and after care packages.
            </div></v-col
          >
        </v-row>
      </v-container>
      <!-- TEXT-END -->
      <br />
      <div>
        <foot />
      </div>
    </div>
    <!-- loader part  -->
    <!-- <div class="loader-container">
      <img src="./load.gif" alt="" />
    </div> -->
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import cards from "../components/home-card.vue";
import foot from "../components/foot.vue";

export default {
  components: {
    navbar,
    cards,
    foot,
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
.cardimage:hover {
  opacity: 0.7;
}
.explore:hover {
  background-color: white;
}
.explore {
  background-color: transparent !important;
}
.text1 {
  color: grey;
  font-size: 16px;
  font-family: "Kanit", sans-serif;
}
.text2 {
  color: #51b4b6;
  font-size: 28px;
  font-family: "Kanit", sans-serif;
}
.text3 {
  color: grey;
  font-weight: 500;
  font-size: 16px;
  font-family: "Kanit", sans-serif;
}
.text4 {
  color: #2f7ef5;
  line-height: 25px;
  font-size: 18px;
  font-family: "Kanit", sans-serif;
}
.text5 {
  color: grey;
  font-weight: 500;
  font-size: 16px;
  font-family: "Kanit", sans-serif;
}
.text6 {
  color: #2f7ef5;
  line-height: 25px;
  font-size: 18px;
  font-family: "Kanit", sans-serif;
}
.text7 {
  color: grey;
  font-weight: 500;
  font-size: 16px;
  font-family: "Kanit", sans-serif;
}

.text8 {
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
.nav-link:hover {
  color: #51b4b6;
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
.carousel-caption {
  color: #fff;
  background-color: #000000a1;
  width: 100%;
  left: 0%;
  bottom: 0%;
}
.carousel-indicators .active {
  background-color: #fff;
}

@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:,wght@1,500&display=swap");
</style>
