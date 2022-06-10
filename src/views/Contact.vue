<template>
  <div class="Contact">
    <Contactpage msg="Welcome to Your Vue.js App" />
    <FooterComponent msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Contactpage from "@/components/Contact/Contactpage.vue";
import FooterComponent from "@/components/Shared/FooterComponent";

export default {
  name: "Contact",
  components: {
    Contactpage,
    FooterComponent,
  },
};
</script>
