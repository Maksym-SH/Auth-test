<template>
  <div>
    <form @submit.prevent class="flex flex-col gap-10">
      <div class="flex gap-20">
        <UIAppInput
          v-for="index in 6"
          ref="refs"
          numeric
          v-model="enteredCode[index]"
          placeholder="-"
          type="text"
          @input="inputHandler($event, index)"
        />
      </div>
      <UIAppButton
        @click="submitHandler"
        class="w-form mx-auto mt-15"
        title="Submit"
        :disabled="buttonDisabled"
      />
    </form>
  </div>
</template>

<script setup>
const props = defineProps({
  email: {
    type: String,
  },
});

const emit = defineEmits(["submit-form"]);

const refs = ref([]);

const code = ref("");

const enteredCode = ref(["", "", "", "", "", ""]);

const buttonDisabled = computed(() => {
  return code.value.length < 6 && !props.email;
});

const submitHandler = () => {
  emit("submit-form", code);
};

const inputHandler = (event, index) => {
  // Change focus after delete.
  if (event.inputType === "deleteContentBackward") {
    // Not focus on the first input.
    if (index > 1) {
      enteredCode.value[index] = "";
      refs.value[index - 2].inputRef.focus(); // Set focus to the previous input.
    }
  } else if (event.target.value.match(/\D/g)) {
    // Not number.
    event.target.value = "";
    enteredCode.value[index] = "";
  } else if (index < refs.value.length) {
    // Not last element.
    enteredCode.value[index] = event.target.value;
    refs.value[index].inputRef.focus(); // Set focus to the next input.
  }

  code.value = enteredCode.value.join(""); // Get the updated entered code.
};
</script>
