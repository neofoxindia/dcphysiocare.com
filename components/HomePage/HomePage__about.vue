<template>
  <div class="container py-5" id="about">
    <div class="text-center py-5">
      <div class="container">
        <p>- {{ $t('expert') }} -</p>
        <h2 class="display-4 font-weight-bold"><span class="text-success">{{ $t('dr') }}</span> {{ $t('name') }}</h2>
      </div>
    </div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8">
          <div class="zoom-image">
            <picture>
              <source type="image/webp" srcset="/images/user/doctorDC.jpeg.webp">
              <source type="image/jpg" srcset="/images/user/doctorDC.jpeg">
              <img class="card-img-top " src="/images/user/doctorDC.jpeg" alt="Card image cap">
            </picture>
          </div>
        </div>
        <div class="col-lg-4 col-md-8 offset-xl-1 offset-lg-0 mt-5">
          <h2 class="text-uppercase">{{ $t('profession') }} </h2>
          <ul class="list">
            <li class="text-capitalize">
              <i class="fa fa-check"></i>
              <span class="text-success font-weight-bold">2+ {{ $t('year') }}</span>
              {{ $t('bombay') }}
            </li>
            <li><i class="fa fa-check"></i> <span class="text-success font-weight-bold">3+ {{ $t('year') }}</span>
              {{ $t('soni') }}
            </li>
            <li><i class="fa fa-check"></i><span class="text-success font-weight-bold">3+ {{ $t('year') }}</span>
              {{ $t('podar') }}
            </li>
            <li><i class="fa fa-star"></i><span class="text-success font-weight-bold">{{ $t("from") }} 2010</span>
              {{ $t('at_your') }}<br>
              <span class="text-danger h2 font-weight-bold">{{ $t('brand') }}</span>
            </li>
          </ul>
          <div class="space30"></div>
          <a href="#" class="btn btn-lg btn-primary">Learn More <i class="icon-arrow-right"></i></a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "HomePage__about"
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
    "dr": "Dr.",
    "name": "DC Sharma",
    "expert": "EXPERT",
    "bombay": "Bombay Hospital Mumbai",
    "soni": "Soni Hospital Shekhawati Hospital Jaipur",
    "podar": "Head Of Department Medical Science In Podar Collage Of Physiotherapist",
    "at_your": "At Your Service",
    "year": "Years",
    "from": "From"
  },
  "hi": {
    "dr": "डॉ",
    "name": "डीसी शर्मा",
    "expert": "विशेषज्ञ",
    "bombay": "बॉम्बे हॉस्पिटल मुंबई",
    "soni": "सोनी अस्पताल शेखावाटी अस्पताल जयपुर",
    "podar": "पोद्दार कॉलेज ऑफ फिजियोथेरेपिस्ट में विभाग चिकित्सा विज्ञान प्रमुख",
    "at_your": "से आपकी सेवा में",
    "year": "साल",
    "from": " "
  }
}
</i18n>
