<script setup lang="ts">
import BtnBlueVarian from '@/components/buttons/BtnBlueVarian.vue';
import BtnGreenVarian from '@/components/buttons/BtnGreenVarian.vue';
import {ref, shallowRef} from 'vue';
import {routerState} from "@/routers/router.ts";
import { onMounted } from 'vue';
import {cacheGet, cacheSet} from "@/utils/cachesApp.ts";
import {apiEndPoint} from "@/configs/apiEndPoint.ts";
import axios from 'axios';
import {toast} from "vue3-toastify";

const inputPhoto = shallowRef<HTMLInputElement>();
const inputPPaymentProof = shallowRef<HTMLInputElement>();
const biodata = routerState.routerResult[0]
const reader = new FileReader()
const image = ref()
const paymentProof = ref()

const cacheImage = shallowRef(cacheGet<Blob>('cache-photo'))
const cachePdf = shallowRef(cacheGet<Blob>('cache-doc'))
const cachePaymentProof = ref(cacheGet<string>('cache-payment'))

onMounted( () => {
  if (cacheImage.value) {
    reader.onload = (e) => {
      image.value = e.target?.result as string
    }
    reader.readAsDataURL(cacheImage.value)
  }
});

const handleChange = async (ev: Event) => {
  if (biodata.status_verifikasi != 'belum di verifikasi') return
  const file = (ev.target as HTMLInputElement).files?.[0]
  if (!file) return

  reader.onload = (e) => {
    image.value = e.target?.result as string
  }
  reader.readAsDataURL(file)

  cacheSet('cache-photo', file)
}

const handlePaymentProof = async (ev: Event) => {
  if (biodata.status_verifikasi != '') return
  const file = (ev.target as HTMLInputElement).files?.[0]
  if (!file) return

  paymentProof.value = file.name
  cacheSet('cache-payment', file.name)
}


