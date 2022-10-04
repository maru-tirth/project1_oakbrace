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

          <v-card-title v-for="text in title" :key="text.id">
            {{ text.lable }}
          </v-card-title>

          <v-card-subtitle>
            <div v-for="data in details" :key="data.id">
              {{ data.lable }}
            </div>
          </v-card-subtitle>

          <v-card-actions>
            <router-link to="/loft-conversions" style="text-decoration: none"
              ><v-btn
                color="orange lighten-2"
                outlined
                class="explore"
                v-for="text in buttonText"
                :key="text.id"
              >
                {{ text.lable }}
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

          <v-card-title v-for="text in title" :key="text.id">
            {{ text.lable }}
          </v-card-title>

          <v-card-subtitle>
            <div v-for="data in details" :key="data.id">
              {{ data.lable }}
            </div>
          </v-card-subtitle>

          <v-card-actions>
            <router-link to="/extensions" style="text-decoration: none"
              ><v-btn
                color="orange lighten-2"
                outlined
                class="explore"
                v-for="text in buttonText"
                :key="text.id"
              >
                {{ text.lable }}
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

          <v-card-title v-for="text in title" :key="text.id">
            {{ text.lable }}
          </v-card-title>

          <v-card-subtitle>
            <div v-for="data in details" :key="data.id">
              {{ data.lable }}
            </div>
          </v-card-subtitle>

          <v-card-actions>
            <router-link to="/refurbishments" style="text-decoration: none"
              ><v-btn
                color="orange lighten-2"
                outlined
                class="explore"
                v-for="text in buttonText"
                :key="text.id"
              >
                {{ text.lable }}
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

          <v-card-title v-for="text in title" :key="text.id">
            {{ text.lable }}
          </v-card-title>

          <v-card-subtitle>
            <div v-for="data in details" :key="data.id">
              {{ data.lable }}
            </div>
          </v-card-subtitle>

          <v-card-actions>
            <router-link to="/bespoke" style="text-decoration: none"
              ><v-btn
                color="orange lighten-2"
                outlined
                class="explore"
                v-for="text in buttonText"
                :key="text.id"
              >
                {{ text.lable }}
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

          <v-card-title v-for="text in title" :key="text.id">
            {{ text.lable }}
          </v-card-title>

          <v-card-subtitle>
            <div v-for="data in details" :key="data.id">
              {{ data.lable }}
            </div>
          </v-card-subtitle>

          <v-card-actions>
            <router-link to="/kitchen" style="text-decoration: none"
              ><v-btn
                color="orange lighten-2"
                outlined
                class="explore"
                v-for="text in buttonText"
                :key="text.id"
              >
                {{ text.lable }}
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

          <v-card-title v-for="text in title" :key="text.id">
            {{ text.lable }}
          </v-card-title>

          <v-card-subtitle>
            <div v-for="data in details" :key="data.id">
              {{ data.lable }}
            </div>
          </v-card-subtitle>

          <v-card-actions>
            <router-link to="/carpentary" style="text-decoration: none"
              ><v-btn
                color="orange lighten-2"
                outlined
                class="explore"
                v-for="text in buttonText"
                :key="text.id"
              >
                {{ text.lable }}
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
      })
      .catch((err) => console.log(err));
    console.log(this.cards);
  },
};
</script>
