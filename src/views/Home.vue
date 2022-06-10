<template>
  <div class="home">
    <HomeComponentOne msg="Welcome to Your Vue.js App" />
    <HomeComponentTwo msg="Welcome to Your Vue.js App" />
    <HomeComponentThree msg="Welcome to Your Vue.js App" />
    <HomeComponentFour msg="Welcome to Your Vue.js App" />
    <FooterComponent msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponentOne from "@/components/Home/HomeComponentOne.vue";
import HomeComponentTwo from "@/components/Home/HomeComponentTwo.vue";
import HomeComponentThree from "@/components/Home/HomeComponentThree.vue";
import HomeComponentFour from "@/components/Home/HomeComponentFour.vue";
import FooterComponent from "@/components/Shared/FooterComponent";

export default {
  name: "Home",
  components: {
    HomeComponentOne,
    HomeComponentTwo,
    HomeComponentThree,
    HomeComponentFour,
    FooterComponent,
  },
};
</script>
