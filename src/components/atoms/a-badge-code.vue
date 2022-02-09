<template>
  <div class="text-grey-500 text-right text-sm font-medium">
    Артикул: {{ code }}
  </div>
</template>

<script>
export default {
  name: "a-badge-code",
  props: {
    code: String
  }
}
</script>

<style scoped>

</style>