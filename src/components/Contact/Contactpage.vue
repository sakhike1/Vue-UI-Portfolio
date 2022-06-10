<template>
  <v-parallax height="300" src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
    <section class="relative py-20 2xl:py-40 bg-gradient-to-r from-gray-700 via-gray-900 to-black overflow-hidden">
      <div class="container px-3 mx-auto">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="my-10 text-5xl lg:text-6xl font-bold font-heading text-white">I like building things on the
            internet.
          </h2>

        </div>
      </div>
    </section>
    <section class="bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <div class="mt-6">
          <div class="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-3">
          </div>

          <div class="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-3 sm:mt-0">
          </div>
        </div>
      </div>
    </section>
    <section class="bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div class="lg:py-12 lg:col-span-2">
            <img class="animate-bounce" src="@/assets/5.png" alt="" />
          </div>

          <div class="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
            <form class="space-y-4">
              <div>
                <label class="sr-only" for="name">Name</label>
                <input class="w-full p-3 text-sm border-yellow rounded-lg" placeholder="Name" type="text" id="name" />
              </div>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label class="sr-only" for="email">Email</label>
                  <input class="w-full p-3 text-sm rounded-lg" placeholder="Email address" type="email" id="email" />
                </div>

                <div>
                  <label class="sr-only" for="phone">Phone</label>
                  <input class="w-full p-3 text-sm border-yellow  rounded-lg" placeholder="Phone Number" type="tel"
                    id="phone" />
                </div>
              </div>

              <div>
                <label class="sr-only" for="message">Message</label>
                <textarea class="w-full p-3 text-sm border-yellow  rounded-lg" placeholder="Message" rows="8"
                  id="message"></textarea>
              </div>

              <div class="mt-4 border-black">
                <button type="submit"
                  class="inline-flex items-center px-8 py-3 mt-8 ease-in-out delay-150 bg-indigo-500 hover:-translate-y-1 text-sm transition-colors duration-300 shadow-xl text-violet-100 bg-violet-500 hover:bg-violet-600 shadow-violet-400">
                  <span class="font-medium"> Send Message </span>

                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </v-parallax>

</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',


    }
  }
}
</script>


