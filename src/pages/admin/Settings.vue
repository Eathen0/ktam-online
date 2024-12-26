<script setup lang="ts">
import TextInput from '@/components/forms/TextInput.vue';
import imgGeometry from '@/assets/decorations/geometry.png';
</script>

<template>
   <div class="h-full relative w-full">
      <div class="absolute left-4 top-4 flex z-20">
         <p class="font-bold text-lg">Settings</p>
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
      <div class="relative mt-10">
         <div
            class="absolute left-0 top-4 overflow-hidden w-full h-52 bg-gradient-to-r from-primary-darker to-primary-lighter-2">
            <img :src="imgGeometry" class="object-cover w-full h-full">
         </div>
         <div className="container mx-auto pb-4 pt-28 relative z-30">
            <div className="grid gap-6 md:grid-cols-[300px,1fr] lg:gap-8 w-full px-4">
               <div className="bg-white rounded-lg shadow-lg p-6 h-fit">
                  <div className="flex flex-col items-center text-center">
                     <div className="relative mb-4">
                        <img src="https://i.pinimg.com/originals/01/f1/3d/01f13d4fe963f269a2ad0a70d19e50df.jpg"
                           alt="Profile picture" className="h-32 w-32 rounded-full object-cover" />
                        <button className="absolute bottom-0 right-0 rounded-full bg-blue-500 p-2 text-white">
                           <svg class="h-4 w-4" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M1.5 1.5H3.375L4.625 0.25H8.375L9.625 1.5H11.5C11.8315 1.5 12.1495 1.6317 12.3839 1.86612C12.6183 2.10054 12.75 2.41848 12.75 2.75V10.25C12.75 10.5815 12.6183 10.8995 12.3839 11.1339C12.1495 11.3683 11.8315 11.5 11.5 11.5H1.5C1.16848 11.5 0.850537 11.3683 0.616116 11.1339C0.381696 10.8995 0.25 10.5815 0.25 10.25V2.75C0.25 2.41848 0.381696 2.10054 0.616116 1.86612C0.850537 1.6317 1.16848 1.5 1.5 1.5ZM6.5 3.375C5.6712 3.375 4.87634 3.70424 4.29029 4.29029C3.70424 4.87634 3.375 5.6712 3.375 6.5C3.375 7.3288 3.70424 8.12366 4.29029 8.70971C4.87634 9.29576 5.6712 9.625 6.5 9.625C7.3288 9.625 8.12366 9.29576 8.70971 8.70971C9.29576 8.12366 9.625 7.3288 9.625 6.5C9.625 5.6712 9.29576 4.87634 8.70971 4.29029C8.12366 3.70424 7.3288 3.375 6.5 3.375ZM6.5 4.625C6.99728 4.625 7.47419 4.82254 7.82583 5.17417C8.17746 5.52581 8.375 6.00272 8.375 6.5C8.375 6.99728 8.17746 7.47419 7.82583 7.82583C7.47419 8.17746 6.99728 8.375 6.5 8.375C6.00272 8.375 5.52581 8.17746 5.17417 7.82583C4.82254 7.47419 4.625 6.99728 4.625 6.5C4.625 6.00272 4.82254 5.52581 5.17417 5.17417C5.52581 4.82254 6.00272 4.625 6.5 4.625Z"
                                 fill="white" />
                           </svg>
                        </button>
                     </div>
                     <h2 className="text-2xl font-bold">Nene!!!!!</h2>
                     <div className="mt-4 space-y-2 text-sm text-gray-600">
                        <div className="flex items-center justify-center gap-2">
                           <span>Email:</span>
                           <span>Monkeyluffy@gmail.com</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                           <span>Telepon:</span>
                           <span>089646688826</span>
                        </div>
                     </div>
                  </div>
               </div>

               <div>
                  <div className="bg-white rounded-lg shadow-lg p-6">
                     <form className="space-y-6">
                        <div className="space-y-4">
                           <TextInput class="border border-gray-300" placeholder="Monkey D Luffy">Nama</TextInput>
                           <TextInput class="border border-gray-300" placeholder="example@email.com">Email</TextInput>
                           <TextInput class="border border-gray-300" placeholder="083809280938">No. HP</TextInput>
                           <TextInput class="border border-gray-300" placeholder="">Ubah Password</TextInput>
                        </div>

                        <button type="submit"
                           className="w-full rounded-md bg-blue-500 px-4 py-2 text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                           Simpan
                        </button>
                     </form>
                  </div>

                  <div class="bg-white p-4 mt-4 shadow-lg rounded-lg">
                     <h1 class="text-2xl font-bold mb-6">INFORMASI <br> PEMBUATAN KTAM ONLINE</h1>
                     <ol class="list-inside list-decimal">
                        <li>
                           Permohonan Online hanya untuk pemohon KTA Baru. Bukan KTAM Lama/Rusak/Hilang.
                        </li>
                        <li>
                           Pemohon mengisi data diri secara lengkap dan benar
                        </li>
                        <li>
                           Biaya Pendaftaran Anggota :
                           <ul class="list-disc list-inside ml-4">
                              <li>
                                 <strong>Rp. 50.000</strong>
                                 ( Mendapatkan KTA dan Sticker Ikapeksi )
                              </li>
                              <li>
                                 <strong>Rp. 250.000</strong>
                                 ( Mendapatkan KTA, Jaket Anggota Ikapeksi dan Sticker )
                                 <strong>
                                    ditransfer ke nomer rekening DPP IKAPEKSI INDONESIA ( ……………………………
                                 </strong>
                              </li>
                           </ul>
                        </li>
                        <li>
                           Pemohon mengunduh file Formulir Pendaftaran Anggota Ikapeksi yang terletak pada kanan bawah
                           “Cetak
                           Formulir”.
                        </li>
                        <li>
                           Setelah Form Permohonan Anggota di tanda tangan setelah itu uplod file , beserta pas photo
                           berwarna,
                           dan
                           bukti transfer biaya KTA.
                        </li>
                        <li>
                           Ukuran file total maksimal 2MB dengan format JPG atau PDF
                        </li>
                        <li>
                           Setelah berhasil upload persyaratan silakan menghubungi Admin KTA DPP agar minta segera
                           diproses
                           KTA-nya.
                        </li>
                        <li>
                           Pemohon menunggu proses verifikasi diterima/dikembalikan hingga pengiriman dilakukan oleh
                           admin DPP.
                        </li>
                        <li>
                           Kartu Tanda Anggota yang sudah jadi akan dikirim melalui ekspedisi dengan biaya kirim
                           ditanggung
                           pemohon
                           yang dibayarkan langsung ke kurir saat menerima paket.
                        </li>
                        <li>
                           Informasi lebih lanjut bisa menghubungi nomor layanan KTA Ikapeksi Permohonan KTAM
                           Lama/Hilang/Rusak
                           silakan menghubungi nomer WA Admin Pusat: …………………………………….
                        </li>
                     </ol>

                     <RouterLink :to="{ name: 'super-admin-edit-informations' }" className="inline-block text-center mt-4 w-full rounded-md bg-blue-500 px-4 py-2 text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Ubah Informasi
                     </RouterLink>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>