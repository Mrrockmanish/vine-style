<template>
  <div v-show="pay" class="text-grey-600 font-bold text-lg line-through mt-4">
    {{ pay }}
  </div>
</template>

<script>
export default {
  name: "a-old-price",
  props: {
    pay: ''
  }
}
</script>

<style scoped>

</style>