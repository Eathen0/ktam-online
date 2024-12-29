<script setup lang="ts">
import {routerState} from "@/routers/router.ts";
import {watch} from "vue";

watch(routerState, () => {
  document.body.style.overflow = routerState.isLoading ? 'hidden' : 'auto'
})
</script>

<template>
  <div
    class="fixed top-0 left-0 z-[1000] w-full h-screen transition-opacity duration-300 backdrop-blur-sm flex flex-col justify-center items-center"
    :class="{ 'pointer-events-none opacity-0': !routerState.isLoading, 'opacity-100': routerState.isLoading }"
  >
    <div class="shadow-xl py-6 px-12 rounded-xl bg-white flex flex-col items-center">
      <h1 class="text-3xl mb-3">Loading.....</h1>
      <div class="loading-spinner loading loading-lg"></div>
    </div>
  </div>
  <div>
    <RouterView />
  </div>
</template>
