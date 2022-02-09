<template>
  <div class="bg-white px-4 sm:px-0 py-6 xs:pt-8 mt-4 xs:mt-0 rounded-t-md">
    <h2 class="text-grey-800 font-bold text-xl xs:text-base xs:text-grey-500 xs:font-medium sm:hidden">
      О товаре
    </h2>
    <div class="mt-4 text-sm xs:text-base font-medium leading-relaxed xs:leading-relaxed">
      <p>
        Белое сухое вино, изготовленное из
        винограда сорта Мелонь де Бургонь,
        который произрастает на виноградниках
        в апелласьоне Мюскаде Севр э Мен.
        Сбор урожая проводится только по
        достижении ягодами оптимальной
        зрелости.
      </p>
    </div>
    <div class="mt-3">
      <a-button-sm-outline text="Развернуть"/>
    </div>
  </div>
</template>

<script>
import AButtonSmOutline from "../atoms/a-button-sm-outline.vue";
export default {
  name: "m-info-description",
  components: {AButtonSmOutline}
}
</script>

<style scoped>

</style>