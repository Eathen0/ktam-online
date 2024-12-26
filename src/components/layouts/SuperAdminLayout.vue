<script setup lang="ts">
import Sidebar from '@/components/admin/Sidebar.vue';
</script>

<template>
   <div class="flex justify-center min-h-screen bg-blue-200">
      <div class="flex flex-col lg:flex-row w-full min-h-screen">
         <Sidebar />
         <RouterView />
      </div>
   </div>
</template>