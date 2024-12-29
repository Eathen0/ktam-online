<script setup lang="ts">
import Sidebar from '@/components/admin/Sidebar.vue';
import AppplicationDetails from '@/components/ApplicationDetails.vue';
import { ref, watchEffect } from 'vue';

const showDetails = ref(false);
watchEffect(() => {
    document.body.style.overflow = showDetails.value ? 'hidden' : 'auto';
})
</script>

<template>
    <div class="w-full xl:min-h-screen overflow-x-hidden">
        <div 
            class="fixed left-0 top-0 w-full pt-20 lg:pt-0 h-screen bg-blue-200 transition-all duration-500"
            :class="{ 'translate-x-0 opacity-100 pointer-events-auto': showDetails, 'translate-x-40 opacity-0 pointer-events-none': !showDetails }"
        >
            <div class="h-full overflow-y-auto p-4 container mx-auto">
                <button @click="showDetails = false" class="text-center py-2 px-8 rounded-btn bg-gray-300 shadow-md font-semibold mb-4">Keluar</button>
                <AppplicationDetails />
            </div>
        </div>
        
        
        <div 
            class="flex flex-col gap-4 transition-all duration-500 relative p-4"
            :class="{ '-translate-x-40 opacity-0 pointer-events-none': showDetails, 'translate-x-0 opacity-100 pointer-events-auto': !showDetails }"
        >
            <div class="absolute left-4 top-4 flex">
                <p class="font-bold text-lg">Bukti Pembayaran</p>
                <div class="relative ml-4 cursor-pointer">
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
            <div class="flex flex-col lg:flex-row gap-4 my-4">
                <div class="lg:w-1/2 w-full bg-gradient-to-r from-[#8BC6F9] via-[#59ACEE] to-[#2F95E8] h-40 mt-10 flex">
                    <div class=" grow flex flex-col justify-center items-center text-white ">
                        <h1 class="font-semibold text-3xl">BUKTI BAYAR</h1>
        
                        <h1 class="font-bold text-6xl">1700</h1>
                    </div>
                    <svg width="202" height="160 " viewBox="0 0 147 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="122.186" cy="56.6667" rx="62.0351" ry="68.8095" fill="url(#paint0_linear_250_5)" />
                        <ellipse cx="78.3964" cy="143.286" rx="78.0912" ry="86.619" fill="url(#paint1_linear_250_5)" />
                        <defs>
                            <linearGradient id="paint0_linear_250_5" x1="156.123" y1="49.7857" x2="60.1249" y2="46.495"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#1677FE" stop-opacity="0.49" />
                                <stop offset="1" stop-color="#FEFEFE" stop-opacity="0.53" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_250_5" x1="95.75" y1="168.222" x2="20.2037" y2="133.057"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#1677FE" stop-opacity="0.34" />
                                <stop offset="1" stop-color="white" stop-opacity="0.52" />
                            </linearGradient>
                        </defs>
                    </svg>
        
                </div>
                <div class="lg:w-1/2 w-full bg-gradient-to-r from-[#7CDBCE] via-[#4AD3C1] to-[#28CEB5] h-40 lg:mt-10 flex">
                    <div class=" grow flex flex-col justify-center items-center text-white ">
                        <h1 class="font-semibold text-3xl">BUKTI BAYAR</h1>
        
                        <h1 class="font-bold text-6xl">1700</h1>
                    </div>
        
                    <svg width="202" height="160" viewBox="0 0 202 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        
                        <g mask="url(#mask0_143_297)">
                            <ellipse cx="176.149" cy="64.2848" rx="64.6266" ry="76.8457"
                                fill="url(#paint1_linear_143_297)" />
                            <ellipse cx="130.531" cy="161.02" rx="81.3535" ry="96.7351"
                                fill="url(#paint2_linear_143_297)" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_143_297" x1="-108.367" y1="77.5" x2="202" y2="77.5"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#8BC6F9" />
                                <stop offset="0.5" stop-color="#59ACEE" />
                                <stop offset="1" stop-color="#2F95E8" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_143_297" x1="211.504" y1="56.6002" x2="111.48"
                                y2="53.4018" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#299C70" />
                                <stop offset="1" stop-color="#FEFEFE" stop-opacity="0.53" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_143_297" x1="148.609" y1="188.868" x2="68.0442"
                                y2="153.886" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#299C70" />
                                <stop offset="1" stop-color="white" stop-opacity="0.52" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-y-hidden">
                <table class="table-auto w-full text-left border-collapse border border-gray-200">
                    <thead class="bg-blue-200 text-center">
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
                                <button @click="showDetails = true">
                                    <svg width="35" height="35" viewBox="0 0 50 50" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="50" height="50" rx="10" fill="#1677FE" fill-opacity="0.3" />
                                        <path
                                            d="M25.7143 20.7142C24.5776 20.7142 23.4876 21.1657 22.6838 21.9695C21.8801 22.7732 21.4286 23.8633 21.4286 24.9999C21.4286 26.1366 21.8801 27.2267 22.6838 28.0304C23.4876 28.8341 24.5776 29.2856 25.7143 29.2856C26.8509 29.2856 27.941 28.8341 28.7447 28.0304C29.5485 27.2267 30 26.1366 30 24.9999C30 23.8633 29.5485 22.7732 28.7447 21.9695C27.941 21.1657 26.8509 20.7142 25.7143 20.7142ZM25.7143 32.1428C23.8199 32.1428 22.0031 31.3902 20.6635 30.0507C19.324 28.7111 18.5714 26.8943 18.5714 24.9999C18.5714 23.1055 19.324 21.2887 20.6635 19.9492C22.0031 18.6096 23.8199 17.8571 25.7143 17.8571C27.6087 17.8571 29.4255 18.6096 30.765 19.9492C32.1046 21.2887 32.8571 23.1055 32.8571 24.9999C32.8571 26.8943 32.1046 28.7111 30.765 30.0507C29.4255 31.3902 27.6087 32.1428 25.7143 32.1428ZM25.7143 14.2856C18.5714 14.2856 12.4714 18.7285 10 24.9999C12.4714 31.2714 18.5714 35.7142 25.7143 35.7142C32.8571 35.7142 38.9571 31.2714 41.4286 24.9999C38.9571 18.7285 32.8571 14.2856 25.7143 14.2856Z"
                                            fill="#1677FE" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>