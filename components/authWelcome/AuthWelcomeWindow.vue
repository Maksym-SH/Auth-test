<template>
  <div
    class="h-full w-720 pt-50 bg-blue rounded-tr-window rounded-br-window flex flex-col justify-center items-center gap-50"
  >
    <div class="border-grad mt-50 p-30 relative border-circle rounded-full">
      <div class="background-grad p-30 h-full flex items-center"></div>
      <img
        class="absolute left-10 top-2/4 z-10 -translate-y-1/2"
        :class="{ 'sign-up-image': image === 'sign-up' }"
        :src="`/images/welcome-${image}.svg`"
        alt=""
      />
    </div>
    <article class="text-white text-base text-center leading-24 -mb-20">
      <h2 class="font-bold">
        {{ title }}
      </h2>
      <p class="text-md">{{ subtitle }}</p>
    </article>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.border-circle {
  height: 606px;
  width: 606px;
}
.border-grad {
  background: linear-gradient(163deg, #444ce7cf 0%, #00000000 100%);
  border-radius: 50%;
}
.background-grad {
  border-radius: 50%;
  background: linear-gradient(
      174deg,
      rgba(164, 188, 253, 0.2) 0%,
      rgba(68, 76, 231, 0.16) 100%
    ),
    radial-gradient(
      50% 50% at 50% 50%,
      rgba(68, 76, 231, 0.16) 0%,
      rgba(68, 76, 231, 0.06) 100%
    );
}

.sign-up-image {
  scale: 1.09;
  top: 61%;
  left: 30px;
}
</style>
