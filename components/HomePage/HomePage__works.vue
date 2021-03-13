<template>
  <div class="bg-primary py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-6">
          <div class="stats2-info">
            <i class="ilmosys-business-manwoman"></i>
            <p><span class="count">5500+</span></p>
            <h2>Healthy Clients</h2>
          </div>
        </div>
        <div class="col-md-3 col-6">
          <div class="stats2-info">
            <i class="ilmosys-doctor"></i>
            <p><span class="count">14+</span></p>
            <h2>Experience</h2>
          </div>
        </div>
        <div class="col-md-3 col-6">
          <div class="stats2-info">
            <i class="ilmosys-ambulance"></i>
            <p><span class="count">30</span></p>
            <h2>Ambulance</h2>
          </div>
        </div>
        <div class="col-md-3 col-6">
          <div class="stats2-info">
            <i class="ilmosys-hospital-2"></i>
            <p><span class="count">200</span></p>
            <h2>Rooms</h2>
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
    color: $color !important;

    font-size: 80px;
  }
}

</style>
<i18n>
{
  "en": {
    "health": "HEALTH",
    "your": "YOUR",
    "our": "OUR",
    "care": "CARE",
    "journey": "JOURNEY",
    "sub_head": "Let's not wait for perfect conditions to begin. Let's begin to make perfect conditions for a healthy physical condition"
  },
  "hi": {
    "health": "स्वास्थ्य",
    "your": "आपका",
    "our": "हमारा",
    "care": "ध्यान",
    "journey": "जीवन",
    "sub_head": "चलो शुरू करने के लिए सही परिस्थितियों की प्रतीक्षा नहीं करते हैं। आइए एक स्वस्थ शारीरिक स्थिति के लिए एकदम सही स्थिति बनाना शुरू करें"
  }
}
</i18n>
