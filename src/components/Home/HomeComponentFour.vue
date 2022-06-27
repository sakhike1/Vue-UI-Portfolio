<template>
  <div class="relative py-16 bg-black">
    <section class="bg-black px-4 py-20 dark:bg-gray-900">
      <div
        class="container flex flex-col items-center px-4 py-12 mx-auto text-center"
      >
        <h2
          class="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12"
        >
          Simple and impactful <br />
          user experiences
        </h2>
      </div>
    </section>
    <div class="relative container m-auto px-6 text-gray-500 md:px-12">
      <div class="grid lg:grid-cols-2 gap-6 md:w-8/12 md:mx-auto lg:w-full">
        <div
          class="group bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 from-fuchsia-500 via-red-600 to-orange-400 rounded-xl shadow-xl px-8 py-12 space-y-6 text-center"
        >
          <img
            class="mx-auto w-24"
            src="@/assets/Saly-13.png"
            alt="illustration"
            loading="lazy"
          />
          <h3 class="text-2xl font-semibold text-white">Web development</h3>

          <a
            href="https://vuetify-todo-task.netlify.app/#/"
            class="relative flex justify-center items-center h-10 w-10 mx-auto before:absolute before:inset-0 before:border before:rounded-full before:transition before:duration-300 group-hover:before:scale-125"
          >
            <span class="text-white">&rightarrow;</span>
          </a>
        </div>
        <div
          class="group bg-gradient-to-tl hover:from-pink-500 hover:to-yellow-500 from-violet-900 via-rose-700 to-amber-400 rounded-xl shadow-xl px-8 py-12 space-y-6 text-center"
        >
          <img
            class="mx-auto w-24"
            src="@/assets/Saly-37.png"
            alt="illustration"
            loading="lazy"
          />
          <h3 class="text-2xl font-semibold text-white">{{ tools }}</h3>

          <a
            v-bind:href="url"
            class="relative flex justify-center items-center h-10 w-10 mx-auto before:absolute before:inset-0 before:border before:rounded-full before:transition before:duration-300 group-hover:before:scale-125"
          >
            <span class="text-white">&rightarrow;</span>
          </a>
        </div>
        <div
          class="group bg-gradient-to-tl hover:from-pink-500 hover:to-yellow-500 from-violet-900 via-rose-700 to-amber-400 rounded-xl shadow-xl px-8 py-12 space-y-6 text-center"
        >
          <img
            class="mx-auto w-24"
            src="@/assets/Saly-20.png"
            alt="illustration"
            loading="lazy"
          />
          <h3 class="text-2xl font-semibold text-white">Web Design</h3>

          <a
            href="https://myprofilesiteweb.netlify.app/"
            class="relative flex justify-center items-center h-10 w-10 mx-auto before:absolute before:inset-0 before:border before:rounded-full before:transition before:duration-300 group-hover:before:scale-125"
          >
            <span class="text-white">&rightarrow;</span>
          </a>
        </div>
        <div
          class="group bg-gradient-to-tl hover:from-pink-500 hover:to-yellow-500 from-violet-900 via-rose-700 to-amber-400 rounded-xl shadow-xl px-8 py-12 space-y-6 text-center"
        >
          <img
            class="mx-auto w-24"
            src="@/assets/Saly-32.png"
            alt="illustration"
            loading="lazy"
          />

          <h3 class="text-2xl font-semibold text-white">Projects</h3>

          <a
            href="/#projects"
            class="relative flex justify-center items-center h-10 w-10 mx-auto before:absolute before:inset-0 before:border before:rounded-full before:transition before:duration-300 group-hover:before:scale-125"
          >
            <span class="text-white">&rightarrow;</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComponentFour",
  data() {
    return {
      tools: "Seo",
      url: "https://www.optimizely.com/optimization-glossary/search-engine-optimization/",
    };
  },
};
</script>

<style></style>
