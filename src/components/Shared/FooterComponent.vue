<template>
  <footer class="text-white bg-black">
    <div class="max-w-screen-xl px-4 pt-32 pb-12 mx-auto sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <a
          class="inline-block px-12 py-4 mt-8 text-sm font-medium border rounded-full border-white"
          href="/#Contact"
          v-wave="{
            color: 'gray',
            initialOpacity: 0.5,
            duration: 2,
            easing: 'ease-in',
          }"
        >
          Contact me
        </a>
      </div>

      <div
        class="pt-12 mt-32 border-t border-white/25 sm:items-center sm:justify-between sm:flex"
      >
        <div class="flex justify-center mt-6 space-x-6 sm:justify-end sm:mt-0">
          <a
            class="p-2 border rounded-full border-white/25 hover:opacity-75"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <span class="sr-only"> Linkedin </span>

            <svg
              class="w-6 h-6 text-blue fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              ></path>
            </svg>
          </a>
          <a
            class="p-2 border rounded-full border-white/25 hover:opacity-75"
            href="https://github.com/sakhike1"
            target="_blank"
            rel="noreferrer"
          >
            <span class="sr-only">github </span>

            <svg
              class="w-6 h-6 text-blue fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
