<script setup lang="ts">
import { shallowRef } from 'vue';

defineOptions({ inheritAttrs: false });
const label = shallowRef<HTMLSpanElement>();
</script>

<template>
   <div class="form-control w-full">
      <div class="label" :class="{'hidden': (label?.innerHTML.length || 0) <= 0}">
         <span class="label-text font-bold" ref="label"><slot /></span>
      </div>
      <input type="text" v-bind="$attrs" class="input w-full" />
   </div>
</template>