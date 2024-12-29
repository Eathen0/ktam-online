<script setup lang="ts">
import logoIkapeksi from '@/assets/logos/ikapeksi.png'
import signatureKetum from '@/assets/signatures/ttd_ketum.png';
import signatureSekre from '@/assets/signatures/ttd_sekre.png';
import stample from '@/assets/signatures/stample.png';
import SignaturePad from 'signature_pad';
import trimCanvas from '@/utils/trimCanvas';
import { onMounted, onUnmounted, ref, shallowRef } from 'vue';
import useEventListener from '@/hooks/useEventListener';
import pdfTemplate from '@/utils/pdfTemplate';

const
signatureOrientation = ref<'portrait' | 'landscape'>('portrait'),
signatureCanvas = shallowRef<HTMLCanvasElement>(),
sigDataUrl = ref<string | null>(null),
canvasIsShown = ref(false);
let signaturePad: SignaturePad | undefined = undefined
const saveDoc = () => {
   if (sigDataUrl.value && signatureOrientation.value) {
      pdfTemplate(sigDataUrl.value, signatureOrientation.value).save('test-pdf')
   }

}
function resizeCanvas() {
   if (!signatureCanvas.value || !signaturePad) return

   const ratio = Math.max(window.devicePixelRatio || 1, 1) * 0.5;
   signatureCanvas.value.width = signatureCanvas.value.offsetWidth * ratio;
   signatureCanvas.value.height = signatureCanvas.value.offsetHeight * ratio;
   signatureCanvas.value.getContext("2d")?.scale(ratio, ratio);

   signaturePad?.clear();
}

const clearSignature = () => resizeCanvas()

const applySignature = () => {
   if (signaturePad) {
      sigDataUrl.value = trimCanvas(signatureCanvas.value as HTMLCanvasElement)
      showSignatureCanvas(false)
      signatureOrientation.value = window.innerWidth < 1024 ? 'landscape' : 'portrait'
   }
}

const showSignatureCanvas = (show: boolean) => {
   if (show) {
      canvasIsShown.value = true
      document.body.style.overflow = 'hidden'
      resizeCanvas()
   } else {
      document.body.style.overflow = 'auto'
      canvasIsShown.value = false
   }
}

useEventListener(window, 'resize', resizeCanvas)

onMounted(() => {
   if (signatureCanvas.value) {
      signaturePad = new SignaturePad(signatureCanvas.value, {
         minWidth: 2.5,
         maxWidth: 5
      });
      resizeCanvas();
   }
})
onUnmounted(() => {
   document.body.style.overflow = 'auto'
})
</script>

