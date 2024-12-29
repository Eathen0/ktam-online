<script setup lang="ts">

</script>

<template>
  <div>
    <div class="mb-4 h-20 bg-white border border-gray-300 rounded-lg flex items-center p-4 justify-end">
      <div class="relative flex items-center w-full">
          <span class="absolute left-3 text-gray-400">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M11 19a8 8 0 100-16 8 8 0 000 16zm4.29-4.71l3.3 3.3"></path>
            </svg>
          </span>
        <input type="text" placeholder="Search user name..."
               class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mr-6"/>
        <button class="px-12 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Search</button>
      </div>
    </div>
    <div class="bg-white rounded-lg shadow-md overflow-y-hidden">
      <table class="table-auto w-full text-left border-collapse border border-gray-200">
        <slot/>
      </table>
    </div>
    <div class="bg-white p-3 flex gap-2 mt-4 rounded-xl w-fit flex-wrap justify-center">
      <div class="rotate-180 flex justify-center items-center rounded-full w-10 h-10 bg-gray-300">
        <svg class="w-5 h-7" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M9.05989 6.93991C9.34079 7.22116 9.49857 7.60241 9.49857 7.99991C9.49857 8.39741 9.34079 8.77866 9.05989 9.05991L3.40389 14.7179C3.12249 14.9992 2.74089 15.1571 2.34304 15.157C1.94518 15.1569 1.56365 14.9988 1.28239 14.7174C1.00113 14.436 0.843168 14.0544 0.843262 13.6566C0.843356 13.2587 1.00149 12.8772 1.28289 12.5959L5.87889 7.99991L1.28289 3.40391C1.00952 3.12114 0.858143 2.7423 0.861374 2.34901C0.864605 1.95571 1.02218 1.57941 1.30016 1.30117C1.57815 1.02292 1.95429 0.864993 2.34759 0.861391C2.74088 0.857789 3.11986 1.0088 3.40289 1.28191L9.06089 6.93891L9.05989 6.93991Z"
                fill="#8D8C8C"/>
        </svg>
      </div>

      <!-- FIRST PAGE-->
      <p class="rounded-full w-10 h-10 bg-gray-100 leading-[2.5rem] text-center">
        1
      </p>
      <p class="rounded-full w-10 h-10 leading-[2.5rem] text-center">
        ...
      </p>

      <p v-for="n in [5,6,7,8,9]" :key="n" class="rounded-full w-10 h-10 bg-gray-100 leading-[2.5rem] text-center">
        {{ n }}
      </p>

      <!-- LAST PAGE -->
      <p class="rounded-full w-10 h-10 leading-[2.5rem] text-center">
        ...
      </p>
      <p class="rounded-full w-10 h-10 bg-gray-100 leading-[2.5rem] text-center">
        10
      </p>
      <div class="flex justify-center items-center rounded-full w-10 h-10 bg-gray-300">
        <svg class="w-5 h-7" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M9.05989 6.93991C9.34079 7.22116 9.49857 7.60241 9.49857 7.99991C9.49857 8.39741 9.34079 8.77866 9.05989 9.05991L3.40389 14.7179C3.12249 14.9992 2.74089 15.1571 2.34304 15.157C1.94518 15.1569 1.56365 14.9988 1.28239 14.7174C1.00113 14.436 0.843168 14.0544 0.843262 13.6566C0.843356 13.2587 1.00149 12.8772 1.28289 12.5959L5.87889 7.99991L1.28289 3.40391C1.00952 3.12114 0.858143 2.7423 0.861374 2.34901C0.864605 1.95571 1.02218 1.57941 1.30016 1.30117C1.57815 1.02292 1.95429 0.864993 2.34759 0.861391C2.74088 0.857789 3.11986 1.0088 3.40289 1.28191L9.06089 6.93891L9.05989 6.93991Z"
                fill="#8D8C8C"/>
        </svg>
      </div>
    </div>
  </div>
</template>