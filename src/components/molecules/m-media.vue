<template>
  <div class="bg-white xs:bg-transparent rounded-b-md pt-6 xs:pt-4">
    <a-border class="xs:hidden"/>
    <div class="flex">
      <div class="flex flex-grow items-center justify-center h-12 cursor-pointer hover:opacity-80 transition-all">
        <a-favorite/>
        <a-text-sm-500 class="icon-text ml-2 hidden" text="В избранное"/>
      </div>
      <div class="flex flex-grow items-center justify-center h-12 cursor-pointer hover:opacity-80 transition-all">
        <a-search/>
        <a-text-sm-500 class="icon-text ml-2 hidden" text="Похожее"/>
      </div>
      <div class="flex xs:hidden flex-grow items-center justify-center h-12 cursor-pointer hover:opacity-80 transition-all">
        <a-share/>
        <a-text-sm-500 class="icon-text ml-2 hidden" text="Поделиться"/>
      </div>
    </div>
  </div>
</template>

<script>
import AShare from "../atoms/a-share.vue";
import ATextSm500 from "../atoms/a-text-sm-500.vue";
import ASearch from "../atoms/a-search.vue";
import AFavorite from "../atoms/a-favorite.vue";
import ABorder from "../atoms/a-border.vue";
export default {
  name: "m-media",
  components: {ABorder, AFavorite, ASearch, ATextSm500, AShare}
}
</script>

<style lang="scss" scoped>
  .icon-text {
    display: none;
    @media (min-width: 360px) {
        display: block;
    }
  }
</style>