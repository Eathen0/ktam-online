<script setup lang="ts">
import imgCloud from '@/assets/decorations/cloud.png'
import BtnGreenVarian from '@/components/buttons/BtnGreenVarian.vue';
import TextInput from '@/components/forms/TextInput.vue';
import logoIkapeksi from '@/assets/logos/ikapeksi.png'
import logoIkapeksiBersatu from '@/assets/logos/ikapeksi-bersatu.png'
import BtnBlueVarian from '../buttons/BtnBlueVarian.vue';
import axios from "axios";
import {toast} from "vue3-toastify";
import {shallowRef} from "vue";
import Selection from "@/components/forms/Selection.vue";

const dataProvince = shallowRef<any>(null)
axios('https://ibnux.github.io/data-indonesia/provinsi.json').then(res => {
  dataProvince.value = res.data
}) .catch(() => toast('Gagal Memuat Data Provinsi', {type: 'error'}))
const dataKabupaten = shallowRef<any>(null)
const dataKecamatan = shallowRef<any>(null)
const dataKelurahan = shallowRef<any>(null)


const handdleProvinceChange = (e: any) => {
  const [ id ] = e.target.value.split('|')

  dataKabupaten.value = null;
  dataKecamatan.value = null;
  dataKelurahan.value = null

  if (id === '') return

  axios(`https://ibnux.github.io/data-indonesia/kabupaten/${id}.json`)
      .then(res => dataKabupaten.value = res.data)
}

const handdleKabupatenChange = (e: any) => {
  const [ id ] = e.target.value.split('|')

  dataKecamatan.value = null
  dataKelurahan.value = null

  if (id === '') return

  axios('https://ibnux.github.io/data-indonesia/kecamatan/' + id + '.json')
      .then(res => dataKecamatan.value = res.data)
}

const handdleKecamatanChange = (e: any) => {
  const [ id ] = e.target.value.split('|')

  dataKelurahan.value = null

  if (id === '') return

  axios('https://ibnux.github.io/data-indonesia/kelurahan/' + id + '.json')
      .then(res => dataKelurahan.value = res.data)
}
</script>

<template>
   <div class="grid lg:grid-cols-2 grid-cols-1 w-full">
      <div class="bg-white lg:flex hidden flex-col gap-10 justify-center items-center">
         <img class="relative z-10 max-w-96 min-w-40 w-3/6" :src="logoIkapeksi" alt="">
         <img class="relative z-10 max-w-96 min-w-40 w-3/6" :src="logoIkapeksiBersatu" alt="">
      </div>
      <div class="px-8 py-12 relative min-h-screen bg-gradient-to-b from-primary-lighter to-primary-darker">
         <div class="mb-10">
            <h1 class="text-center text-3xl font-bold mb-8">PENDAFTARAN ANGGOTA</h1>
            <ul class="steps w-full">
               <li class="step step-success">data diri</li>
               <li class="step step-success">data alamat</li>
               <li class="step">data usaha</li>
            </ul>
         </div>
         <div class="relative z-10 grid md:grid-cols-2 grid-cols-1 gap-4">
            <Selection name="provinsi-address" :class="{'pointer-event-none cursor-not-allowed opacity-75': !dataProvince }" label="Provinsi" :on-change="handdleProvinceChange">
              <template v-if="dataProvince">
                <option v-for="{id, nama} in dataProvince as any" :key="id" :value="`${id}|${nama}`">{{ nama == 'P A P U A' ? 'PAPUA' : nama }}</option>
              </template>
            </Selection>
            <Selection name="kabupaten-address" :class="{'pointer-event-none cursor-not-allowed opacity-75': !dataKabupaten}" label="Kabupaten" :on-change="handdleKabupatenChange">
              <template v-if="dataKabupaten">
                <option v-for="{id, nama} in dataKabupaten as any" :key="id" :value="`${id}|${nama}`">{{ nama == 'P A P U A' ? 'PAPUA' : nama }}</option>
              </template>
            </Selection>
            <Selection name="kecamatan-address" :class="{'pointer-event-none cursor-not-allowed opacity-75': !dataKecamatan}" label="Kecamatan" :on-change="handdleKecamatanChange">
              <template v-if="dataKecamatan">
                <option v-for="{id, nama} in dataKecamatan as any" :key="id" :value="`${id}|${nama}`">{{ nama == 'P A P U A' ? 'PAPUA' : nama }}</option>
              </template>
            </Selection>
            <Selection name="desa-address" :class="{'pointer-event-none cursor-not-allowed opacity-75': !dataKelurahan}" label="Desa / Kelurahan">
              <template v-if="dataKelurahan">
                <option v-for="{id, nama} in dataKelurahan as any" :key="id" :value="`${id}|${nama}`">{{ nama == 'P A P U A' ? 'PAPUA' : nama }}</option>
              </template>
            </Selection>
            <TextInput name="rt" placeholder="rt">RT</TextInput>
            <TextInput name="rw" placeholder="rw">RW</TextInput>
            <TextInput name="jalan" placeholder="jalan">Jalan</TextInput>
            <TextInput name="kode_pos" placeholder="5 digit angka">Kode Pos</TextInput>
            <div class="md:col-span-2 text-center mt-10">
              <a href="#page-1" class="mr-4">
               <BtnBlueVarian type="button">Sebelumnya</BtnBlueVarian>
              </a>
              <a href="#page-3">
               <BtnGreenVarian type="button">Lanjut</BtnGreenVarian>
              </a>
            </div>
         </div>

         <img :src="imgCloud" class="absolute bottom-0 left-0 w-full h-1/2 object-cover pointer-events-none">
      </div>
   </div>
</template>