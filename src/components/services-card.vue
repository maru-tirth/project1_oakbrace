<template>
  <div
    style="
      display: flex;
      width: 100%;
      column-gap: 10px;
      flex-wrap: wrap;
      row-gap: 27px;
    "
  >
    <v-card
      class="mx-auto"
      max-width="344"
      v-for="item in title"
      :key="item.id"
    >
      <v-img :src="item.images" height="200px"></v-img>

      <v-card-title>
        {{ item.label }}
      </v-card-title>

      <v-card-subtitle>
        <div>
          {{ item.description }}
        </div>
      </v-card-subtitle>

      <v-card-actions>
        <router-link :to="item.link" style="text-decoration: none"
          ><v-btn color="orange lighten-2" outlined class="explore">
            Explore
          </v-btn></router-link
        >
      </v-card-actions>
    </v-card>
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
          label: "Loft Conversions",
          description:
            "Add space with a beautiful master bedroom, new spacious home office or a special dream retreat.",
          link: "/loft-conversions",
          images: "https://oakbrace.co.uk/img/home1_desktop.533bf097.jpg",
        },

        {
          id: 2,
          label: "Extensions",
          description:
            "Why move house when you can add rooms and space, improving your properties value and potential.",
          link: "/extensions",
          images: "https://oakbrace.co.uk/img/home2_desktop.7855d3d4.jpg",
        },
        {
          id: 3,
          label: "Refurbishments",
          description:
            "Improving your property can be overwhelming, but we can help you design and deliver your dream",
          link: "/refurbishments",
          images: "https://oakbrace.co.uk/img/home3_desktop.2f7c3a77.jpg",
        },
        {
          id: 4,
          label: "Bespoke Finishes",
          description:
            " Feature walls, flooring, hand made kitchens, shelving systems, lighting & smart solutions.",
          link: "/bespoke",
          images: "https://oakbrace.co.uk/img/home1_desktop.533bf097.jpg",
        },
        {
          id: 5,
          label: "Carpentry",
          description:
            " We are renowned for our beautifully designed and installed contemporary and traditional kitchen",
          link: "/carpentary",
          images: "https://oakbrace.co.uk/img/home1_desktop.533bf097.jpg",
        },
        {
          id: 6,
          label: "Kitchen Fit-outs",
          description:
            " Highly skilled craftsmen with a passion for timber woodwork, joinery and the art or carpentry.",
          link: "/kitchen",
          images: "https://oakbrace.co.uk/img/home1_desktop.533bf097.jpg",
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
