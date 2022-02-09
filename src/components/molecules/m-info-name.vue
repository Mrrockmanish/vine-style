<template>
  <div class="pt-4 xs:pt-0">
    <a-info-title title="Chateau de la Turmeliere, Muscadet Sevre et Maine Sur Lie AOP, 2020"/>
    <a-rating/>
  </div>
</template>

<script>
import AInfoTitle from '../atoms/a-info-title.vue'
import ARating from "../atoms/a-rating.vue";
export default {
  name: "m-info-name",
  components: {ARating, AInfoTitle}
}
</script>

<style scoped>

</style>