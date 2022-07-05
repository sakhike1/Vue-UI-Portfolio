<template>
  <section class="w-full bg-black">
    <div
      class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24"
    >
      <div class="flex w-full mx-auto text-left">
        <div class="relative inline-flex items-center mx-auto align-middle">
          <div class="text-center">
            <h1
              class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl"
            >
              Developer devoted <br class="hidden lg:block" />
              to crafting beautiful web apps
            </h1>

            <div
              class="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6 pt-6"
            >
              <div class="mt-3 rounded-lg sm:mt-0">
                <a
                  :href="url"
                  class="border hover:bg-white space-x-4 hover:text-black text-white hover:border-indigo-300 text-center py-4 px-10 rounded-full"
                  >{{ Resume }}</a
                >
              </div>
              <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3"> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="px-4 bg-black py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
        <div class="relative z-10 lg:py-16">
          <div class="relative h-64 sm:h-80 lg:h-full">
            <img
              class="absolute rounded-lg inset-0 object-cover w-full h-full hover:scale-90 transition duration-300 ease-in-out"
              src="@/assets/Saly50.png"
              alt="Indoors house"
            />
          </div>
        </div>

        <div class="relative flex items-center bg-black">
          <span
            class="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-black lg:block lg:-left-16"
          ></span>

          <div class="p-8 sm:p-16 lg:p-24">
            <h2 class="text-2xl text-neutral-600 font-bold sm:text-3xl pb-8">
              Do you need exra hands for your next projects ?
            </h2>

            <a
              class="hover:bg-indigo-600 border space-x-4 text-white text-center py-4 px-10 rounded-full"
              href="/#Contact"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutComponentOne",
  data() {
    return {
      Resume: "download Resume",
      url: "https://we.tl/t-iWk4Royn8x",
    };
  },
};
</script>

<style></style>

