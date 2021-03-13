<template>
  <div class="container-fluid px-xl-5 px-lg-0 px-0">

    <div class="about-inline text-center">
      <p>- {{ $t('service') }} -</p>
      <h3>{{ $t('service_head') }} </h3>
      <p>{{ $t('service_info') }}</p>
    </div>

    <div class="row justify-content-lg-center justify-content-md-around justify-content-around">
      <div class="col-xl-2 col-lg-3 col-md-5 m-md-2 col-sm-5 card p-0 m-lg-3 m-0 mt-4 col-10">
        <picture>
          <source type="image/webp" srcset="/images/service/needling.jpg.webp">
          <source type="image/jpg" srcset="/images/service/needling.jpg">
          <img class="card-img-top" src="/images/service/needling.jpg" alt="Card image cap">
        </picture>
        <div class="card-body">
          <h4 class="card-title">{{ $t('needle') }}</h4>
          <p class="card-text">{{ $t('needle_info') }}</p>
        </div>
      </div>


      <div class="col-xl-2 col-lg-3 col-md-5 m-md-2 col-sm-5 card p-0 m-lg-3 m-0 mt-4 col-10">
        <picture>
          <source type="image/webp" srcset="/images/service/k-tape.jpg.webp">
          <source type="image/jpg" srcset="/images/service/k-tape.jpg">
          <img class="card-img-top" src="/images/service/k-tape.jpg"
               alt="Card image cap">
        </picture>
        <div class="card-body">
          <h4 class="card-title">{{ $t('k_tape') }}</h4>
          <p class="card-text">{{ $t('k_tape_info') }}</p>
        </div>
      </div>
      <div class="col-xl-2 col-lg-3 col-md-5 m-md-2 col-sm-5 card p-0 m-lg-3 m-0 mt-4 col-10">
        <picture>
          <source type="image/webp" srcset="/images/service/move.jpg.webp">
          <source type="image/jpeg" srcset="/images/service/move.jpg">
          <img class="card-img-top" src="/images/service/move.jpg" alt="Card image cap">
        </picture>
        <div class="card-body">
          <h4 class="card-title">{{ $t('mobile') }}</h4>
          <p class="card-text">{{ $t('mobile_info') }}</p>
        </div>
      </div>


      <div class="col-xl-2 col-lg-3 col-md-5 m-md-2 col-sm-5 card p-0 m-lg-3 m-0 mt-4 col-10">
        <picture>
          <source type="image/webp" srcset="/images/service/cupping.jpg.webp">
          <source type="image/jpeg" srcset="/images/service/cupping.jpg">
          <img class="card-img-top" src="/images/service/cupping.jpg"
               alt="Card image cap">
        </picture>
        <div class="card-body">
          <h4 class="card-title">{{ $t('cup') }}</h4>
          <p class="card-text">{{ $t('cup_info') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage__services"
}
</script>

<style scoped lang="scss">
.card {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  cursor: pointer;

  &:hover {
    transition-duration: 1s;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  }
}
</style>


<i18n>
{
  "en": {
    "needle": "DRY NEEDLING",
    "needle_info": "Dry needling is an invasive procedure where a fine needle or acupuncture needle is inserted into the skin and muscle. ",
    "k_tape": "K TAPE",
    "k_tape_info": " KT is applied un-stretched over manually stretched skin above the injured muscle. This cause the skin to form convolutions which lift the skin.",
    "cup": "CUPPING/HIJAMA",
    "cup_info": "Cupping is a type of alternative therapy, it involves placing cups on the skin to create suction. The suction may facilitate healing with blood flow.",
    "mobile": "MOBILIZATION",
    "mobile_info": "Manipulation techniques used in order to improve the mobility and function of your soft tissues, joints, muscles, tendons and ligaments.",
    "service": "SERVICES",
    "service_head": "Our Expert Medical Service",
    "service_info": "Getting You Better Is Great, Keeping You That Way Is Better."
  },
  "hi": {
    "needle": "ड्राई नीडलिंग",
    "needle_info": "ड्राई नीडलिंग एक इनवेसिव प्रक्रिया है जिसमें त्वचा और मांसपेशियों में एक महीन सुई या एक्यूपंक्चर की सुई डाली जाती है।",
    "k_tape": "के टेप",
    "k_tape_info": "K T घायल मांसपेशी के ऊपर मैन्युअल रूप से फैली हुई त्वचा पर बिना खींचे लगाया जाता है। इसके कारण त्वचा में कसाव पैदा होता है जो त्वचा को ऊपर उठाता है।",
    "cup": "कपिंग / हिजामा",
    "cup_info": "कपिंग एक प्रकार की वैकल्पिक चिकित्सा है, इसमें सक्शन बनाने के लिए त्वचा पर कप को शामिल करना शामिल है। सक्शन रक्त प्रवाह के साथ चिकित्सा की सुविधा प्रदान कर सकता है।",
    "mobile": "मोबिलिज़ेशन",
    "mobile_info": "मोबिलिज़ेशन मैनीपुलेशन तकनीक का उपयोग आपके कोमल ऊतकों, जोड़ों, मांसपेशियों, tendons और स्नायुबंधन की गतिशीलता और कार्य को बेहतर बनाने के लिए किया जाता है।",
    "service": "सेवाएं",
    "service_head": "हमारी विशेषज्ञ चिकित्सा सेवाएं",
    "service_info": "Getting You Better Is Great, Keeping You That Way Is Better."
  }
}
</i18n>
