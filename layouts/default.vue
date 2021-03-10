<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i');

@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700');
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

