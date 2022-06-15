<template>
  <div>
    <navbar />
    <div>
      <!-- CAROUSEL-START -->
      <v-carousel height="650px" width="100%">
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
      <!-- CAROUSEL-END -->

      <!-- CARD-START -->
      <br />
      <v-row>
        <v-col cols="12" md="4">
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="white--text align-end cardimage"
              height="400px"
              src="https://oakbrace.co.uk/img/home1_desktop.533bf097.jpg"
              gradient="to bottom, rgba(10,15,21,.33), rgba(20,30,62,.7)"
            >
              <v-card-title>Loft Conversions</v-card-title>

              <v-card-text class="text--white">
                <div>
                  Add space with a beautiful master bedroom, new spacious home
                  office or a special dream retreat.
                </div>
              </v-card-text>

              <v-card-actions>
                <router-link
                  to="/loft-conversions"
                  style="text-decoration: none"
                  ><v-btn color="white" outlined class="explore">
                    Explore
                  </v-btn></router-link
                >
              </v-card-actions>
            </v-img>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="white--text align-end cardimage"
              height="400px"
              src="	https://oakbrace.co.uk/img/home2_desktop.7855d3d4.jpg"
              gradient="to bottom, rgba(10,15,21,.33), rgba(20,30,62,.7)"
            >
              <v-card-title>Extensions</v-card-title>

              <v-card-text class="text--white">
                <div>
                  Why move house when you can add rooms and space, improving
                  your properties value and potential.
                </div>
              </v-card-text>

              <v-card-actions>
                <router-link to="/extensions" style="text-decoration: none"
                  ><v-btn color="white" outlined class="explore">
                    Explore
                  </v-btn></router-link
                >
              </v-card-actions>
            </v-img>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="white--text align-end cardimage"
              height="400px"
              src="		https://oakbrace.co.uk/img/home3_desktop.2f7c3a77.jpg"
              gradient="to bottom, rgba(10,15,21,.33), rgba(20,30,62,.7)"
            >
              <v-card-title>Refurbishments</v-card-title>

              <v-card-text class="text--white">
                <div>
                  Improving your property can be overwhelming, but we can help
                  you design and deliver your dreams
                </div>
              </v-card-text>

              <v-card-actions>
                <router-link to="/refurbishments" style="text-decoration: none"
                  ><v-btn color="white" outlined class="explore">
                    Explore
                  </v-btn></router-link
                >
              </v-card-actions>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
      <!-- CARD END -->
      <br />
      <br />
      <!-- TEXT-START -->
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="text1">Why choose us?</div>
            <div class="text2">
              Our design & build team are highly qualified with a proven track
              record
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
                ><router-link to="/about" class="nav-link">About</router-link>
                <router-link to="/services" class="nav-link">
                  Services</router-link
                ><router-link to="/contact" class="nav-link">
                  Contact</router-link
                >
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
                  Please feel freeto get in touch with us regarding any of our
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
    </div>
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
export default {
  components: {
    navbar,
  },
  data() {
    return {
      items: [
        {
          src: "https://images4.alphacoders.com/114/1141675.jpg",
        },
        {
          src: "https://images2.alphacoders.com/995/995155.png",
        },
        {
          src: "https://cdn.homedit.com/wp-content/uploads/2020/01/River-House-Indonesia-by-Alexis-Dornier.jpg",
        },
      ],
    };
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
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:,wght@1,500&display=swap");
</style>
