<script setup lang="ts">
import {onMounted, ref, shallowRef} from "vue";
import * as QRCode from 'qrcode';
import cardBack from '@/assets/card/back.png'
import cardFront from '@/assets/card/front.png'
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";

// const { fullName, idCard } = defineProps<{
//   fullName: string,
//   idCard: string,
// }>()

const qrCodeContainer = shallowRef<HTMLDivElement>()
const frontCardImage = ref('')
const frontCard = shallowRef<HTMLDivElement>()
const pdf = new jsPDF({
  orientation: 'landscape',
  unit: 'px',
  format: [1013, 641]
})
onMounted(() => {
  if (qrCodeContainer.value) {
    QRCode.toCanvas('https://music.youtube.com', { errorCorrectionLevel: 'H' }, function (error, canvas) {
      if (error) return console.error(error);
      qrCodeContainer.value?.appendChild(canvas);
    });
  }
  if (frontCard.value) {
    frontCard.value.style.display = 'block';

    html2canvas(frontCard.value).then(canvas => {
      const imageFront = canvas.toDataURL('image/png')
      frontCardImage.value = imageFront;
      pdf.addImage(imageFront, 'PNG', 0, 0, 1013, 641);
      pdf.addPage();
      pdf.addImage(cardBack, 'PNG', 0, 0, 1013, 641);
      // pdf.save("Kartu Ikapeksi")
    }).catch(error => {
      console.error('Error capturing frontCard:', error);
    }).finally(() => {
      if (frontCard.value)
        frontCard.value.style.display = 'none';
    })
  }
})
</script>

<template>
  <div class="fixed -z-50">
    <div ref="frontCard" class="relative" :style="{ backgroundImage: `url(${cardFront})`, width: '1013px', height: '641px', display: 'none' }">
      <div class="absolute top-[20.5rem] -translate-y-1/2 left-[5.5rem] rounded-full w-80 h-80 bg-blue-500"></div>
      <h1 class="text-[#275393] absolute left-[29.5rem] top-48 text-5xl font-bold">Your Name</h1>
      <code class="text-[#275393] absolute left-[29.8rem] top-64 text-3xl tracking-widest">242200001</code>
      <div ref="qrCodeContainer" class="absolute right-60 bottom-32"></div>
    </div>
  </div>

  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    <img :src="frontCardImage" class="rounded-xl shadow-lg">
    <img :src="cardBack" class="rounded-xl shadow-lg">
  </div>
</template>