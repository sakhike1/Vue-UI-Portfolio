<template>
  <section class="bg-black">
    <div class="px-4 py-32 max-w-screen-xl mx-auto sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
        <div
          class="relative hover:scale-110 transition duration-300 ease-in-out h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last">
          <img class="absolute bg-indigo-300 inset-0 object-fit w-full h-full animate__animated animate__bounceInUp"
            src="@/assets/heroimage.png " alt="Man using a computer" />
        </div>

        <div class="lg:py-24">
          <h2 class="text-3xl text-white font-bold sm:text-4xl">
            Frontend developer
          </h2>

          <p class="mt-3 text-base text-neutral-600">
            Freelance web developer i enjoy building everything from small
            business sites to rich interactive web apps. i curate experiences
            with technology.
          </p>

          <a class="inline-flex items-center px-8 py-3 mt-8 ease-in-out delay-150 rounded-full border hover:-translate-y-1 text-sm transition-colors duration-300  text-violet-100 shadow-violet-400"
            href="https://vuetify-todo-task.netlify.app/#/" v-wave="{ color: 'gray' }">
            <button>View work</button>
            <svg class="w-5 h-5 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style>
</style>
