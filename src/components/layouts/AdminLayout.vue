<script setup lang="ts">
import Sidebar from '@/components/admin/Sidebar.vue';
</script>

<template>
   <div class="flex justify-center items-center bg-blue-200">
      <div class="flex flex-col lg:flex-row w-full">
         <Sidebar />
         <RouterView />
      </div>
   </div>
</template>