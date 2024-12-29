<script setup lang="ts">
import useEventListener from "@/hooks/useEventListener";
import { Chart, registerables } from "chart.js";
import { onUnmounted, ref, shallowRef } from "vue";
import { onMounted } from "vue";

const myChart = shallowRef<HTMLCanvasElement>();
const time = ref('');
const date = ref('');
const intervalId = setInterval(() => {
   const now = new Date()
   // Format time
   time.value = now.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
   })

   // Format date
   date.value = now.toLocaleDateString('id-ID', {
      weekday: 'long',
      day: 'numeric',
      year: 'numeric'
   }).toLowerCase()
}, 1000);

let chart: Chart;
onMounted(() => {
   Chart.register(...registerables);
   Chart.defaults.color = '#fff';
   Chart.defaults.font.size = 16;

   // Data untuk grafik (ganti dengan data Anda)
   const data = {
      labels: ["January", "February", "March", "April", "May", "june", "july", "august", "september", "october", "november", "december"],
      datasets: [
         {
            label: "Data Pendaftar per-bulan",
            data: new Array(12).fill(0).map(() => (Math.random() * (100 - 10) + 10)),
            backgroundColor: "rgba(75, 192, 192, 0)",
            borderColor: "rgba(255, 255, 255, 1)",
            borderWidth: 3,
         }
      ],
   };

   // Opsi untuk grafik
   const options = {
      responsive: false,
      plugins: {
         legend: {
            position: "top",
         },
         tooltip: {
            mode: "index",
            intersect: false,
         },
      },
      scales: {
         x: {
            border: {
               display: true
            },
            grid: {
               display: false,
               color: "#ffffff"
            },
         },
         y: {
            border: {
               display: true
            },
            beginAtZero: true,
            grid: {
               // display: false,
               color: "#ffffff"
            }
         },
      },
   };

   // Membuat Chart
   if (myChart.value) {
      chart = new Chart(myChart.value.getContext('2d') as any, {
         type: "line", // Jenis grafik (ubah sesuai kebutuhan, misalnya: 'line', 'pie', dll)
         data,
         options: options as any,
      });
   }
})
onUnmounted(() => {
   clearInterval(intervalId);
});
useEventListener(window, 'resize', () => {
   if (chart) {
      chart.resize();
   }
});
</script>

