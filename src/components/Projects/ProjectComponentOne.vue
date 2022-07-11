<template>
  <section>
    <div
      class="relative bg-black items-center w-full px-5 py-40 mx-auto md:px-12 lg:px-24"
    >
      <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div class="flex flex-col mb-16 sm:text-center sm:mb-0">
          <div
            class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
          >
            <h2
              class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-500 md:text-5xl lg:text-6xl lg:max-w-7xl"
            >
              My latest work project
            </h2>
          </div>
        </div>
      </div>
      <div class="relative mx-auto py-40 max-w-7xl">
        <div
          class="grid max-w-lg gap-12 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none"
        >
          <div class="flex flex-col mb-12 overflow-hidden cursor-pointer">
            <a href="https://refair-a-client.vercel.app/">
              <div class="flex-shrink-0">
                <img
                  class="object-fit w-full h-48 rounded-lg"
                  src="@/assets/uio.png"
                  alt=""
                />
              </div>
            </a>
            <div class="flex flex-col pt-8 justify-between flex-1">
              <a href="https://refair-a-client.vercel.app/"></a>
              <div class="flex-1">
                <a href="https://refair-a-client.vercel.app/"> </a>
                <a href="#" class="block mt-2 space-y-6">
                  <a
                    href="https://refair-a-client.vercel.app/"
                    class="relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                  >
                    <span
                      class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-indigo-500 rounded-full blur-md ease"
                    ></span>
                    <span
                      class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease"
                    >
                      <span
                        class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-yellow-500 rounded-full blur-md"
                      ></span>
                      <span
                        class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"
                      ></span>
                    </span>
                    <span class="relative text-white">View project</span>
                  </a>
                </a>
              </div>
            </div>
          </div>
          <div class="flex flex-col mb-12 overflow-hidden cursor-pointer">
            <a href="https://environmental-woad.vercel.app/">
              <div class="flex-shrink-0">
                <img
                  class="object-fit w-full h-48 rounded-lg"
                  src="@/assets/project-image.png"
                  alt=""
                />
              </div>
            </a>
            <div class="flex flex-col pt-8 justify-between flex-1">
              <a href="https://environmental-woad.vercel.app/"></a>
              <div class="flex-1">
                <a href="https://environmental-woad.vercel.app/"> </a>
                <a
                  href="https://environmental-woad.vercel.app/"
                  class="block mt-2 space-y-6"
                >
                  <a
                    href="https://environmental-woad.vercel.app/"
                    class="relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                  >
                    <span
                      class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-indigo-500 rounded-full blur-md ease"
                    ></span>
                    <span
                      class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease"
                    >
                      <span
                        class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-yellow-500 rounded-full blur-md"
                      ></span>
                      <span
                        class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"
                      ></span>
                    </span>
                    <span class="relative text-white">View project</span>
                  </a>
                </a>
              </div>
            </div>
          </div>
          <div class="flex flex-col mb-12 overflow-hidden cursor-pointer">
            <a href="https://speech-app-kappa.vercel.app/">
              <div class="flex-shrink-0">
                <img
                  class="object-fit w-full h-48 rounded-lg"
                  src="@/assets/Vuetify-image.png"
                  alt=""
                />
              </div>
            </a>
            <div class="flex flex-col pt-8 justify-between flex-1">
              <a href="https://speech-app-kappa.vercel.app/"></a>
              <div class="flex-1">
                <a href="https://speech-app-kappa.vercel.app/"> </a>
                <a
                  href="https://speech-app-kappa.vercel.app/"
                  class="block mt-2 space-y-6"
                >
                  <a
                    href="https://vuetify-todo-task.netlify.app/#/"
                    class="relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                  >
                    <span
                      class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-indigo-500 rounded-full blur-md ease"
                    ></span>
                    <span
                      class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease"
                    >
                      <span
                        class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-yellow-500 rounded-full blur-md"
                      ></span>
                      <span
                        class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"
                      ></span>
                    </span>
                    <span class="relative text-white">View project</span>
                  </a>
                </a>
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
@keyframes swing {
  10% {
    transform: rotate(10deg);
  }

  40% {
    transform: rotate(-10deg);
  }

  60% {
    transform: rotate(5deg);
  }

  80% {
    transform: rotate(-5deg);
  }
}
</style>
