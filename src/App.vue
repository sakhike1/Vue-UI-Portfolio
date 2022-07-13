<template>
  <router-view v-slot="{ Component }">
    <div class="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <nav
        class="container px-6 py-12 mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="font-bold text-white md:text-2xl hover:text-orange-400"
            >Sakhile's Portfolio
          </router-link>
          <!-- Mobile menu button -->
          <div @click="toggleNav" class="flex md:hidden">
            <button
              type="button"
              class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
        >
          <li><router-link class="text-gray-100" to="/">Home</router-link></li>
          <li
            ><router-link class="text-gray-100" to="/about"
              >About me</router-link
            ></li
          >
          <li
            ><router-link class="text-gray-100" to="/projects"
              >Projects</router-link
            ></li
          >
          <li
            ><router-link class="text-gray-100" to="/Contact"
              >Contact Me</router-link
            ></li
          >
        </ul>
      </nav>
    </div>
    <transition name="scale-slide">
      <component :is="Component" :key="$route.path"> </component>
    </transition>
  </router-view>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>

<style lang="css">
.scale-slide-enter-active,
.scale-slide-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}
.scale-slide-enter-from {
  left: -100%;
}
.scale-slide-enter-to {
  left: 0%;
}
.scale-slide-leave-from {
  transform: scale(1);
}
.scale-slide-leave-to {
  transform: scale(0.8);
}
</style>
