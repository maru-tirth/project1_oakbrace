import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/home.vue";
import services from "../views/services.vue";
import about from "../views/about.vue";
import contact from "../views/contact.vue";
import loftconversions from "../views/loft-conversions.vue";
import extensions from "../views/extensions.vue";
import refurbishments from "../views/refurbishments.vue";
import kitchen from "../views/kitchen.vue";
import bespoke from "../views/bespoke.vue";
import carpentary from "../views/carpentary.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/services",
    name: "services",
    component: services,
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },

  {
    path: "/contact",
    name: "contact",
    component: contact,
  },
  {
    path: "/loft-conversions",
    name: "loft-conversions",
    component: loftconversions,
  },

  {
    path: "/extensions",
    name: "extensions",
    component: extensions,
  },

  {
    path: "/refurbishments",
    name: "refurbishments",
    component: refurbishments,
  },
  {
    path: "/kitchen",
    name: "kitchen",
    component: kitchen,
  },
  {
    path: "/carpentary",
    name: "carpentary",
    component: carpentary,
  },
  {
    path: "/bespoke",
    name: "bespoke",
    component: bespoke,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
