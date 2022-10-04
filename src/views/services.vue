<template>
  <div>
    <navbar />
    <div>
      <div class="hero">
        <h4 class="text">SERVICES</h4>
      </div>

      <br />
      <card />
      <br />
      <foot />
    </div>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero::before {
  content: "";
  background-image: url("https://oakbrace.co.uk/img/banner_services_desktop.7656156a.jpg");
  background-size: cover;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.75;
}

.text {
  position: relative;
  color: #000;
  font-size: 3rem;
  font-weight: 300;
  line-height: 0.9;
  text-align: center;
  font-family: "Kanit", sans-serif;
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
import card from "../components/services-card.vue";
import foot from "../components/foot.vue";

export default {
  components: {
    navbar,
    card,
    foot,
  },
  data: () => ({
    show: false,
  }),
};
</script>
