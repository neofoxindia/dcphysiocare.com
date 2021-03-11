<style lang="scss">
@import "assets/scss/bootstrap";


</style>


<template>
  <main class="body">
    <BaseHeader></BaseHeader>
    <Nuxt/>
    <BaseFooter></BaseFooter>
  </main>
</template>


<script>
import BaseHeader from "~/components/BaseHeader";
import BaseFooter from "~/components/BaseFooter";

export default {
  components: {
    BaseHeader, BaseFooter
  }
}
</script>

