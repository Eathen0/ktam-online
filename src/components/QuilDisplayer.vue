<script setup lang="ts">
const { content } = defineProps<{ content: string }>()
</script>

<template>
   <div class="ql-editor" id="display-container" v-html="content">
   </div>
</template>
<style>
#display-container h1 {
   font-size: 2em;
   font-weight: bold;
   /* margin-bottom: 0.5em; */
}
#display-container h2 {
   font-size: 1.5em;
   font-weight: bold;
   /* margin-bottom: 0.5em; */
}
#display-container h3 {
   font-size: 1.17em;
   font-weight: bold;
   /* margin-bottom: 0.5em; */
}
#display-container h4 {
   font-size: 1em;
   font-weight: bold;
   /* margin-bottom: 0.5em; */
}
#display-container h5 {
   font-size: 0.83em;
   font-weight: bold;
   /* margin-bottom: 0.5em; */
}
#display-container h6 {
   font-size: 0.67em;
   font-weight: bold;
   /* margin-bottom: 0.5em; */
}
</style>