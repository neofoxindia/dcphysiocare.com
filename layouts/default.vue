<style lang="scss">
@import "assets/scss/bootstrap";


</style>


<template>
  <main class="body">
    <BaseHeader></BaseHeader>
    <Nuxt/>
  </main>
</template>


<script>
import BaseHeader from "~/components/BaseHeader";

export default {
  components: {
    BaseHeader
  }
}
</script>

