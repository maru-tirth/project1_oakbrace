<template>
  <div style="display: flex; width: 100%; column-gap: 10px">
    <v-card
      class="mx-auto"
      max-width="400"
      v-for="item in title"
      :key="item.id"
    >
      <v-img
        class="white--text align-end cardimage"
        height="400px"
        :src="item.images"
        gradient="to bottom, rgba(10,15,21,.33), rgba(20,30,62,.7)"
      >
        <v-card-title>{{ item.label }}</v-card-title>

        <v-card-text class="text--white">
          <div>
            {{ item.description }}
          </div>
        </v-card-text>

        <v-card-actions>
          <router-link :to="item.link" style="text-decoration: none"
            ><v-btn color="white" outlined class="explore"
              >Explore</v-btn
            ></router-link
          >
        </v-card-actions>
      </v-img>
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
          images: "	https://oakbrace.co.uk/img/home3_desktop.2f7c3a77.jpg",
        },
      ],
    };
  },
};
</script>
