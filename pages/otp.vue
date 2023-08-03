<template>
  <div class="relative flex h-1024">
    <div
      class="w-720 rounded-tl-window rounded-bl-window bg-white border-r h-full flex justify-center items-center"
    >
      <div>
        <h1 class="font-bold mb-15 leading-24 text-large text-black">Enter OTP</h1>
        <template v-if="email">
          <p class="font-normal text-grey leading-24 text-base">
            Sent OTP on <span class="text-action font-semibold">{{ email }}</span>
          </p>
          <button
            @click="navigateToPrevious"
            class="mb-25 leading-25 text-action font-semibold"
          >
            Change email
          </button>
        </template>
        <FormTimePassword @submit-form="submitForm" :email="email" />
      </div>
    </div>
    <AuthWelcomeWindow
      title="It's just OTP verification"
      subtitle="You are one step away from recovering your password."
      image="otp"
    />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import useAuthStore from "~/store/auth";
useHead({
  title: "OTP",
});

const { email, password, repeatedPassword, username, accept } = storeToRefs(useAuthStore());

const navigateToPrevious = () => {
  if (window.history.length > 1) {
    useRouter().go(-1);

    password.value = repeatedPassword.value = "";
  }
};

const submitForm = (code) => {
  useAuthStore().sendRequest({
    username: username.value,
    email: email.value,
    password: password.value,
    accept: accept.value,
    code: code.value,
  });
};
</script>

<style lang="scss" scoped>
.lines {
  &::before,
  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 100%;
    max-width: 120px;
    height: 1px;
    top: 50%;
    transform: translateY(-50%);
    background-color: $grey;
  }
  &::before {
    left: 0;
  }
  border-radius: 606px;
  &::after {
    right: 0;
  }
}
</style>
