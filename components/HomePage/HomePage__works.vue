<template>
  <div class="bg-primary py-5">
    <div class="container">
      <div class="row text-dark">
        <div class="col-md-3 col-6">
          <div class="stats2-info">
            <p><span class="count">5500+</span></p>
            <h2>Healthy Clients</h2>
          </div>
        </div>
        <div class="col-md-3 col-6">
          <div class="stats2-info">
            <p><span class="count">14+</span></p>
            <h2>Experience</h2>
          </div>
        </div>
        <div class="col-md-3 col-6">
          <div class="stats2-info">
            <p><span class="count">5+</span></p>
            <h2>Hospital</h2>
          </div>
        </div>
        <div class="col-md-3 col-6">
          <div class="stats2-info">
            <p><span class="count">4+</span></p>
            <h2>Therapy</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage__works"
}
</script>

<style scoped lang="scss">

$color: #fff;

.stats2-info {
  h2, .count {
    color: $color !important;
  }


  i {
    color: #ffd4f2 !important;

    font-size: 80px;
  }
}

</style>
<i18n>
{
  "en": {
  },
  "hi": {
  }
}
</i18n>
