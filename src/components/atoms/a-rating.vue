<template>
  <div class="flex items-center leading-none mt-2">
    <img src="../../assets/img/stars.svg" class="flex-shrink-0 mr-2 h-4 sm:h-5" alt="">
    <a href="#" class="block pb-[2px]
     text-sm sm:text-base text-blue-400
     font-medium hover:border-transparent transition-all
     border-blue-50 border-b">
      23 отзыва
    </a>
  </div>
</template>

<script>
export default {
  name: "a-rating",
  props: {
    text: String
  }
}
</script>

<style scoped>

</style>