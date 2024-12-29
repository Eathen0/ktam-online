<script setup lang="ts">
import {onMounted, shallowRef} from 'vue';

const { initialValue } = defineProps<{ initialValue?: string }>()

defineOptions({ inheritAttrs: false });
const model = defineModel<string>()
const label = shallowRef<HTMLSpanElement>();

onMounted(() => {
  model.value = initialValue || '';
})
</script>

<template>
   <div class="form-control w-full">
      <div class="label" :class="{'hidden': (label?.innerHTML.length || 0) <= 0}">
         <span class="label-text font-bold" ref="label"><slot /></span>
      </div>
      <input v-model="model" type="text" v-bind="$attrs" class="input w-full" />
   </div>
</template>