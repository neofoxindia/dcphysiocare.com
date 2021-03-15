<template>
  <div class="bg-primary py-5">
    <div class="container py-3">
      <div class="row text-dark">
        <div class="col-md-3 col-6">
          <div class="text-center">
            <p><span class="count">5500+</span></p>
            <h2>{{ $t('clients') }}</h2>
          </div>
        </div>
        <div class="col-md-3 col-6">
          <div class="text-center">
            <p><span class="count">14+</span></p>
            <h2>{{ $t('experience') }}</h2>
          </div>
        </div>
        <div class="col-md-3 col-6">
          <div class="text-center">
            <p><span class="count">5+</span></p>
            <h2>{{ $t('hospital') }}</h2>
          </div>
        </div>
        <div class="col-md-3 col-6">
          <div class="text-center">
            <p><span class="count">4+</span></p>
            <h2>{{ $t('therapy') }}</h2>
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

.text-center {
  h2, .count {
    color: $color !important;
  }

  .count {
    text-align: center;
    font-size: 40px;
  }

  h2 {
    font-size: 20px;
  }

}

</style>
<i18n>
{
  "en": {
    "therapy": "Therapy",
    "clients": "Healthy Clients",
    "experience": "Experience",
    "hospital": "Hospital"
  },
  "hi": {
    "therapy": "चिकित्सा",
    "clients": "स्वस्थ ग्राहक",
    "experience": "अनुभव",
    "hospital": "अस्पताल"
  }
}
</i18n>
