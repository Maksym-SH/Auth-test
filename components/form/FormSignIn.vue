<template>
  <div>
    <form @submit.prevent class="flex flex-col gap-10">
      <UIAppInput
        @input="emit('update:email', $event.target.value)"
        icon="mail"
        placeholder="Email"
        type="email"
      />
      <UIAppInput
        @input="emit('update:password', $event.target.value)"
        icon="shield"
        placeholder="Password"
        type="password"
      />
      <UIAppButton :disabled="buttonDisabled" @click="submitHandler" title="Log in" />
    </form>
    <span class="block text-center mt-20 text-gray leading-24 text-black">
      Don’t have account?
      <NuxtLink class="text-action font-bold" to="/sign-up">Create an account</NuxtLink>
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const submitHandler = () => {
  emit("signIn");
};

const emit = defineEmits(["update:email", "update:password", "signIn"]);

const buttonDisabled = computed(() => !props.email || !props.password);
</script>
