<script setup lang="ts">
import logoIkapeksi from '@/assets/logos/ikapeksi.png'
import logoIkapeksiBersatu from '@/assets/logos/ikapeksi-bersatu.png'
import svgWave from '@/assets/decorations/wave.png'
import svgWave2 from '@/assets/decorations/wave-2.png'
import BtnBlueVarian from '@/components/buttons/BtnBlueVarian.vue';
import { onMounted, onUnmounted, ref } from 'vue';
import {apiEndPoint} from "@/configs/apiEndPoint.ts";
import axios from "axios";
import {routerMutations} from "@/routers/router.ts";
import {useRouter} from "vue-router";
import {toast} from "vue3-toastify";
const doctHeight = ref(window.innerHeight)
const handleResize = () => doctHeight.value = document.body.getBoundingClientRect().height
onMounted(() => window.addEventListener('resize', handleResize))
onUnmounted(() => window.removeEventListener('resize', handleResize))

const router = useRouter()
const email = ref('')
const password = ref('')
const handleSubmit = () => {
  const toastID = toast('Loading...', { type: 'loading', autoClose: false })
  axios
    .post(apiEndPoint.login, {email: email.value, password: password.value}, {validateStatus: status => status < 400, withCredentials: true})
    .then(res => {
      routerMutations.setAuthenticationToken(res.data.accessToken)
      router.push({name: 'admin-dashboard'})
    }).catch(err => {
      toast.remove(toastID)
      toast('Login: ' + (err.response?.data.message || err.message || 'SERVER ERROR'), {type: 'error'})
    })
}
</script>

<template>
   <div class="min-h-screen bg-gradient-to-b from-primary-lighter to-primary-darker lg:flex justify-between">
      <div class="order-2 relative lg:max-w-xl xl:max-w-3xl w-full lg:max-h-screen max-h-[21rem] sm:max-h-96 h-screen flex flex-col gap-8 pt-6 justify-start lg:justify-center items-center">
         <h1 class="relative z-10 text-3xl font-bold lg:block hidden ml-20">Selamat Datang di</h1>
         <img class="relative z-10 max-w-52 lg:max-w-72 lg:ml-20 w-3/6" :src="logoIkapeksi" alt="">
         <img class="relative z-10 max-w-52 lg:max-w-72 lg:ml-20 w-3/6" :src="logoIkapeksiBersatu" alt="">

         <img class="lg:hidden absolute left-0 top-0 w-full sm:max-h-96 max-h-[21rem] h-screen object-fill" :src="svgWave" alt="">

         <img class="lg:block hidden absolute right-0 top-0 w-full object-fill" :style="{ height: doctHeight + 'px' }":src="svgWave2" alt="">
      </div>
      
      <div class="px-8 flex flex-col grow lg:max-w-4xl lg:ml-20 justify-center items-center">
         <div class="container">

            <!-- PERSON ICON -->
            <svg class="self-start xl:block hidden" width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M90.4167 51.6667C90.4167 58.5181 87.695 65.0889 82.8503 69.9336C78.0056 74.7783 71.4348 77.5 64.5833 77.5C57.7319 77.5 51.1611 74.7783 46.3164 69.9336C41.4717 65.0889 38.75 58.5181 38.75 51.6667C38.75 44.8152 41.4717 38.2444 46.3164 33.3997C51.1611 28.5551 57.7319 25.8333 64.5833 25.8333C71.4348 25.8333 78.0056 28.5551 82.8503 33.3997C87.695 38.2444 90.4167 44.8152 90.4167 51.6667Z"
                  fill="white" />
               <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M61.9483 129.115C27.5028 127.733 0 99.3679 0 64.5833C0 28.914 28.914 0 64.5833 0C100.253 0 129.167 28.914 129.167 64.5833C129.167 100.253 100.253 129.167 64.5833 129.167H63.6985C63.113 129.167 62.5296 129.149 61.9483 129.115ZM23.1402 105.335C22.6573 103.949 22.493 102.471 22.6593 101.012C22.8257 99.5533 23.3185 98.1505 24.1011 96.9081C24.8838 95.6658 25.9362 94.6156 27.1803 93.8356C28.4244 93.0556 29.8281 92.5658 31.2874 92.4026C56.462 89.6158 72.8597 89.8677 97.9116 92.4607C99.3728 92.6129 100.78 93.0965 102.026 93.8747C103.272 94.653 104.324 95.7053 105.102 96.9515C105.88 98.1978 106.363 99.6052 106.515 101.066C106.667 102.528 106.483 104.004 105.978 105.384C116.715 94.521 122.728 79.8572 122.708 64.5833C122.708 32.4822 96.6845 6.45833 64.5833 6.45833C32.4822 6.45833 6.45833 32.4822 6.45833 64.5833C6.45833 80.4579 12.823 94.8471 23.1402 105.335Z"
                  fill="white" />
            </svg>
      
            <h1 class="text-2xl font-bold text-white my-8 self-start">MASUK KE AKUN ANDA</h1>
      
            <form class="mt-6" @submit.prevent="handleSubmit">
               <label className="form-control w-full">
                  <div className="label">
                     <span className="label-text font-bold">Email</span>
                  </div>
                  <input v-model="email" type="email" placeholder="example@email.com" className="input border-black/50 border w-full" />
               </label>
               <label className="form-control w-full mt-4">
                  <div className="label">
                     <span className="label-text font-bold">Password</span>
                  </div>
                  <input v-model="password" type="password" placeholder="your password" className="input border-black/50 border w-full" />
               </label>
      
               <div class="flex lg:flex-row flex-col gap-4 justify-between items-start mt-8">
                  <p>jika anda belum memiliki akun atau ingin membuat KTAM silahkan daftar terlebih dahulu.</p>
                  <BtnBlueVarian class="self-end">Masuk</BtnBlueVarian>
               </div>
            </form>
         </div>
   
         <footer>
            <p class="text-center text-black/50 text-sm mt-20 pb-8">Apeksi - KTAM online <br> ©copyright - 2024</p>
         </footer>
      </div>
   </div>

</template>