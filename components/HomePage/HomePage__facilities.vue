<template>
  <div class="container py-5" id="facilities">
    <div class="text-center py-5">
      <div class="container">
        <p class="text-uppercase">- {{ $t('facilities') }} -</p>
        <h2 class="font-weight-bold">{{ $t('brand') }}</h2>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8">
<!--          <div class="zoom-image">-->
<!--            <picture>-->
<!--              <source type="image/webp" srcset="/images/user/doctorDC.jpeg.webp">-->
<!--              <source type="image/jpg" srcset="/images/user/doctorDC.jpeg">-->
<!--              <img width="1088" height="1053" class="card-img-top " src="/images/user/doctorDC.jpeg" alt="Card image cap">-->
<!--            </picture>-->
<!--          </div>-->
        </div>
        <div class="col-lg-4 col-md-8 offset-xl-1 offset-lg-0 mt-md-2 mt-5">
          <h2 class="text-uppercase">{{ $t('facilities') }} </h2>
          <ul class="list">
            <li class="text-capitalize"><i class="fa fa-star"></i>{{ $t('fec_1') }}</li>
            <li class="text-capitalize"><i class="fa fa-star"></i>{{ $t('fec_2') }}</li>
            <li class="text-capitalize"><i class="fa fa-star"></i>{{ $t('fec_3') }}</li>
            <li class="text-capitalize"><i class="fa fa-star"></i>{{ $t('fec_4') }}</li>
            <li class="text-capitalize"><i class="fa fa-star"></i>{{ $t('fec_5') }}</li>
            <li class="text-capitalize"><i class="fa fa-star"></i>{{ $t('fec_6') }}</li>
            <li class="text-capitalize"><i class="fa fa-star"></i>{{ $t('fec_7') }}</li>
            <li class="text-capitalize"><i class="fa fa-star"></i>{{ $t('fec_8') }}</li>
          </ul>
          <div class="space30"></div>
          <a href="#" class="btn btn-lg btn-primary">{{ $t('book') }}<i class="icon-arrow-right"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage__facilities"
}
</script>

<style scoped lang="scss">
.zoom-image {

  background-color: transparent;
  cursor: pointer;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  &:hover {
    border-radius: 15px;
    transform: scale(0.9);
    transition-duration: 2s;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
}


.card-img-top {
  &:hover {

    transition-duration: 2s;
    transform: scale(1.5);
  }
}

</style>

<i18n>
{
  "en": {

    "fec_1": "Short Wave Diathermy",
    "fec_2": "Muscle Stimulator Traction Lumbar Cervical",
    "fec_3": "Ultrasound",
    "fec_4": "Long Wave Diathermy Microwave Diathermy",
    "fec_5": "Wax Bath",
    "fec_6": "Steam Hydrocollator Pack",
    "fec_7": "Interferential Therapy",
    "fec_8": "Transcutaneous Electrical Nerve Stimulation"
  },
  "hi": {

    "fec_1": "शॉर्ट वेव डायथर्मी",
    "fec_2": "स्नायु उत्तेजक ट्रैक्शन काठ सरवाइकल",
    "fec_3": "अल्ट्रासाउंड",
    "fec_4": "लॉन्ग वेव डियाथर्मी माइक्रोवेव डायथर्मी",
    "fec_5": "वैक्स स्नान",
    "fec_6": "स्टीम हाइड्रोकार्बन पैक",
    "fec_7": "इंटरफेरेंशियल थेरेपी",
    "fec_8": "ट्रांसक्यूटेनस विद्युत तंत्रिका उत्तेजना"
  }
}
</i18n>
