<template>
  <div class="input relative">
    <img
      v-if="icon"
      class="input__icon absolute left-10 top-2/4 -translate-y-1/2"
      :src="`/images/icons/${icon}.svg`"
    />
    <span
      @click="changeInputType"
      class="input__password-icon absolute right-10 top-2/4 -translate-y-1/2 cursor-pointer"
    >
      <img v-if="type === 'password'" src="/images/icons/eye.svg" alt="" />
    </span>
    <input
      class="input__field px-10 py-20 text-18 pl-50 border-2 border-border-disabled bg-input-bg rounded-action text-input w-full outline-none text-black"
      :class="{ numeric }"
      v-bind="$attrs"
      ref="inputRef"
      autocomplete="on"
      :maxlength="inputLength"
      :type="type"
      v-model="model"
      :placeholder="placeholder"
      :disabled="disabled"
    />
  </div>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});
const props = defineProps({
  placeholder: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
  },
  numeric: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
});

const inputRef = ref();

const inputLength = computed(() => {
  if (props.numeric) {
    return 1;
  }
});

const changeInputType = () => {
  if (inputRef.value) {
    if (inputRef.value.type === "password") {
      inputRef.value.type = "text";
    } else {
      inputRef.value.type = "password";
    }
  }
};

const emit = defineEmits(["update:model-value"]);

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:model-value", value),
});

defineExpose({
  inputRef,
});
</script>

<style lang="scss" scoped>
.input {
  &__field {
    font-family: $inter;
    &::placeholder {
      color: rgba(45, 49, 166, 0.2);
      font-family: inherit;
    }
    max-height: 64px;
    &.numeric {
      box-sizing: content-box;
      width: auto;
      max-width: 19px;
      height: 64px;
      padding: 0 0.65em;
      font-size: 32px;
      color: $disabled;
      &::placeholder {
        padding-left: 2px;
      }
    }
  }
}
</style>
