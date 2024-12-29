<script setup lang="ts">
import QuilDisplayer from '@/components/QuilDisplayer.vue';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { ref, shallowRef } from 'vue';
import {toast} from "vue3-toastify";
import axios from "axios";
import {apiEndPoint} from "@/configs/apiEndPoint.ts";

const editor = shallowRef<any>(null);
const editorValue = ref('')
const handleEditorChange = () => {
   editorValue.value = editor.value.getHTML();
};

const handleSubmit = () => {
  const toastID = toast('Loading...', { type: 'loading', autoClose: false })
  axios.put(apiEndPoint.superAdmin_act_editInformations, { textarea: editorValue.value }, {validateStatus: status => status < 400, withCredentials: true})
      .then(res => {
        toast.remove(toastID)
        console.log(res)
        toast('Edit: ' + res.data.message, {type: 'success'})
      }).catch(err => {
        toast.remove(toastID)
        console.log(err)
        toast('Edit: ' + (err.response?.data.message || err.message || 'SERVER ERROR'), {type: 'error'})
      })
}
</script>

<template>
   <div class="w-full h-full p-4 flex gap-4 lg:flex-row flex-col">
      <div class="bg-white lg:w-1/2 lg:h-auto h-1/2 lg:mb-0 mb-10 relative flex flex-col">
         <QuillEditor class="bg-white" ref="editor" theme="snow" toolbar="essential" content-type="html"
            @editor-change="handleEditorChange" />
      </div>
      <div class="gap-4 py-4 lg:w-1/2 lg:h-auto h-1/2 bg-white flex flex-col">
         <h1 class="text-2xl mx-4 border-b border-gray-300 pb-2">Preview</h1>
         <div class="grow overflow-y-auto">
            <QuilDisplayer :content="editorValue"></QuilDisplayer>
         </div>
         <div class="self-end mx-4">
            <button @click="handleSubmit" class="mr-4 py-2 px-8 rounded-btn bg-[#1677FE] shadow-md font-semibold text-white">Simpan</button>
            <slot name="exitButton" />
         </div>
      </div>
   </div>
</template>