<template>
  <div>
    <!-- INTRO -->
    <HomePage__Intro></HomePage__Intro>
    <!-- Work Done -->
    <HomePage__works></HomePage__works>
    <!-- SERVICES -->
    <HomePage__services></HomePage__services>


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
import HomePage__Intro from "~/components/HomePage/HomePage__Intro";
import HomePage__works from "~/components/HomePage/HomePage__works";
import HomePage__services from "~/components/HomePage/HomePage__services";

export default {
  components: {HomePage__Intro, HomePage__works, HomePage__services},
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
