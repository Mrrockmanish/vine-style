<template>
  <button class="
  mt-2
  flex items-center justify-center
  bg-primary-400
  px-4 h-14 min-w-[4rem]
  rounded-md
  text-white text-base font-bold
  transition-all hover:bg-primary-900
">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "a-button-base-outline",
  props: ['text']
}
</script>

<style scoped>

</style>