<script setup lang="ts">
import TextInput from '@/components/forms/TextInput.vue';
import imgGeometry from '@/assets/decorations/geometry.png';
import {ref, shallowRef} from "vue";
import Transition2page from "@/components/animations/Transition2page.vue";
import EditInformations from "@/pages/superAdmin/EditInformations.vue";
import PageTitle from "@/components/PageTitle.vue";

const showEditPage = ref(false);
const a = document.createElement('a')

const photoProfile = ref<string>()
const inputImage = shallowRef<HTMLInputElement>()
const handleChange = (ev: Event) => {
  const file = (ev.target as HTMLInputElement).files?.[0]
  if (!file) return

  photoProfile.value = URL.createObjectURL(file)
}
const handleProfileClick = () => {
  a.href = photoProfile.value || 'https://i.pinimg.com/originals/01/f1/3d/01f13d4fe963f269a2ad0a70d19e50df.jpg'
  a.target = '_blank'
  a.click()
}
</script>

<template>
  <Transition2page v-model="showEditPage" class="h-full w-full relative">
    <template #subPage>
      <div class="lg:ml-20 h-full">
        <div class="container mx-auto p-4 h-full overflow-y-auto">
          <EditInformations>
            <template #exitButton>
              <button @click="showEditPage = false" class="py-2 px-8 rounded-btn bg-gray-500 shadow-md font-semibold text-white">keluar</button>
            </template>
          </EditInformations>
        </div>
      </div>
    </template>
    <template #mainPage>
      <div>
        <PageTitle title="Pengaturan" class="absolute left-4 -top-6 flex z-20"/>

        <div class="relative mt-10">
          <div
              class="absolute left-0 top-4 overflow-hidden w-full h-52 bg-gradient-to-r from-primary-darker to-primary-lighter-2">
            <img :src="imgGeometry" class="object-cover w-full h-full">
          </div>
          <div class="container mx-auto pb-4 pt-28 relative z-30">
            <div class="grid gap-6 md:grid-cols-[300px,1fr] lg:gap-8 w-full px-4">
              <div class="bg-white rounded-lg shadow-lg p-6 h-fit">
                <div class="flex flex-col items-center text-center">
                  <!-- PHOTO PROFILE-->
                  <div class="relative mb-4">
                    <img @click="handleProfileClick" :src="photoProfile || 'https://i.pinimg.com/originals/01/f1/3d/01f13d4fe963f269a2ad0a70d19e50df.jpg'"
                         alt="Profile picture" class="cursor-pointer h-32 w-32 rounded-full object-cover"/>
                    <button @click="inputImage?.click()" class="absolute bottom-0 right-0 rounded-full bg-blue-500 p-2 text-white">
                      <svg class="h-4 w-4" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.5 1.5H3.375L4.625 0.25H8.375L9.625 1.5H11.5C11.8315 1.5 12.1495 1.6317 12.3839 1.86612C12.6183 2.10054 12.75 2.41848 12.75 2.75V10.25C12.75 10.5815 12.6183 10.8995 12.3839 11.1339C12.1495 11.3683 11.8315 11.5 11.5 11.5H1.5C1.16848 11.5 0.850537 11.3683 0.616116 11.1339C0.381696 10.8995 0.25 10.5815 0.25 10.25V2.75C0.25 2.41848 0.381696 2.10054 0.616116 1.86612C0.850537 1.6317 1.16848 1.5 1.5 1.5ZM6.5 3.375C5.6712 3.375 4.87634 3.70424 4.29029 4.29029C3.70424 4.87634 3.375 5.6712 3.375 6.5C3.375 7.3288 3.70424 8.12366 4.29029 8.70971C4.87634 9.29576 5.6712 9.625 6.5 9.625C7.3288 9.625 8.12366 9.29576 8.70971 8.70971C9.29576 8.12366 9.625 7.3288 9.625 6.5C9.625 5.6712 9.29576 4.87634 8.70971 4.29029C8.12366 3.70424 7.3288 3.375 6.5 3.375ZM6.5 4.625C6.99728 4.625 7.47419 4.82254 7.82583 5.17417C8.17746 5.52581 8.375 6.00272 8.375 6.5C8.375 6.99728 8.17746 7.47419 7.82583 7.82583C7.47419 8.17746 6.99728 8.375 6.5 8.375C6.00272 8.375 5.52581 8.17746 5.17417 7.82583C4.82254 7.47419 4.625 6.99728 4.625 6.5C4.625 6.00272 4.82254 5.52581 5.17417 5.17417C5.52581 4.82254 6.00272 4.625 6.5 4.625Z"
                            fill="white"/>
                      </svg>
                    </button>
                    <input type="file" name="profile" ref="inputImage" @change="handleChange" hidden>
                  </div>

                  <h2 class="text-2xl font-bold">Nene!!!!!</h2>
                  <div class="mt-4 space-y-2 text-sm text-gray-600">
                    <div class="flex items-center justify-center gap-2">
                      <span>Email:</span>
                      <span>Monkeyluffy@gmail.com</span>
                    </div>
                    <div class="flex items-center justify-center gap-2">
                      <span>Telepon:</span>
                      <span>089646688826</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div class="bg-white rounded-lg shadow-lg p-6">
                  <form class="space-y-6">
                    <div class="space-y-4">
                      <TextInput class="border border-gray-300" placeholder="Monkey D Luffy">Nama</TextInput>
                      <TextInput class="border border-gray-300" placeholder="example@email.com">Email</TextInput>
                      <TextInput class="border border-gray-300" placeholder="083809280938">No. HP</TextInput>
                      <TextInput class="border border-gray-300" placeholder="">Ubah Password</TextInput>
                    </div>

                    <button type="submit"
                            class="w-full rounded-md bg-blue-500 px-4 py-2 text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
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

                  <button @click="showEditPage = true"
                          class="inline-block text-center mt-4 w-full rounded-md bg-blue-500 px-4 py-2 text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Ubah Informasi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Transition2page>
</template>