<template>
  <div class="about">
    <AboutComponentOne msg="Welcome to Your Vue.js App" />
    <AboutComponentTwo msg="Welcome to Your Vue.js App" />
    <AboutComponentThree msg="Welcome to Your Vue.js App" />
    <FooterComponent msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutComponentOne from "@/components/About/AboutComponentOne.vue";
import AboutComponentTwo from "@/components/About/AboutComponentTwo.vue";
import AboutComponentThree from "@/components/About/AboutComponentThree.vue";
import FooterComponent from "@/components/Shared/FooterComponent";

export default {
  name: "About",
  components: {
    AboutComponentOne,
    AboutComponentTwo,
    AboutComponentThree,
    FooterComponent,
  },
};
</script>
