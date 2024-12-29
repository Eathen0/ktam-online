<script setup lang="ts">
import BtnBlueVarian from "@/components/buttons/BtnBlueVarian.vue";
import {routerState} from "@/routers/router.ts";
import BtnGreenVarian from "@/components/buttons/BtnGreenVarian.vue";
import {useRouter} from "vue-router";

const errorMessage = routerState.errorMessages
const router = useRouter()
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen gap-2">
    <h1 class="text-4xl font-bold">:(</h1>
    <p class="text-lg">Terjadi Kesalahan</p>
    <code>{{ errorMessage }}</code>
    <div class="flex gap-4">
      <router-link :to="{ name: 'home' }">
        <BtnBlueVarian>Home</BtnBlueVarian>
      </router-link>
      <BtnGreenVarian @click="router.back()">Back</BtnGreenVarian>
    </div>
  </div>
</template>
