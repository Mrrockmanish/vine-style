<script setup>

import OHeader from "./components/organisms/o-header.vue";
import OProductDetails from './components/organisms/o-product-details.vue'
</script>

<template>
  <div class="pb-10 sm:pb-0 bg-grey-100">
    <o-header/>
    <o-product-details/>
  </div>
</template>


<script>


export default {
  name: 'app',
}

</script>