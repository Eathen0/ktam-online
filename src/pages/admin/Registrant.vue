<script setup lang="ts">
import Sidebar from "./Sidebar.vue";
</script>

<template>
  <div class="flex justify-center items-center bg-blue-200 h-screen">
    <div class="grid grid-cols-12 gap-4 gap-y-2 xl:grid-rows-5 lg:grid-rows-10 grid-rows-10 w-screen xl:h-screen p-4">
      <div class="z-50 lg:col-span-1 col-span-12 min-w-16 bg-gradient-to-b from-primary-lighter-2 to-primary-darker w-20 xl:row-span-5 lg:row-span-10 row-span-1 rounded-3xl">
        <Sidebar />
      </div>
      <div class="col-span-11 h-20 bg-white border border-gray-300 rounded-lg flex items-center p-4 justify-end">
        <div class="relative flex items-center w-full">
          <span class="absolute left-3 text-gray-400">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11 19a8 8 0 100-16 8 8 0 000 16zm4.29-4.71l3.3 3.3"></path>
            </svg>
          </span>
          <input type="text" placeholder="Search user name..." class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mr-6" />
          <button class="px-12 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Search</button>
        </div>
      </div>x
      <div class="col-span-11 row-span-3 h-full bg-white border border-gray-300"></div>
    </div>
  </div>
</template>