<template>
   <div class="bg-gray-200 h-max">
      <div class="min-h-screen h-full lg:pb-0 pb-6 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-4">
         <!-- DISPLAYED PDF -->
         <div class="flex flex-col relative bg-white py-[2.5em] sm:px-[4em] px-[3em] w-screen md:aspect-[1/1.414] aspect-auto"
            :style="{ maxHeight: 'auto', maxWidth: '210mm', fontSize: 'clamp(12px, 2vw, 16px)', fontFamily: 'serif' }">
            <div class="text-center">
               <img :src="logoIkapeksi" class="inline-block w-[10em]">
               <h1 class="text-[1.5em] font-bold mt-3">BLANKO PENDAFTARAN <br> KTA INPEKSI</h1>
            </div>

            <div class="mt-10">
               <h1 class="text-[1.25em]">Data Diri</h1>
               <table class="ml-[1.5em]">
                  <tbody>
                     <tr>
                        <td class="min-w-[20ch] align-top">Nama Lengkap</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="align-top">NIK</td>
                        <td class="align-top">:</td>
                        <td class="align-top"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
                           labore dolor obcaecati voluptate nobis, praesentium illo magni. Vel nostrum nobis odio
                           nesciunt nisi cupiditate delectus iure quaerat, odit facere expedita.</td>
                     </tr>
                     <tr>
                        <td class="align-top">Tempat, Tangga Lahir</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="align-top">Jenis Kelamin</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="align-top">Agama</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="align-top">Email</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="align-top">No. Telp/HP</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="align-top">Profesis</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="align-top">Pekerjaan</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="align-top">Nama Instansi</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="align-top">Lembaga Pemagangan Jepang</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="align-top">Tahun Keberangkatan</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="align-top">Tahun Kepulangan</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="align-top">Nama Perusahaan Jepang</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="align-top">Bidang Kerja di Jepang</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <div class="mt-10">
               <h1 class="text-[1.25em]">Data Alamat</h1>
               <table class="ml-[1.5em]">
                  <tbody>
                     <tr>
                        <td class="min-w-[20ch] align-top">Profinsi</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="min-w-[20ch] align-top">Kabupaten</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="min-w-[20ch] align-top">Desa / Kelurahan</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="min-w-[20ch] align-top">Alamat</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="min-w-[20ch] align-top">Kode Pos</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <div class="mt-10 grow">
               <h1 class="text-[1.25em]">Data Usaha / Pekerjaan</h1>
               <table class="ml-[1.5em]">
                  <tbody>
                     <tr>
                        <td class="min-w-[20ch] align-top">Nama Usaha</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="min-w-[20ch] align-top">Bidang Usaha</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="min-w-[20ch] align-top">Tahun Berdiri</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="min-w-[20ch] align-top">Alamat Usaha</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="min-w-[20ch] align-top">Nama Instansi Bekerja</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="min-w-[20ch] align-top">Jabatan</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                     <tr>
                        <td class="min-w-[20ch] align-top">Alamat Instansi Bekerja</td>
                        <td class="align-top">:</td>
                        <td class="align-top w-full">......................................................</td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <div class="flex justify-between my-10">
               <div class="relative lg:min-w-[10em] min-w-[8em] text-center">
                  <h1>Pemohon</h1>
                  <div v-if="!sigDataUrl" @click="showSignatureCanvas(true)"
                     class="lg:h-[7em] lg:w-[12em] w-[9em] h-full lg:px-[2em] bg-gray-200 inline-flex justify-center items-center cursor-pointer lg:text-sm text-xs">
                     klik untuk tanda tangan
                  </div>
                  <img v-if="sigDataUrl" :src="sigDataUrl" :class="{'-rotate-90 pl-6' : signatureOrientation == 'landscape', 'pb-6': signatureOrientation != 'landscape'}" class="mt-[1.3em] absolute z-10 top-0 left-0 w-full h-full object-contain">
                  <p :class="{'mt-[5em]': sigDataUrl}">Mr.Anonimous</p>
               </div>
               <div class="relative min-w-[10em]">
                  <h1 class="text-center">Ketua</h1>
                  <img :src="signatureKetum" class="mt-[1.3em] absolute z-10 top-0 left-0 w-full h-full object-contain pb-6">
                  <img :src="stample" class="mt-[1.3em] absolute z-10 -top-10 md:left-[8em] left-[4.7em] lg:scale-100 md:scale-90 scale-75  object-contain pb-6">
                  <p class="mt-[5em] text-center">Supriyanto</p>
               </div>
               <div class="relative min-w-[10em]">
                  <h1 class="text-center">Sekertatris</h1>
                  <img :src="signatureSekre" class="mt-[1.3em] absolute z-10 top-0 left-0 w-full h-full object-contain pb-6">
                  <p class="mt-[5em] text-center">Rohwan, SH, MH</p>
               </div>
            </div>
         </div>

         <div class="mt-4 flex flex-col w-fit gap-4">
            <button @click="saveDoc" class="py-2 px-8 rounded-btn bg-[#1677FE] shadow-md font-semibold text-white">Download Dokumen</button>
            <button @click="showSignatureCanvas(true)" class="py-2 px-8 rounded-btn bg-[#54a10f] shadow-md font-semibold text-white">{{ sigDataUrl ? 'Ulangi Tanda Tangan' : 'Tanda Tangan' }}</button>
            <RouterLink :to="{ name: 'regist-detail' }"
               class="text-center py-2 px-8 rounded-btn bg-gray-300 shadow-md font-semibold">Keluar</RouterLink>
         </div>
      </div>

      <div class="fixed top-0 left-0 z-50 w-screen p-5 h-screen transition-opacity duration-300"
         :class="{ 'opacity-100 pointer-events-auto': canvasIsShown, 'opacity-0 pointer-events-none': !canvasIsShown }">
         <div class="relative w-full h-full">
            <div
               class="absolute w-fit lg:w-full right-0 z-50 flex lg:flex-row flex-col p-4 gap-5 items-center lg:items-start order-2">
               <h1 class="lg:text-3xl text-xl text-black lg:hidden block" :style="{ writingMode: 'vertical-lr' }">Gambar
                  Tanda Tangan</h1>
               <h1 class="lg:text-3xl text-xl text-black hidden lg:block">Gambar Tanda Tangan</h1>

               <button @click="clearSignature" :style="{ writingMode: 'vertical-lr' }" ref="isLandscape"
                  class="block lg:hidden text-center py-8 px-2 rounded-btn bg-red-500 text-white shadow-md font-semibold">hapus</button>
               <button @click="clearSignature"
                  class="hidden lg:block lg:py-2 lg:px-8 text-center py-8 px-2 rounded-btn bg-red-500 text-white shadow-md font-semibold">hapus</button>

               <button @click="applySignature" :style="{ writingMode: 'vertical-lr' }"
                  class="block lg:hidden text-center py-8 px-2 rounded-btn bg-green-500 text-white shadow-md font-semibold">simpan</button>
               <button @click="applySignature"
                  class="hidden lg:block lg:py-2 lg:px-8 text-center py-8 px-2 rounded-btn bg-green-500 text-white shadow-md font-semibold">simpan</button>
            </div>
            <button @click="showSignatureCanvas(false)"
               class="absolute border border-black rounded-lg top-0 lg:right-0 lg:left-auto right-auto left-0 text-3xl p-2 leading-none z-50 font-sans">×</button>
            <canvas ref="signatureCanvas"
               class="w-full h-full cursor-crosshair bg-white rounded-lg transition-transform duration-300"
               :class="{ 'translate-y-0': canvasIsShown, '-translate-y-10': !canvasIsShown }"></canvas>
         </div>
      </div>
   </div>
</template>