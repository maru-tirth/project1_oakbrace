<template>
  <v-row>
    <v-col cols="12" md="4">
      <v-card class="mx-auto" max-width="400">
        <v-img
          class="white--text align-end cardimage"
          height="400px"
          src="https://oakbrace.co.uk/img/home1_desktop.533bf097.jpg"
          gradient="to bottom, rgba(10,15,21,.33), rgba(20,30,62,.7)"
        >
          <v-card-title v-for="title1 in cards">{{
            title1.title1
          }}</v-card-title>

          <v-card-text class="text--white">
            <div v-for="details1 in cards">
              {{ details1.details1 }}
            </div>
          </v-card-text>

          <v-card-actions>
            <router-link to="/loft-conversions" style="text-decoration: none"
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
          <v-card-title v-for="title2 in cards">{{
            title2.title2
          }}</v-card-title>

          <v-card-text class="text--white">
            <div v-for="details2 in cards">
              {{ details2.details2 }}
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
          <v-card-title v-for="title3 in cards">{{
            title3.title3
          }}</v-card-title>

          <v-card-text class="text--white">
            <div v-for="details3 in cards">
              {{ details3.details3 }}
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
