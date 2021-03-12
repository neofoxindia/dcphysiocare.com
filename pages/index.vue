<template>
  <div>
    <!-- INTRO -->
    <div id="home" class="intro intro1">
      <div class="overlay"><a href='https://www.freepik.com/photos/people'></a></div>
      <div class="container">
        <div class="row d-flex justify-content-center align-item-center" style="padding: 12vw 0">
          <div class="col-lg-6 p-0 pl-md-3 pl-4">
            <h2 class="align-middle" style="font-size: calc(3vw + 4vh + 10px); margin-top: 4vw">
              <span class="your">{{ $t('your') }}</span><span class="text-info text-shadow">{{ $t('health') }}</span>
              <br>
              <span class="your">{{ $t('your') }}</span><span class="text-info text-shadow">{{ $t('journey') }}</span>
              <br>
              <span class="your"><s class="text-warning"> Y </s>{{ $t('our') }}</span><span
              class="text-danger text-shadow">{{ $t('care') }}</span>
            </h2>
            <p class="font-weight-normal">{{ $t('sub_head') }} </p>
          </div>
          <AppointmentForm class="offset-md-1 col-lg-5 col-md-10 col-11 mt-lg-0 mt-5"></AppointmentForm>
        </div>

      </div>
    </div>

    <!-- Work Done -->
    <div id="stats2" class="bg-primary">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-6">
            <div class="stats2-info">
              <i class="ilmosys-business-manwoman"></i>
              <p><span class="count">5500</span></p>
              <h2>Healthy Clients</h2>
            </div>
          </div>
          <div class="col-md-3 col-6">
            <div class="stats2-info">
              <i class="ilmosys-doctor"></i>
              <p><span class="count">85</span></p>
              <h2>Professional Doctors</h2>
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


    <!-- SERVICES -->
    <section id="services" class="services bg-light">
      <div class="container">

        <div class="about-inline text-center">
          <p>- SERVICES -</p>
          <h3>Our Expert Medical Service </h3>
          <p>Getting You Better Is Great, Keeping You That Way Is Better.</p>
        </div>

        <div class="services-s5 row">
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="service-content">
              <i class="ilmosys-space-needle"></i>
              <h3 class="text-center">DRY NEEDLING</h3>
              <p>Dry needling is an invasive procedure where a fine needle or acupuncture needle is inserted into the
                skin and muscle. </p>
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="service-content">
              <i class="ilmosys-band-aid"></i>
              <h3 class="text-center">K TAPE</h3>
              <p> KT is applied un-stretched over manually stretched skin above the injured muscle. This cause the skin
                to form convolutions which lift the skin.</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="service-content">
              <i class="ilmosys-glass-water"></i>
              <h3 class="text-center">CUPPING/HIJAMA</h3>
              <p>Cupping is a type of alternative therapy, it involves placing cups on the skin to create suction. The
                suction may facilitate healing with blood flow.</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="service-content">
              <i class="ilmosys-running"></i>
              <h3 class="text-center">MOBILIZATION</h3>
              <p>Manipulation techniques used in order to improve the mobility and
                function of your soft tissues, joints, muscles, tendons and ligaments.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!--  About US  -->
    <div id="features" class="container">
      <div class="about-inline text-center">
        <div class="container">
          <p>- EXPERTS -</p>
          <h3>Check out some of our professional<br> features! </h3>
        </div>
      </div>


      <!-- INFO CONTENT -->
      <div class="info-content">
        <div class="container">
          <div class="row center-content">
            <div class="col-md-8 text-center">
              <img src="images/services/2.jpg" class="pull-right img-responsive" alt="">
            </div>
            <div class="col-md-4">
              <h3>The Perfect Template for Medical. </h3>
              <ul class="list">
                <li><i class="icon-check"></i> Nunc quis justo sed odio scelerisque.</li>
                <li><i class="icon-check"></i> Duis tristique lorem non risus dignissim.</li>
                <li><i class="icon-check"></i>Vivamus accumsan sem sit amet.</li>
                <li><i class="icon-check"></i>Morbi sed orci a tortor bibendum finibus vitae.</li>
                <li><i class="icon-check"></i>Nam sed sem quis nisi faucibus tempor.</li>
              </ul>
              <div class="space30"></div>
              <a href="#" class="btn btn-lg btn-primary">Learn More <i class="icon-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import AppointmentForm from "~/components/AppointmentForm";

export default {
  components: {AppointmentForm},
  name: "index"
}
</script>

<style>
body {
  overflow-x: hidden;
}

.your {
  letter-spacing: -1px;
  font-size: 2rem;
}

.text-shadow {
  text-shadow: rgba(0, 0, 0, 0.24) 0 3px 4px;
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


<!--

     <div class="row">
              <div class="col-md-10">
                <ul class="features-list">
                  <li>
                    <i class="ilmosys-space-needle"></i>
                    <h5>DRY NEEDLING</h5>
                  </li>

                  <li>
                    <i class="ilmosys-x-ray"></i>
                    <h5>Radiology and X-ray facility</h5>
                  </li>

                  <li>
                    <i class="ilmosys-ambulance"></i>
                    <h5>Ambulance Services</h5>
                  </li>

                  <li>
                    <i class="ilmosys-clinic"></i>
                    <h5>Ward/ Indoor facility</h5>
                  </li>
                </ul>
              </div>
            </div>

-->
