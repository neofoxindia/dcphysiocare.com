<template>
  <div class="intro text-white">
    <div class="overlay"><a href='https://www.freepik.com/photos/people'></a></div>
    <div class="container">
      <div class="row d-flex justify-content-center align-item-center" style="padding: calc(5vw + 90px) 0">
        <div class="col-lg-6 p-0 pl-md-3 pl-4">
          <h2 class="align-middle font-weight-bold" style="font-size: calc(3vw + 4vh + 10px); margin-top: 4vw">
            <span class="your">{{ $t('your') }}</span><span class="text-info">{{ $t('health') }}</span>
            <br>
            <span class="your">{{ $t('your') }}</span><span class="text-info">{{ $t('journey') }}</span>
            <br>
            <span class="your"><s class="text-warning"> Y </s>{{ $t('our') }}</span><span
            class="text-danger">{{ $t('care') }}</span>
          </h2>
          <p class="font-weight-normal text-white" style="line-height: 25px">{{ $t('sub_head') }} </p>
        </div>
        <AppointmentForm class="offset-md-1 col-lg-5 col-md-10 col-11 mt-lg-0 mt-5"></AppointmentForm>
      </div>

    </div>
  </div>
</template>

<script>
import AppointmentForm from "~/components/AppointmentForm";

export default {
  name: "HomePage__Intro",
  components: {AppointmentForm}
}
</script>

<style scoped>
h2 {
  font-weight: 800;
}

.your {
  color: #fff;
}

.intro {
  background-image: url("/images/background/xray.webp");
  background-size: cover;
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
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
    "our": "हमारी",
    "care": "देखभाल",
    "journey": "जीवन",
    "sub_head": "चलो शुरू करने के लिए सही परिस्थितियों की प्रतीक्षा नहीं करते हैं। आइए एक स्वस्थ शारीरिक स्थिति के लिए एकदम सही स्थिति बनाना शुरू करें"
  }
}
</i18n>
