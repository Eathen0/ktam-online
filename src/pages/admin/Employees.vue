<script setup lang="ts">
import Table from "@/components/data/Table.vue";
import Transition2page from "@/components/animations/Transition2page.vue";
import {ref} from "vue";
import ApplicationDetails from "@/components/ApplicationDetails.vue";
import EditApplication from "@/components/EditApplication.vue";
import PageTitle from "@/components/PageTitle.vue";

const showDetails = ref(false)
const showSubPage = ref(1)
</script>

<template>
  <Transition2page v-model="showDetails" class="w-full xl:min-h-screen overflow-x-hidden">
    <template #subPage>
      <div class="lg:ml-20 h-full">
        <div class="h-full overflow-y-auto p-4 container mx-auto">
          <button @click="showDetails = false"
                  class="text-center py-2 px-8 rounded-btn bg-gray-300 shadow-md font-semibold mb-4">Keluar
          </button>
          <component :is="showSubPage === 1 ? ApplicationDetails : EditApplication"/>
        </div>
      </div>
    </template>
    <template #mainPage>
      <div class="flex flex-col gap-4 relative p-4">
        <PageTitle class="absolute left-4 top-4 flex" title="Anggota" />
        <Table class="mt-10">
          <thead class="text-center">
          <tr>
            <th class="px-4 py-2 border border-gray-300">No</th>
            <th class="px-4 py-2 border border-gray-300">Nama</th>
            <th class="px-4 py-2 border border-gray-300">Bukti Pembayaran</th>
            <th class="px-4 py-2 border border-gray-300">Surat Keterangan</th>
            <th class="px-4 py-2 border border-gray-300">AKSI</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="n in 10" :key="n">
            <td class="min-w-max px-4 py-2 border border-gray-300 text-center">{{ n }}</td>
            <td class="min-w-max px-4 py-2 border border-gray-300 flex items-center">
              <img src="https://via.placeholder.com/50" alt="Avatar"
                   class="w-12 h-12 rounded-full mr-4">
              <div>
                <p class="font-bold">Aing maung</p>
                <p class="text-sm text-gray-500">Istimewa Muhammadiyah Sudan - PCIM Khartoum
                  Sudan</p>
              </div>
            </td>
            <td class="min-w-max px-4 py-2 border border-gray-300 text-center">Terverifikasi</td>
            <td class="min-w-max px-4 py-2 border border-gray-300 text-center">Terverifikasi</td>
            <td class="flex items-center justify-center">
              <button @click="() => {showDetails = true; showSubPage = 1}">
                <svg width="35" height="35" viewBox="0 0 50 50" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <rect width="50" height="50" rx="10" fill="#1677FE" fill-opacity="0.3"/>
                  <path
                      d="M25.7143 20.7142C24.5776 20.7142 23.4876 21.1657 22.6838 21.9695C21.8801 22.7732 21.4286 23.8633 21.4286 24.9999C21.4286 26.1366 21.8801 27.2267 22.6838 28.0304C23.4876 28.8341 24.5776 29.2856 25.7143 29.2856C26.8509 29.2856 27.941 28.8341 28.7447 28.0304C29.5485 27.2267 30 26.1366 30 24.9999C30 23.8633 29.5485 22.7732 28.7447 21.9695C27.941 21.1657 26.8509 20.7142 25.7143 20.7142ZM25.7143 32.1428C23.8199 32.1428 22.0031 31.3902 20.6635 30.0507C19.324 28.7111 18.5714 26.8943 18.5714 24.9999C18.5714 23.1055 19.324 21.2887 20.6635 19.9492C22.0031 18.6096 23.8199 17.8571 25.7143 17.8571C27.6087 17.8571 29.4255 18.6096 30.765 19.9492C32.1046 21.2887 32.8571 23.1055 32.8571 24.9999C32.8571 26.8943 32.1046 28.7111 30.765 30.0507C29.4255 31.3902 27.6087 32.1428 25.7143 32.1428ZM25.7143 14.2856C18.5714 14.2856 12.4714 18.7285 10 24.9999C12.4714 31.2714 18.5714 35.7142 25.7143 35.7142C32.8571 35.7142 38.9571 31.2714 41.4286 24.9999C38.9571 18.7285 32.8571 14.2856 25.7143 14.2856Z"
                      fill="#1677FE"/>
                </svg>
              </button>
              <button class="bg-error/20 p-1 rounded-lg ml-2">
                <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.07732 26C4.16948 26 3.39259 25.7174 2.74665 25.1521C2.10072 24.5868 1.7772 23.9065 1.7761 23.1111V4.33333H0.125488V1.44444H8.37853V0H18.2822V1.44444H26.5352V4.33333H24.8846V23.1111C24.8846 23.9056 24.5617 24.5859 23.9157 25.1521C23.2698 25.7183 22.4923 26.001 21.5834 26H5.07732ZM8.37853 20.2222H11.6798V7.22222H8.37853V20.2222ZM14.981 20.2222H18.2822V7.22222H14.981V20.2222Z" fill="#E6212A"/>
                </svg>
              </button>
              <button @click="() => {showDetails = true; showSubPage = 2}" class="bg-warning/20 p-1 rounded-lg ml-2">
                <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.92342 6.9165H4.48443C3.72114 6.9165 2.98911 7.21501 2.44939 7.74637C1.90966 8.27772 1.60645 8.99839 1.60645 9.74984V22.4998C1.60645 23.2513 1.90966 23.972 2.44939 24.5033C2.98911 25.0347 3.72114 25.3332 4.48443 25.3332H17.4354C18.1986 25.3332 18.9307 25.0347 19.4704 24.5033C20.0101 23.972 20.3133 23.2513 20.3133 22.4998V21.0832" stroke="#F08619" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18.8742 4.08324L23.1912 8.33324M25.1842 6.32866C25.7509 5.77071 26.0693 5.01397 26.0693 4.22491C26.0693 3.43585 25.7509 2.67911 25.1842 2.12116C24.6175 1.56321 23.8488 1.24976 23.0473 1.24976C22.2458 1.24976 21.4771 1.56321 20.9104 2.12116L8.80127 13.9999V18.2499H13.1182L25.1842 6.32866Z" stroke="#F08619" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </td>
          </tr>
          </tbody>
        </Table>
      </div>
    </template>
  </Transition2page>
</template>
