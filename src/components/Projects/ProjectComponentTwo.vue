<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
      <h2
        class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
        Dertemined to add value <br />
        in a team
      </h2>

      <div class="mt-6 sm:-mx-2">
        <div class="inline-flex w-full sm:w-auto sm:mx-2"> </div>

        <div class="inline-flex w-full mt-4 sm:w-auto sm:mx-2 sm:mt-0"> </div>
      </div>
    </div>
  </section>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div class="flex justify-between items-center gap-8 mb-4 sm:mb-8 md:mb-12"></div>

      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
        <!-- image - start -->
        <a href="#" class="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
          <img src="@/assets/Saly100.png" loading="lazy" alt="Photo by Minh Pham"
            class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

          <div
            class="bg-gradient-to-r from-green-300 via-black-500 to-purple-600 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none">
          </div>
        </a>

        <a href="#"
          class="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
          <img src="@/assets/team.jpeg" loading="lazy" alt="Photo by Martin Sanchez"
            class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

          <div
            class="bg-gradient-to-r from-pink-500 via-black-500 to-yellow-500 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none">
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
