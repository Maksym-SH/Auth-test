<template>
  <div class="relative flex h-1024">
    <div
      class="w-720 rounded-tl-window rounded-bl-window bg-white border-r h-full flex justify-center items-center"
    >
      <div class="w-form">
        <h1
          class="font-bold title -ml-10 whitespace-nowrap mb-25 leading-24 text-large text-black text-center"
        >
          Login to your Account
        </h1>
        <p
          class="lines text-sm mb-20 font-normal text-grey leading-25 text-center relative"
        >
          with email
        </p>
        <FormSignIn v-model:email="email" v-model:password="password" @sign-in="signIn" />
      </div>
    </div>
    <AuthWelcomeWindow
      title="Connect with any device."
      subtitle="Everything you need is an internet connection."
      image="sign-in"
    />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import useAuthStore from "~/store/auth";

useHead({
  title: "Sign in",
});

const { email, password } = storeToRefs(useAuthStore());

const signIn = () => {
  useAuthStore().sendRequest({
    email: email.value,
    password: password.value,
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
