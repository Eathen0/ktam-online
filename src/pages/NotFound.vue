<script setup lang="ts">
import BtnBlueVarian from "@/components/buttons/BtnBlueVarian.vue";
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen gap-2">
    <h1 class="text-4xl font-bold">404</h1>
    <p class="text-lg">Halaman tidak ditemukan</p>
    <router-link :to="{ name: 'home' }">
      <BtnBlueVarian>Home</BtnBlueVarian>
    </router-link>
  </div>
</template>