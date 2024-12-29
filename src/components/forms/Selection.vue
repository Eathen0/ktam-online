<script setup lang="ts">
const {onChange, label, defaultSelection, containerClass, defaultValue = ''} = defineProps<{
  label?: string,
  defaultSelection?: string,
  containerClass?: string,
  defaultValue?: string,
  onChange?: (e: Event) => void
}>()
defineOptions({inheritAttrs: false})
</script>

<template>
  <div v-bind:class="containerClass">
    <div class="label" v-if="label">
      <span class="label-text font-bold">{{ label }}</span>
    </div>
    <select @change="onChange" class="select select-bordered w-full" v-bind="$attrs">
      <option v-if="defaultValue != 'none'" :value="defaultValue" disabled selected>{{ defaultSelection || "-- pilih --" }}</option>
      <slot/>
    </select>
  </div>
</template>