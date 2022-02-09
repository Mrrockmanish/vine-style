<template>
  <button class="
  mt-2
  flex items-center justify-center
  border
  border-grey-400
  px-4 h-14 min-w-[4rem]
  rounded-md
  text-grey-800 text-base font-bold
  transition-all hover:border-grey-600
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