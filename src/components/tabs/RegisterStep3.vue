<script setup lang="ts">
import imgCloud from '@/assets/decorations/cloud.png'
import TextInput from '@/components/forms/TextInput.vue';
import logoIkapeksi from '@/assets/logos/ikapeksi.png'
import logoIkapeksiBersatu from '@/assets/logos/ikapeksi-bersatu.png'
import BtnBlueVarian from '../buttons/BtnBlueVarian.vue';
import BtnGreenVarian from "@/components/buttons/BtnGreenVarian.vue";
</script>

<template>
  <div class="grid lg:grid-cols-2 grid-cols-1 w-full">
    <div class="px-8 py-12 relative min-h-screen bg-gradient-to-b from-primary-lighter to-primary-darker">
      <div class="mb-10">
        <h1 class="text-center text-3xl font-bold mb-8">PENDAFTARAN ANGGOTA</h1>
        <ul class="steps w-full">
          <li class="step step-success">data diri</li>
          <li class="step step-success">data alamat</li>
          <li class="step step-success">data usaha</li>
        </ul>
      </div>
      <div class="relative z-10 grid md:grid-cols-2 grid-cols-1 gap-4">
        <TextInput name="nama_usaha" placeholder="nama usaha">Nama Usaha</TextInput>
        <TextInput name="bidang_usaha" placeholder="bidang usaha">Bidang Usaha</TextInput>
        <TextInput name="alamat_usaha" placeholder="alamat usaha">Alamat Usaha</TextInput>
        <TextInput name="karyawan_usaha" placeholder="Jumlah karyawan" type="number">Jumlah Karyawan</TextInput>
        <TextInput name="tahun_berdiri" placeholder="YYYY" type="number">Tahun Berdiri Usaha</TextInput>
        <TextInput name="nama_perusahaan_bekerja" placeholder="Nama Perusahaan">Nama Perusahaan / Instansi Bekerja
        </TextInput>
        <TextInput name="jabatan_bekerja" placeholder="Jabatan Posisi">Jabatan Posisi</TextInput>
        <TextInput name="alamat_perusahaan_bekerja" placeholder="Alamat Perusahaan">Alamat Perusahaan / Instansi
          Bekerja
        </TextInput>

        <div class="md:col-span-2 text-center mt-10">
          <a href="#page-2" class="mr-4">
            <BtnBlueVarian type="button">Sebelumnya</BtnBlueVarian>
          </a>
          <BtnGreenVarian>Kirim</BtnGreenVarian>
        </div>
      </div>

      <img :src="imgCloud" class="absolute bottom-0 left-0 w-full h-1/2 object-cover pointer-events-none">
    </div>
    <div class="bg-white lg:flex hidden flex-col gap-10 justify-center items-center">
      <img class="relative z-10 max-w-96 min-w-40 w-3/6" :src="logoIkapeksi" alt="">
      <img class="relative z-10 max-w-96 min-w-40 w-3/6" :src="logoIkapeksiBersatu" alt="">
    </div>
  </div>
</template>