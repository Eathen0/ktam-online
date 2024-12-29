<script setup lang="ts">
import RegisterStep1 from '@/components/tabs/RegisterStep1.vue';
import RegisterStep2 from '@/components/tabs/RegisterStep2.vue';
import RegisterStep3 from '@/components/tabs/RegisterStep3.vue';
import {shallowRef} from "vue";
import {toast} from "vue3-toastify";
import axios from "axios";
import {apiEndPoint} from "@/configs/apiEndPoint.ts";
import {useRouter} from "vue-router";

const container = shallowRef<HTMLFormElement>()
const router = useRouter()
const handleSubmit = (ev: Event) => {
  const toastId = toast('Loading...', { type: 'loading', autoClose: false })

  const data: any = {}
  // let profSelectHasVal = false
  for (const el of ev.target as any) {
    if (el instanceof HTMLInputElement) {
      if (el.type == 'radio' && !el.checked) continue
    }
    if (el.name == '') continue

    data[el.name.split('-')[0]] = el.value
  }
  console.log(data)

  axios.post(apiEndPoint.register, data, { withCredentials: true })
    .then((res) => {
      toast.remove(toastId)
      toast('Daftar: ' + res.data.message, { type: 'success', autoClose: 3000 })
      // router.push({ name: 'regist-detail', params: { nik: data.nik, email: data.email } })
      console.log(res)
    })
    .catch((err) => {
      toast.remove(toastId)
      if (err.response.status == 500) {
        toast('Daftar: ' + err.message, { type: 'error', autoClose: 3000 })
      } else {
        toast('Daftar: ' + err.response?.data.errors[0], { type: 'error', autoClose: 3000 })
      }
    })
}

</script>

<template>
   <form ref="container" @scroll.passive @submit.prevent="handleSubmit" class="carousel w-full overflow-y-hidden">
      <div id="page-1" class="w-full carousel-item">
         <RegisterStep1 />
      </div>
      <div id="page-2" class="w-full carousel-item">
         <RegisterStep2 />
      </div>
      <div id="page-3" class="w-full carousel-item">
         <RegisterStep3 />
      </div>
   </form>
   <!-- <div class="grid grid-cols-12 gap-4 grid-rows-5 min-h-screen w-full p-8">
      <div class="col-span-1 bg-gradient-to-bl from-violet-300 to-violet-500 row-span-5 rounded-3xl"></div>
      <div class="col-span-8 bg-gradient-to-bl from-violet-300 to-violet-500 row-span-3 rounded-2xl"></div>
      <div class="col-span-3 bg-gradient-to-bl from-violet-300 to-violet-500 row-span-1 rounded-2xl"></div>
      <div class="col-span-3 bg-gradient-to-bl from-violet-300 to-violet-500 row-span-2 rounded-2xl"></div>
      <div class="col-span-8 bg-gradient-to-bl from-violet-300 to-violet-500 row-span-2 rounded-2xl"></div>
      <div class="col-span-3 bg-gradient-to-bl from-violet-300 to-violet-500 row-span-2 rounded-2xl"></div>
   </div> -->
</template>