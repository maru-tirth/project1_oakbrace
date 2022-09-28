<template>
  <div>
    <v-row>
      <!-- card1 -->
      <v-col cols="12" md="4">
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://oakbrace.co.uk/img/banner_services1_mobile.aa83cb60.jpg"
            height="200px"
          ></v-img>

          <v-card-title v-for="title1 in cards">
            {{ title1.title1 }}
          </v-card-title>

          <v-card-subtitle v-for="details1 in cards">
            {{ details1.details1 }}
          </v-card-subtitle>

          <v-card-actions>
            <router-link to="/loft-conversions" style="text-decoration: none"
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

          <v-card-title v-for="title2 in cards">
            {{ title2.title2 }}
          </v-card-title>

          <v-card-subtitle v-for="details2 in cards">
            {{ details2.details2 }}
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

          <v-card-title v-for="title3 in cards">
            {{ title3.title3 }}
          </v-card-title>

          <v-card-subtitle v-for="details3 in cards">
            {{ details3.details3 }}
          </v-card-subtitle>

          <v-card-actions>
            <router-link to="/refurbishments" style="text-decoration: none"
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

          <v-card-title v-for="title4 in cards">
            {{ title4.title4 }}
          </v-card-title>

          <v-card-subtitle v-for="details4 in cards">
            {{ details4.details4 }}
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

          <v-card-title v-for="title5 in cards">
            {{ title5.title5 }}</v-card-title
          >

          <v-card-subtitle v-for="details5 in cards">
            {{ details5.details5 }}
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

          <v-card-title v-for="title6 in cards">
            {{ title6.title6 }}</v-card-title
          >

          <v-card-subtitle v-for="details6 in cards">
            {{ details6.details6 }}
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
</template>
<script>
export default {
  data() {
    return {
      cards: [],
    };
  },

  created() {
    fetch("http://localhost:3000/cards")
      .then((res) => res.json())
      .then((data) => {
        this.cards = data;
        console.log(this.cards);
      })
      .catch((err) => console.log(err));
  },
};
</script>
