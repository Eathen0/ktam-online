<script setup lang="ts">
import axios from "axios";
import {apiEndPoint} from "@/configs/apiEndPoint.ts";
import {onMounted, ref} from "vue";

const { title } = defineProps<{ title: string }>()

const showNotification = ref(false)
onMounted(() => {
  axios.get(apiEndPoint.admin_see_needVerifyCount, {withCredentials: true})
      .then(res => {
        console.log('res count')
        showNotification.value = res.data.count > 0
      }).catch(err => console.error(err))
})
</script>

<template>
  <div>
    <p class="font-bold text-lg">{{ title }}</p>
    <div class="relative ml-4 w-fit">
      <svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M28 5.0614V18.6136C28.0001 19.7092 27.5907 20.7635 26.8558 21.5606C26.1209 22.3578 25.1159 22.8376 24.0464 22.9019L23.8 22.909H4.2C3.1287 22.9091 2.09788 22.4905 1.31843 21.7388C0.53899 20.9872 0.0698495 19.9593 0.00700016 18.8656L0 18.6136V5.0614L13.223 14.0776L13.3854 14.1721C13.5768 14.2677 13.787 14.3174 14 14.3174C14.213 14.3174 14.4232 14.2677 14.6146 14.1721L14.777 14.0776L28 5.0614Z"
            fill="black" />
        <path
            d="M23.7999 0C25.3119 0 26.6377 0.816136 27.3769 2.0432L13.9999 11.1639L0.622925 2.0432C0.974034 1.4602 1.45633 0.971489 2.02961 0.617814C2.60288 0.26414 3.25052 0.0557511 3.91852 0.0100227L4.19993 0H23.7999Z"
            fill="black" />
      </svg>
      <div v-if="showNotification" class="absolute -top-1 -right-1 bg-red-500 rounded-full w-3 h-3 "></div>
    </div>
  </div>
</template>