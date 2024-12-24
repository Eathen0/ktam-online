<script setup lang="ts">
import Sidebar from './Sidebar.vue';

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
                <table class="col-span-10" >
                    <th>NO</th>
                    <th>Nama</th>
                    <th>Bukti bayar</th>
                    <th>Surat Keterangan</th>
                </table>

            </div>
        </div>
    </div>
</template>