<template>
  <div>
    <div class="flex flex-wrap items-end">
      <a-price pay="1890 ₽"/>
      <a-old-price pay="2990 ₽"/>
    </div>
    <div class="mt-6">
      <a-badge-code class="xs:hidden" code="123456"/>
      <div class="mt-3">
        <a-button-base-primary class="w-full" text="Добавить в корзину"/>
        <a-button-base-outline class="w-full" text="Добавить в список"/>
      </div>
    </div>
  </div>
</template>

<script>
import APrice from "../atoms/a-price.vue";
import AOldPrice from "../atoms/a-old-price.vue";
import ABadgeCode from "../atoms/a-badge-code.vue"
import AButton from "../atoms/a-button-base-primary.vue";
import AButtonBasePrimary from "../atoms/a-button-base-primary.vue";
import AButtonBaseOutline from "../atoms/a-button-base-outline.vue";
export default {
  name: "m-offer-box",
  components: {AButtonBaseOutline, AButtonBasePrimary, AButton, ABadgeCode, AOldPrice, APrice}
}
</script>

<style scoped>

</style>