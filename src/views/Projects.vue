<template>
  <div class="projects">
    <ProjectComponentOne msg="Welcome to Your Vue.js App" />
    <ProjectComponentTwo msg="Welcome to Your Vue.js App" />
    <FooterComponent msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src

import ProjectComponentOne from "@/components/Projects/ProjectComponentOne.vue";
import ProjectComponentTwo from "@/components/Projects/ProjectComponentTwo.vue";
import FooterComponent from "@/components/Shared/FooterComponent";

export default {
  name: "Projects",
  components: {
    ProjectComponentOne,
    ProjectComponentTwo,
    FooterComponent,
  },
};
</script>
