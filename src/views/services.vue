<template>
  <div>
    <navbar />
    <div>
      <v-parallax
        class="img"
        dark
        src="	https://oakbrace.co.uk/img/banner_services_desktop.7656156a.jpg"
      >
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="text-h4 font-weight-bold mb-4 text">Our Services</h1>
          </v-col>
        </v-row>
      </v-parallax>
      <div>
        <!-- card1 -->
        <br />
        <v-row>
          <v-col cols="12" md="4">
            <v-card class="mx-auto" max-width="344">
              <v-img
                src="https://oakbrace.co.uk/img/banner_services1_mobile.aa83cb60.jpg"
                height="200px"
              ></v-img>

              <v-card-title> LOFT CONVERSIONS </v-card-title>

              <v-card-subtitle>
                Ad space with a beautiful master bedroom,newspacious home office
                or a special dream retreat
              </v-card-subtitle>

              <v-card-actions>
                <router-link
                  to="/loft-conversions"
                  style="text-decoration: none"
                  ><v-btn color="orange lighten-2" outlined class="explore">
                    Explore
                  </v-btn></router-link
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <!-- card2 -->
          <v-col cols="12" md="4">
            <v-card class="mx-auto" max-width="344">
              <v-img
                src="https://oakbrace.co.uk/img/banner_services2_desktop.ddbf9235.jpg"
                height="200px"
              ></v-img>

              <v-card-title> EXTENSIVE BUILDS </v-card-title>

              <v-card-subtitle>
                Why move house when you can add rooms and space,improving your
                properties valuse and potential.
              </v-card-subtitle>

              <v-card-actions>
                <router-link to="/extensions" style="text-decoration: none"
                  ><v-btn color="orange lighten-2" outlined class="explore">
                    Explore
                  </v-btn></router-link
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <!-- card3 -->
          <v-col cols="12" md="4">
            <v-card class="mx-auto" max-width="344">
              <v-img
                src="https://oakbrace.co.uk/img/banner_services3_mobile.e8f43fbf.jpg"
                height="200px"
              ></v-img>

              <v-card-title> REFURBISHMENTS </v-card-title>

              <v-card-subtitle>
                Improving yourproperty can be overwhelming,but we can help you
                and desing and deliver your dream.</v-card-subtitle
              >

              <v-card-actions>
                <router-link to="/refurbishment" style="text-decoration: none"
                  ><v-btn color="orange lighten-2" outlined class="explore">
                    Explore
                  </v-btn></router-link
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-card class="mx-auto" max-width="344">
              <v-img
                src="	https://oakbrace.co.uk/img/banner_services4_desktop.601802b1.jpg"
                height="200px"
              ></v-img>

              <v-card-title> BESPOKE FINISHES </v-card-title>

              <v-card-subtitle>
                Feature walls, flooring, hand made kitchens,sheliving systems,
                lighting & smart solutions
              </v-card-subtitle>

              <v-card-actions>
                <router-link to="/bespoke" style="text-decoration: none"
                  ><v-btn color="orange lighten-2" outlined class="explore">
                    Explore
                  </v-btn></router-link
                >
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card class="mx-auto" max-width="344">
              <v-img
                src="	https://oakbrace.co.uk/img/banner_services5_mobile.85cb677f.jpg"
                height="200px"
              ></v-img>

              <v-card-title>KITCHENS FIT-OUTS</v-card-title>

              <v-card-subtitle>
                We are renowned for our beautifully designed and installed
                contemporary and traditional kitchen
              </v-card-subtitle>

              <v-card-actions>
                <router-link to="/kitchen" style="text-decoration: none"
                  ><v-btn color="orange lighten-2" outlined class="explore">
                    Explore
                  </v-btn></router-link
                >
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card class="mx-auto" max-width="344">
              <v-img
                src="	https://oakbrace.co.uk/img/banner_services6_mobile.b625f3be.jpg"
                height="200px"
              ></v-img>

              <v-card-title> CARPENTARY </v-card-title>

              <v-card-subtitle>
                Highly skilled craftsmen with a passio for timber,joinery and
                the art or carpentry
              </v-card-subtitle>

              <v-card-actions>
                <router-link to="/carpentary" style="text-decoration: none"
                  ><v-btn color="orange lighten-2" outlined class="explore">
                    Explore
                  </v-btn></router-link
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>
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
              ><a href="/about" class="nav-link">About</a>
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
                class="size"
                style="border: 0px"
              ></iframe>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.text {
  color: black;
  font-family: "Kanit", sans-serif;
}
.img {
  opacity: 70%;
}
/* footer */
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
.nav-link:hover {
  color: #51b4b6;
}
.explore:hover {
  background-color: #fef9f1;
}
</style>

<script>
import navbar from "../components/navbar.vue";
export default {
  components: {
    navbar,
  },
  data: () => ({
    show: false,
  }),
};
</script>
