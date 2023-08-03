<template>
  <div class="relative checkbox leading-25">
    <input
      @change="emit('update:model-value', $event.target.checked)"
      class="hidden"
      id="accept"
      type="checkbox"
    />
    <label
      class="checkbox__replace leading-4 inline-block cursor-pointer"
      for="accept"
    ></label>
    <label class="pl-30 cursor-pointer" for="accept">
      <slot name="label" />
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:model-value"]);
</script>

<style lang="scss" scoped>
.checkbox {
  #accept:checked {
    & ~ .checkbox__replace {
      background: $cyan url("/images/icons/caret.svg");
    }
  }

  &__replace {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    border: 2px solid $cyan;
    border-radius: 4px;
  }
}
</style>
