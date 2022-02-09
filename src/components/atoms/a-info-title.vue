<template>
 <h1 class="text-lg xs:text-2xl sm:text-3xl font-bold text-grey-800">
   {{ title }}
 </h1>
</template>

<script>
export default {
  name: "a-info-title",
  props: {
    title: String
  }
}
</script>

<style scoped>

</style>