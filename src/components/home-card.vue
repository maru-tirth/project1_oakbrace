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
          <v-card-title v-for="item in title" :key="item.id">{{
            item.lable
          }}</v-card-title>

          <v-card-text class="text--white">
            <div v-for="data in details" :key="data.id">
              {{ data.lable }}
            </div>
          </v-card-text>

          <v-card-actions>
            <router-link to="/loft-conversions" style="text-decoration: none"
              ><v-btn
                color="white"
                outlined
                class="explore"
                v-for="text in buttonText"
                :key="text.id"
              >
                {{ text.lable }}
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
          <v-card-title v-for="item in title" :key="item.id">{{
            item.lable
          }}</v-card-title>

          <v-card-text class="text--white">
            <div v-for="data in details" :key="data.id">
              {{ data.lable }}
            </div>
          </v-card-text>

          <v-card-actions>
            <router-link to="/extensions" style="text-decoration: none"
              ><v-btn
                color="white"
                outlined
                class="explore"
                v-for="text in buttonText"
                :key="text.id"
              >
                {{ text.lable }}
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
          <v-card-title v-for="item in title" :key="item.id">{{
            item.lable
          }}</v-card-title>

          <v-card-text class="text--white">
            <div v-for="data in details" :key="data.id">
              {{ data.lable }}
            </div>
          </v-card-text>

          <v-card-actions>
            <router-link to="/refurbishments" style="text-decoration: none"
              ><v-btn
                color="white"
                outlined
                class="explore"
                v-for="text in buttonText"
                :key="text.id"
              >
                {{ text.lable }}
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
      title: [
        {
          id: 1,
          label: "LOFT CONVERSIONS",
        },
        {
          id: 2,
          label: "EXTENSIVE BUILDS",
        },
        {
          id: 3,
          label: "REFURBISHMENTS",
        },
        {
          id: 4,
          label: "BESPOKE FINISHES",
        },
        {
          id: 5,
          label: "KITCHENS FIT-OUTS",
        },
        {
          id: 6,
          label: "CARPENTARY",
        },
      ],
      details: [
        {
          id: 1,
          lable:
            "Add space with a beautiful master bedroom, new spacious home office or a special dream retreat.",
        },
        {
          id: 2,
          lable:
            "Why move house when you can add rooms and space, improving your properties value and potential.",
        },
        {
          id: 3,
          lable:
            "Improving your property can be overwhelming, but we can help you design and deliver your dreams.",
        },
        {
          id: 4,
          lable:
            "Feature walls, flooring, hand made kitchens,sheliving systems, lighting & smart solutions.",
        },
        {
          id: 5,
          lable:
            "We are renowned for our beautifully designed and installed contemporary and traditional kitchen.",
        },
        {
          id: 6,
          lable:
            "Highly skilled craftsmen with a passio for timber,joinery and the art or carpentry.",
        },
      ],
      buttonText: [
        {
          id: 1,
          lable: "Explore",
        },
      ],
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
