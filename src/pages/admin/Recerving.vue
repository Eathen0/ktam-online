<script setup lang="js">
import Sidebar from './Sidebar.vue';

function showModal(nama, bukti, surat) {
        document.getElementById('modal').classList.remove('hidden');
        document.getElementById('modalNama').textContent = nama;
        document.getElementById('modalBukti').textContent = bukti;
        document.getElementById('modalSurat').textContent = surat;
    }

    function hideModal() {
        document.getElementById('modal').classList.add('hidden');
    }
</script>

<template>
    <div class="flex justify-center items-center bg-blue-200">
        <div class="">
            <div class="grid grid-cols-11 gap-4 xl:grid-rows-5 lg:grid-rows-10 grid-rows-10 w-screen xl:h-screen p-4">
                <div
                    class="z-50 lg:col-span-1 col-span-12 min-w-16 bg-gradient-to-b from-primary-lighter-2 to-primary-darker w-20 xl:row-span-5 lg:row-span-10 row-span-1 rounded-3xl">
                    <Sidebar />
                </div>
                <div class="absolute left-44 flex">
                    <p class="font-bold text-lg">Dashboard</p>
                    <div class="relative ml-4">
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
                <!-- <div class="flex justify-between">
                </div> -->
                <div
                    class="col-span-5 w-full bg-gradient-to-r from-[#8BC6F9] via-[#59ACEE] to-[#2F95E8] h-40 mt-10 flex ">
                    <div class=" grow flex flex-col justify-center items-center text-white ">
                        <h1 class="font-semibold text-3xl">BUKTI BAYAR</h1>

                        <h1 class="font-bold text-6xl">1700</h1>
                    </div>
                    <svg width="147" height="160 " viewBox="0 0 147 153" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <div
                    class="col-span-5 w-full bg-gradient-to-r from-[#7CDBCE] via-[#4AD3C1] to-[#28CEB5] h-40 mt-10 flex ">
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
                <!-- Table -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden col-span-10 row-span-4  mt-20">
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
                            <!-- Row 1 -->
                            <tr>
                                <td class="px-4 py-2 border border-gray-300 text-center">1</td>
                                <td class="px-4 py-2 border border-gray-300 flex items-center">
                                    <img src="https://via.placeholder.com/50" alt="Avatar"
                                        class="w-12 h-12 rounded-full mr-4">
                                    <div>
                                        <p class="font-bold">Aing maung</p>
                                        <p class="text-sm text-gray-500">Istimewa Muhammadiyah Sudan - PCIM Khartoum
                                            Sudan</p>
                                    </div>
                                </td>
                                <td class="px-4 py-2 border border-gray-300 text-center">Terverifikasi</td>
                                <td class="px-4 py-2 border border-gray-300 text-center">Terverifikasi</td>
                                <td class="flex items-center justify-center">
                                    <button class=" " onclick="showModal()">

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
                            <!-- Row 2 -->
                            <tr class="bg-gray-50">
                                <td class="px-4 py-2 border border-gray-300 text-center">2</td>
                                <td class="px-4 py-2 border border-gray-300 flex items-center">
                                    <img src="https://via.placeholder.com/50" alt="Avatar"
                                        class="w-12 h-12 rounded-full mr-4">
                                    <div>
                                        <p class="font-bold">Meowww</p>
                                        <p class="text-sm text-gray-500">Istimewa Muhammadiyah Sudan - PCIM Khartoum
                                            Sudan</p>
                                    </div>
                                </td>
                                <td class="px-4 py-2 border border-gray-300 text-center">Terverifikasi</td>
                                <td class="px-4 py-2 border border-gray-300 text-center">Terverifikasi</td>
                                <td class="flex items-center justify-center">
                                    <button class=" ">

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
                            <!-- Row 3 -->
                            <tr>
                                <td class="px-4 py-2 border border-gray-300 text-center">3</td>
                                <td class="px-4 py-2 border border-gray-300 flex items-center">
                                    <img src="https://via.placeholder.com/50" alt="Avatar"
                                        class="w-12 h-12 rounded-full mr-4">
                                    <div>
                                        <p class="font-bold">YYYY</p>
                                        <p class="text-sm text-gray-500">Istimewa Muhammadiyah Sudan - PCIM Khartoum
                                            Sudan</p>
                                    </div>
                                </td>
                                <td class="px-4 py-2 border border-gray-300 text-center">Terverifikasi</td>
                                <td class="px-4 py-2 border border-gray-300 text-center">Terverifikasi</td>
                                <td class="flex items-center justify-center">
                                    <button class=" ">

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
                            <!-- Row 4 -->
                            <tr class="bg-gray-50">
                                <td class="px-4 py-2 border border-gray-300 text-center">4</td>
                                <td class="px-4 py-2 border border-gray-300 flex items-center">
                                    <img src="https://via.placeholder.com/50" alt="Avatar"
                                        class="w-12 h-12 rounded-full mr-4">
                                    <div>
                                        <p class="font-bold">OK</p>
                                        <p class="text-sm text-gray-500">Istimewa Muhammadiyah Sudan - PCIM Khartoum
                                            Sudan</p>
                                    </div>
                                </td>
                                <td class="px-4 py-2 border border-gray-300 text-center">Terverifikasi</td>
                                <td class="px-4 py-2 border border-gray-300 text-center">Terverifikasi</td>
                                <td class="flex items-center justify-center">
                                    <button class=" ">

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

                <div id="modal" class="fixed inset-0 bg-black bg-opacity-50 hidden flex items-center justify-center">
                    <div class="bg-white rounded-lg shadow-lg p-6 w-96">
                        <h2 class="text-lg font-bold mb-4">Detail Data</h2>
                        <p><strong>Nama:</strong> <span id="modalNama"></span></p>
                        <p><strong>Bukti Pembayaran:</strong> <span id="modalBukti"></span></p>
                        <p><strong>Surat Keterangan:</strong> <span id="modalSurat"></span></p>
                        <div class="flex justify-end mt-4 gap-2">
                            <button onclick="hideModal()"
                                class="px-4 py-2 bg-gray-500 text-white rounded-lg">Tutup</button>
                            <button class="px-4 py-2 bg-green-500 text-white rounded-lg">Diterima</button>
                            <button class="px-4 py-2 bg-red-500 text-white rounded-lg">Ditolak</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>