const handleSubmit = async () => {
  if (biodata.status_verifikasi != 'belum di verifikasi') return
  const toastId = toast('Uploading documents...', { type: 'loading', autoClose: false });
  const paymentProof = (inputPPaymentProof.value as HTMLInputElement)?.files?.[0];

  if (!paymentProof) return

  const formData = new FormData();
  formData.append('id', biodata.id);
  formData.append('fotoDiri', cacheImage.value || image.value);
  formData.append('fileSurat', cachePdf.value, 'BLANKO_PENDAFTARAN_KTA.pdf');
  formData.append('buktiPembayaran', paymentProof);

  try {
    const response = await axios.put(apiEndPoint.uploadDocuments, formData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    toast.remove(toastId);
    console.log(response)
    toast(response.data.message, { type: 'success' });
  } catch (error: any) {
    toast.remove(toastId);
    toast(error.response?.data?.message || error.message, { type: 'success' });
    console.error('Error uploading documents:', error);
  }
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-primary-lighter to-primary-darker flex justify-center items-center">
    <div class="container grid grid-cols-10 gap-6 xl:px-4">
      <div class="bg-white rounded-xl shadow-md lg:col-span-6 col-span-10 pb-8 py-6 px-8">
        <h1 class="text-3xl font-bold mb-6">INFORMASI <br> PEMBUATAN KTAM ONLINE</h1>
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
            Pemohon mengunduh file Formulir Pendaftaran Anggota Ikapeksi yang terletak pada kanan bawah “Cetak
            Formulir”.
          </li>
          <li>
            Setelah Form Permohonan Anggota di tanda tangan setelah itu uplod file , beserta pas photo berwarna,
            dan
            bukti transfer biaya KTA.
          </li>
          <li>
            Ukuran file total maksimal 2MB dengan format JPG atau PDF
          </li>
          <li>
            Setelah berhasil upload persyaratan silakan menghubungi Admin KTA DPP agar minta segera diproses
            KTA-nya.
          </li>
          <li>
            Pemohon menunggu proses verifikasi diterima/dikembalikan hingga pengiriman dilakukan oleh admin DPP.
          </li>
          <li>
            Kartu Tanda Anggota yang sudah jadi akan dikirim melalui ekspedisi dengan biaya kirim ditanggung
            pemohon
            yang dibayarkan langsung ke kurir saat menerima paket.
          </li>
          <li>
            Informasi lebih lanjut bisa menghubungi nomor layanan KTA Ikapeksi Permohonan KTAM Lama/Hilang/Rusak
            silakan menghubungi nomer WA Admin Pusat: …………………………………….
          </li>
        </ol>
      </div>
      <div class="bg-white rounded-xl shadow-md lg:col-span-4 col-span-10 p-6">
        <div class="flex gap-4">
          <div @click="inputPhoto?.click()"
               :class="{ 'bg-gray-400': !(image || biodata.url_foto_diri), 'pointer-events-none': biodata.status_verifikasi != 'belum di verifikasi' }"
               class="relative w-32 h-32 rounded-xl flex flex-col justify-center items-center group cursor-pointer">
            <svg v-if="!image" class="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title></title>
                <g data-name="Layer 6" id="Layer_6">
                  <path class="cls-1"
                        d="M5,5V27H27V5ZM25,7V17.83l-3.5-3.25-5.71,6.33L12,18.83,7,23.65V7ZM8.49,25l3.86-3.71,3.86,2.13,5.41-6L25,20.56V25Z">
                  </path>
                  <rect class="cls-1" height="2" width="1.81" x="11.06" y="15"></rect>
                </g>
              </g>
            </svg>
            <p v-if="!image" class="text-white text-sm">foto anda</p>

            <input @change="handleChange" type="file" hidden ref="inputPhoto" accept=".jpg,.pdf,.png">
            <img v-if="image || biodata.url_foto_diri" :src="image || biodata.url_foto_diri" class="w-full aspect-square left-0 top-0 absolute object-cover">
          </div>
          <div>
            <h2 class="text-xl font-semibold">{{ biodata.nama_lengkap }}</h2>
            <p class="italic">{{ biodata.email }}</p>
            <p class="italic">Dokumen:
              <strong v-if="cachePdf">BLANKO_PENDAFTARAN_KTA.pdf</strong>
              <strong v-else>
                <a :href="apiEndPoint.baseUrl + biodata.url_surat_permohonan" target="_blank" class="text-blue-500" download>BLANKO_PENDAFTARAN_KTA.pdf</a>
              </strong>
            </p>
            <p class="italic">Bukti Bayar:
              <strong v-if="paymentProof || cachePaymentProof">
                {{ paymentProof || cachePaymentProof }}
              </strong>
              <strong v-else>
                <a :href="apiEndPoint.baseUrl + biodata.url_bukti_pembayaran" target="_blank" class="text-blue-500" download>Bukti Bayar</a>
              </strong>
            </p>
          </div>
        </div>
        <div class="badge badge-md mt-2 w-32 h-auto text-center"
             :class="{ 'bg-yellow-400': !(cachePdf  && ( paymentProof || cachePaymentProof ) && ( image || cacheImage )), 'bg-green-400': cachePdf  && ( paymentProof || cachePaymentProof ) && ( image || cacheImage ) }"
        >
          {{
            (biodata.status_verifikasi == 'belum di verifikasi') ? biodata.status_verifikasi :
            (cachePdf && ( paymentProof || cachePaymentProof ) && ( image || cacheImage )) ?
            'berkas sudah diupload' :
            'menuggu upload berkas'
          }}
        </div>

        <div class="flex gap-3 mt-6 flex-wrap" v-if="biodata.status_verifikasi == 'belum di verifikasi'">
          <RouterLink :to="{name: 'application-letter', params: { nik: biodata.nik, email: biodata.email }}" class="grow">
            <BtnGreenVarian class="text-white w-full">Tanda tangan berkas</BtnGreenVarian>
          </RouterLink>
          <BtnBlueVarian class="grow" @click="inputPPaymentProof?.click()">Upload Bukti Pembayaran</BtnBlueVarian>
          <input @change="handlePaymentProof" type="file" hidden ref="inputPPaymentProof" accept=".jpg,.pdf,.png,.jpeg">
          <button @click="handleSubmit" :class="{'pointer-events-none opacity-50 bg-gray-500 text-black': !(cachePdf && ( paymentProof || cachePaymentProof ) && ( image || cacheImage )), 'text-white bg-green-500': cachePdf && ( paymentProof || cachePaymentProof ) && ( image || cacheImage )}" class="grow block text-center py-2 px-8 rounded-btn shadow-md font-semibold">
            Kirim
          </button>
        </div>
      </div>
    </div>
  </div>
</template>