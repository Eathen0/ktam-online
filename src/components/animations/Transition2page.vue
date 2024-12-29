<script setup lang="ts">
import {onUnmounted, watchEffect} from "vue";

const showSubPage = defineModel<boolean>({ required: true })
watchEffect(() => document.body.style.overflow = showSubPage.value ? 'hidden' : 'auto')
onUnmounted(() => document.body.style.overflow = 'auto')
</script>
<template>
  <div>
    <div class="transition-all duration-500 fixed left-0 top-0 w-full pt-20 lg:pt-0 h-screen bg-blue-200" :class="{ 'translate-x-0 opacity-100 pointer-events-auto': showSubPage, 'translate-x-40 opacity-0 pointer-events-none': !showSubPage }">
      <slot name="subPage" />
    </div>
    <div class="transition-all duration-500" :class="{ '-translate-x-40 opacity-0 pointer-events-none': showSubPage, 'translate-x-0 opacity-100 pointer-events-auto': !showSubPage }">
      <slot name="mainPage" />
    </div>
  </div>
</template>