<template>
  <div class="mbs18">
    <label class="label" :for="id">{{ label }}</label>
    <input
      :id="id"
      class="input"
      type="number"
      :min="min"
      :max="max"
      :value="modelValue"
      @input="
        $emit(
          'update:modelValue',
          Number(($event.target as HTMLInputElement).value),
        )
      "
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: string;
  label: string;
  min: number;
  max?: number;
  modelValue: number;
}>();

defineEmits(["update:modelValue"]);
</script>