<template>
   <div class="grid grid-cols-11 gap-4 xl:grid-rows-5 grid-rows-9 w-full xl:h-screen p-4">
      <div class="xl:col-span-6 lg:col-span-11 col-span-12 lg:row-span-3 row-span-2 overflow-hidden rounded-2xl">
         <div class="flex">
            <p class="font-bold text-lg">Dashboard</p>
            <div class="relative ml-4 w-fit">
               <svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M28 5.0614V18.6136C28.0001 19.7092 27.5907 20.7635 26.8558 21.5606C26.1209 22.3578 25.1159 22.8376 24.0464 22.9019L23.8 22.909H4.2C3.1287 22.9091 2.09788 22.4905 1.31843 21.7388C0.53899 20.9872 0.0698495 19.9593 0.00700016 18.8656L0 18.6136V5.0614L13.223 14.0776L13.3854 14.1721C13.5768 14.2677 13.787 14.3174 14 14.3174C14.213 14.3174 14.4232 14.2677 14.6146 14.1721L14.777 14.0776L28 5.0614Z"
                     fill="black" />
                  <path
                     d="M23.7999 0C25.3119 0 26.6377 0.816136 27.3769 2.0432L13.9999 11.1639L0.622925 2.0432C0.974034 1.4602 1.45633 0.971489 2.02961 0.617814C2.60288 0.26414 3.25052 0.0557511 3.91852 0.0100227L4.19993 0H23.7999Z"
                     fill="black" />
               </svg>
               <div class="absolute -top-1 -right-1 bg-red-500 rounded-full w-3 h-3 "></div>
            </div>
         </div>
         <div class="pt-5 h-full">
            <div class="bg-gradient-to-b from-primary-lighter-2 h-full to-primary-darker rounded-2xl">
               <canvas ref="myChart" class="p-5 w-full"></canvas>
            </div>
         </div>
      </div>
      <div class="xl:col-span-5 lg:col-span-11 col-span-12 bg-gradient-to-b from-primary-lighter-2 to-primary-darker row-span-1 rounded-2xl">
         <div class="h-full w-full rounded-md flex justify-center items-center gap-4">
            <div class="">
               <svg width="75" height="75" viewBox="0 0 69 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M48.1828 30.6375C48.1828 34.65 46.7548 38.4982 44.2127 41.3354C41.6707 44.1727 38.223 45.7667 34.628 45.7667C31.0331 45.7667 27.5854 44.1727 25.0434 41.3354C22.5013 38.4982 21.0732 34.65 21.0732 30.6375C21.0732 26.625 22.5013 22.7768 25.0434 19.9395C27.5854 17.1023 31.0331 15.5083 34.628 15.5083C38.223 15.5083 41.6707 17.1023 44.2127 19.9395C46.7548 22.7768 48.1828 26.625 48.1828 30.6375Z"
                     fill="white" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                     d="M33.2455 75.9948C15.1719 75.1854 0.741089 58.5735 0.741089 38.2021C0.741089 17.3125 15.9123 0.37915 34.6281 0.37915C53.3439 0.37915 68.5151 17.3125 68.5151 38.2021C68.5151 59.0917 53.3439 76.0251 34.6281 76.0251H34.1638C33.8566 76.0251 33.5505 76.015 33.2455 75.9948ZM12.8828 62.0684C12.6294 61.2563 12.5432 60.3909 12.6305 59.5365C12.7178 58.6821 12.9763 57.8606 13.387 57.133C13.7977 56.4054 14.3499 55.7904 15.0026 55.3336C15.6554 54.8768 16.392 54.5899 17.1576 54.4943C30.3668 52.8623 38.9707 53.0098 52.1155 54.5284C52.8822 54.6175 53.6206 54.9007 54.2744 55.3565C54.9282 55.8122 55.4802 56.4285 55.8884 57.1584C56.2965 57.8883 56.5501 58.7125 56.6297 59.5683C56.7094 60.424 56.613 61.2888 56.348 62.0967C61.9819 55.735 65.1369 47.1472 65.1264 38.2021C65.1264 19.4022 51.4716 4.16145 34.6281 4.16145C17.7846 4.16145 4.12979 19.4022 4.12979 38.2021C4.12979 47.499 7.46935 55.9259 12.8828 62.0684Z"
                     fill="white" />
               </svg>
            </div>
            <div class="flex flex-col items-center">
               <h1 class="font-bold text-xl">JUMLAH ANGGOTA </h1>
               <h3 class="font-bold text-6xl">1,899</h3>
            </div>
         </div>
      </div>
      <div class="xl:col-span-5 lg:col-span-11 grid grid-rows-6 grid-cols-2 overflow-hidden shadow-lg col-span-12 bg-white row-span-2 rounded-2xl">
         <div class="p-6 flex items-center gap-4 row-span-2 col-span-2">
            <div class="bg-blue-500 p-4 rounded-2xl">
               <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M21.3784 41.8108C32.5286 41.8108 41.5676 32.7717 41.5676 21.6216C41.5676 10.4714 32.5286 1.43237 21.3784 1.43237C10.2282 1.43237 1.18921 10.4714 1.18921 21.6216C1.18921 32.7717 10.2282 41.8108 21.3784 41.8108Z"
                     stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M19.1351 12.6487V23.8649H30.3513" stroke="white" stroke-width="2"
                     stroke-linecap="round" stroke-linejoin="round" />
               </svg>
            </div>
            <h2 class="text-2xl font-bold">Pendafatar</h2>
         </div>
   
         <div class="row-span-4 col-span-1 flex flex-col justify-center items-center bg-blue-500 p-6 text-white">
            <p class="text-sm font-medium mb-4">BELUM BAYAR</p>
            <p class="text-6xl font-bold">15</p>
         </div>
         <div class="row-span-4 col-span-1 flex flex-col justify-center items-center bg-blue-400 p-6 text-black">
            <p class="text-sm font-medium mb-4">MENUNGGU KONFIRMASI</p>
            <p class="text-6xl font-bold">20</p>
         </div>
      </div>
      <div class="xl:col-span-8 carousel gap-6 lg:col-span-11 col-span-12 row-span-2 rounded-2xl">
         <div
            class="carousel-item bg-white rounded-[3rem] p-6 min-w-56 shadow-lg flex-1 flex flex-col items-center justify-between">
            <div class="flex items-center justify-center flex-grow">
               <p class="sm:text-xl text-center">
                  calon anggota membuat akun untuk pengajuan KTA
               </p>
            </div>
            <div
               class="md:w-20 md:h-20 w-16 h-16 min-h-16 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg mt-4">
               01
            </div>
         </div>
   
         <div
            class="carousel-item bg-white rounded-[3rem] p-6 min-w-56 shadow-lg flex-1 flex flex-col items-center justify-between">
            <div class="flex items-center justify-center flex-grow">
               <p class="sm:text-xl text-center">
                  admin menyetujui pembuatan akun calon pendaftar
               </p>
            </div>
            <div
               class="md:w-20 md:h-20 w-16 h-16 min-h-16 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg mt-4">
               02
            </div>
         </div>
   
         <div
            class="carousel-item bg-white rounded-[3rem] p-6 min-w-56 shadow-lg flex-1 flex flex-col items-center justify-between">
            <div class="flex items-center justify-center flex-grow">
               <p class="sm:text-xl text-center">
                  pendaftar akan di beri notifikasi jika pembuatan KTA berhasil
               </p>
            </div>
            <div
               class="md:w-20 md:h-20 w-16 h-16 min-h-16 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg mt-4">
               03
            </div>
         </div>
   
         <div
            class="carousel-item bg-white rounded-[3rem] p-6 min-w-56 shadow-lg flex-1 flex flex-col items-center justify-between">
            <div class="flex items-center justify-center flex-grow">
               <p class="sm:text-xl text-center">
                  pendaftar dapat menggunakan akun yang telah di buat untuk masuk dan mencetak KTA
               </p>
            </div>
            <div
               class="md:w-20 md:h-20 w-16 h-16 min-h-16 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg mt-4">
               04
            </div>
         </div>
      </div>
      <div class="xl:col-span-3 lg:col-span-11 col-span-12 p-8 relative overflow-hidden bg-gradient-to-bl from-purple-500 to-blue-500 row-span-2 rounded-2xl">
         <svg class="absolute right-0 top-1/2 -translate-y-1/2 w-3/5 opacity-50" viewBox="0 0 213 220" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
               d="M27.3276 47.7412L39.8987 55.9246L27.3276 47.7412ZM116.076 39.8203C123.019 44.3399 132.311 42.3755 136.83 35.4327C141.35 28.4899 139.386 19.1978 132.443 14.6782L116.076 39.8203ZM123.463 180.803L110.892 172.619L110.892 172.619L123.463 180.803ZM171.187 76.6473L163.004 89.2183L163.004 89.2183L171.187 76.6473ZM56.003 132.102C30.5202 115.513 23.31 81.4075 39.8987 55.9246L14.7566 39.5578C-10.8713 78.9262 0.267703 131.616 39.6362 157.244L56.003 132.102ZM39.8987 55.9246C56.4874 30.4418 90.5931 23.2316 116.076 39.8203L132.443 14.6782C93.0743 -10.9496 40.3844 0.189328 14.7566 39.5578L39.8987 55.9246ZM100.212 122.1C117.112 133.101 121.893 155.72 110.892 172.619L136.034 188.986C156.075 158.201 147.364 116.999 116.579 96.9582L100.212 122.1ZM110.892 172.619C99.891 189.519 77.2729 194.3 60.3733 183.299L44.0065 208.441C74.7917 228.482 115.994 219.771 136.034 188.986L110.892 172.619ZM187.413 62.6242C185.851 65.0232 182.32 65.9965 179.371 64.0762L163.004 89.2183C179.446 99.9216 201.7 95.6659 212.555 78.991L187.413 62.6242ZM179.371 64.0762C176.421 62.156 175.882 58.5331 177.443 56.134L152.301 39.7672C141.446 56.442 146.562 78.515 163.004 89.2183L179.371 64.0762Z"
               fill="white" />
         </svg>
   
   
         <div class="relative z-10 flex flex-col h-full">
            <h1 class="text-white text-5xl font-bold mb-2">
               {{ time }}
            </h1>
            <p class="text-white/90 text-xl mb-8">
               {{ date }}
            </p>
            <div class="space-y-1 mt-auto">
               <h2 class="text-white text-2xl font-medium">
                  Selamat Datang
               </h2>
               <p class="text-white text-2xl font-medium">
                  Admin
               </p>
            </div>
         </div>
      </div>
   </div>
</template>