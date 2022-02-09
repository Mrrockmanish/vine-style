<template>
  <div class="bg-white w-full xs:max-w-[38rem] sm:max-w-[21.5rem] base:max-w-[28.5rem] pt-10 xs:pt-0 pb-4 sm:pb-0 px-4 xs:pr-0 sm:pl-0 xs:mr-10 sm:mr-8">
    <div class="relative xs:max-h-[37.5rem] w-full">
      <a-image/>
      <a-bage-sale/>
    </div>
  </div>
</template>

<script>
import AImage from "../atoms/a-image.vue";
import ABageSale from "../atoms/a-bage-sale.vue";

export default {
  name: "m-image",
  components: {ABageSale, AImage}
}
</script>

<style scoped>

</style>