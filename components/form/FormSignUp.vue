<template>
  <div>
    <form @submit.prevent class="flex flex-col gap-10">
      <UIAppInput
        :model-value="username"
        @input="emit('update:username', $event.target.value)"
        icon="user"
        placeholder="Username"
      />
      <UIAppInput
        :model-value="email"
        @input="emit('update:email', $event.target.value)"
        icon="mail"
        placeholder="Email"
        type="email"
      />
      <UIAppInput
        :model-value="password"
        @input="emit('update:password', $event.target.value)"
        icon="shield"
        placeholder="Password"
        type="password"
      />
      <UIAppInput
        :model-value="repeatedPassword"
        @input="emit('update:repeatedPassword', $event.target.value)"
        icon="shield"
        placeholder="Confirm password"
        type="password"
      />
      <UIAppCheckbox v-model="acceptModel">
        <template #label>
          <span class="text-md leading-24">
            Accept
            <NuxtLink class="text-action font-medium">terms and conditions</NuxtLink>
          </span>
        </template>
      </UIAppCheckbox>
      <UIAppButton
        @click="submitHandler"
        class="mt-15"
        :disabled="buttonDisabled"
        title="Sign up"
      />
    </form>
    <span class="block text-center mt-20 text-gray leading-24 text-black">
      You have account?
      <NuxtLink class="text-action font-bold" to="/sign-in">Login now</NuxtLink>
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  repeatedPassword: {
    type: String,
    required: true,
  },
  accept: {
    type: Boolean,
    required: true,
  },
});

const acceptModel = computed({
  get: () => props.accept,
  set: (value) => emit("update:accept", value),
});

const submitHandler = () => {
  emit("sign-up");
};

const buttonDisabled = computed(() => {
  return (
    !props.email ||
    !props.password ||
    !props.username ||
    props.password !== props.repeatedPassword
  );
});

const emit = defineEmits([
  "update:email",
  "update:password",
  "update:username",
  "update:repeatedPassword",
  "update:accept",
  "sign-up",
]);
</script>
