<template>
  <div class="relative flex h-1024">
    <div
      class="w-720 rounded-tl-window rounded-bl-window bg-white border-r h-full flex justify-center items-center"
    >
      <div class="w-form">
        <h1 class="font-bold mb-15 -ml-10 leading-24 text-large text-black">
          Create your account
        </h1>
        <p class="mb-30 font-normal -ml-10 text-grey leading-25 text-base">
          Unlock all Features!
        </p>
        <FormSignUp
          v-model:email="email"
          v-model:accept="accept"
          v-model:username="username"
          v-model:password="password"
          v-model:repeatedPassword="repeatedPassword"
          @sign-up="signUp"
        />
      </div>
    </div>
    <AuthWelcomeWindow
      title="Join us!"
      subtitle="Just go through the boring process of creating an account."
      image="sign-up"
    />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import useAuthStore from "~/store/auth";

useHead({
  title: "Sign up",
});

const { email, password, repeatedPassword, username, accept } = storeToRefs(useAuthStore());

const signUp = () => {
  useRouter().push("/otp");
};

const showedWarningMessage = ref(false);
onBeforeRouteLeave((to, from) => {
  if (!showedWarningMessage.value) {
    const personData = [username.value, email.value, password.value];

    if (personData.some((item) => item) && to.path !== "/otp") {
      const leave = confirm("Все заполненные данные будут потеряны, продолжить?");

      if (leave) {
        navigateTo(to);
        showedWarningMessage.value = true;

        const states = [username, email, password, repeatedPassword];
        states.forEach((item) => (item.value = ""));
      } else {
        navigateTo(from);
      }
    }
  }
});
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
