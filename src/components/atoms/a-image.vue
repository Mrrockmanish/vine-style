<template>
  <img class="card-img max-h-[18rem] xs:max-h-[37.5rem] object-contain mx-auto block" src="../../assets/img/a-image.png"  title="Шампанское" alt="Шампанское">
</template>

<script>
export default {
  name: 'a-image',
}
</script>

<style lang="scss" scoped>
  .card-img {
    @media (min-width: 633px) {
        max-height: 600px;
    }
  }
</style>