<template>
  <div>
    <!-- INTRO -->
    <HomePage__Intro></HomePage__Intro>
    <!-- Work Done -->
    <HomePage__works></HomePage__works>
    <!-- SERVICES -->
    <HomePage__services></HomePage__services>
    <!--  About US  -->
    <HomePage__about></HomePage__about>
    <!--  Facilities  -->
    <HomePage__facilities></HomePage__facilities>
  </div>
</template>

<script>
import HomePage__Intro from "~/components/HomePage/HomePage__Intro";
import HomePage__works from "~/components/HomePage/HomePage__works";
import HomePage__services from "~/components/HomePage/HomePage__services";
import HomePage__facilities from "~/components/HomePage/HomePage__facilities";
import HomePage__about from "~/components/HomePage/HomePage__about";

export default {
  components: {
    HomePage__Intro, HomePage__works,
    HomePage__services, HomePage__about,
    HomePage__facilities
  },
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
