<template>
  <button
    @click="emit('click')"
    :disabled="disabled"
    class="outline-none py-25 mt-1 text-white1 font-bold rounded-action uppercase text-20"
    :class="[disabled ? 'bg-action' : 'bg-blue']"
  >
    {{ title }}
  </button>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);
</script>

<style lang="scss">
button {
  max-height: 64px;
}
</style>
