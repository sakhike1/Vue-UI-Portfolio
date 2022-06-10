<template>
  <section>
    <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
      <div class="flex flex-col w-full mb-12 text-center">
        <div
          class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mx-auto mb-5 text-blue-600 rounded-full bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 icon animate-spin icon-tabler icon-tabler-aperture"
            width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
            stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="9"></circle>
            <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
          </svg>
        </div>
        <h1
          class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
          I create beautiful web apps that will<br class="hidden lg:block" />
          catch your users attention
        </h1>

        <p class="max-w-xl mx-auto mt-8 text-base leading-relaxed text-center text-gray-500">
          Creativity is the driver of an unstoppable train called Passion.
        </p>
      </div>
    </div>
  </section>

  <section>
    <div class="px-4 py-12 mx-auto 2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12">
      <div class="flex flex-wrap items-center mx-auto 2xl:max-w-7xl">
        <div class="flex flex-col items-start mb-16 text-left lg:flex-grow lg:w-1/2 lg:pr-24 md:mb-0">
          <span class="mb-8 text-xs font-bold tracking-widest text-black uppercase">
            projects
          </span>
          <h1 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-indigo-600 md:text-7xl lg:text-5xl">
            would you like to see some work i have done ?</h1>
          <p class="mb-8 text-base leading-relaxed text-left text-gray-400">I am available for freelance work in a
            consulting capacity, or as a tech advisor for your company you can also hire me or a permanent role</p>
          <div class="mt-0 lg:mt-6 max-w-7xl sm:flex">
            <div class="mt-3 rounded-lg sm:mt-0">
              <a href="https://myprofilesiteweb.netlify.app/"
                class="bg-indigo-600 hover:bg-black space-x-4 text-white text-center py-4 px-10 rounded-full">See
                projects</a>
            </div>
            <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3"> </div>
          </div>
        </div>
        <div class="w-full mt-12 lg:w-5/6 lg:max-w-lg xl:mt-0">
          <div>
            <div class="relative w-full max-w-lg">
              <div
                class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob">
              </div>

              <div
                class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000">
              </div>
              <div class="relative">
                <img
                  class="object-cover rounded-lg hover:scale-110 transition duration-300 ease-in-out object-center mx-auto shadow-2xl"
                  alt="hero" src="@/assets/saly16.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>
