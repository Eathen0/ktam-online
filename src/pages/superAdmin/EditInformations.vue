<script setup lang="ts">
import QuilDisplayer from '@/components/QuilDisplayer.vue';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { ref, shallowRef } from 'vue';

const editor = shallowRef<any>(null);
const editorValue = ref('')
const handleEditorChange = (ev: any) => {
   // console.log(ev.getHTML())
   // console.log(ev);
   // console.log(editor.value.getHTML());
   editorValue.value = editor.value.getHTML();
};
</script>

<template>
   <div class="w-full h-full p-4 flex gap-4 lg:flex-row flex-col">
      <div class="bg-white lg:w-1/2 lg:h-auto h-1/2">
         <QuillEditor class="" ref="editor" theme="snow" toolbar="essential" content-type="html"
            @editor-change="handleEditorChange" />
      </div>
      <div class="gap-4 py-4 lg:w-1/2 lg:h-auto h-1/2 bg-white flex flex-col">
         <h1 class="text-2xl mx-4 border-b border-gray-300 pb-2">Preview</h1>
         <div class="grow overflow-y-auto">
            <QuilDisplayer :content="editorValue"></QuilDisplayer>
         </div>
         <div class="self-end mx-4">
            <button class="mr-4 py-2 px-8 rounded-btn bg-[#1677FE] shadow-md font-semibold text-white">Simpan</button>
            <button class="py-2 px-8 rounded-btn bg-gray-500 shadow-md font-semibold text-white">keluar</button>
         </div>
      </div>
   </div>
</template>