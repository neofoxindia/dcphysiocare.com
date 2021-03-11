<template>
  <div>
    <!-- INTRO -->
    <div id="home" class="intro intro1">
      <div class="overlay"></div>
      <!--      <a href='https://www.freepik.com/photos/people'>People photo created by pressfoto - www.freepik.com</a>-->
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7 p-0 pl-2 text-lg-left text-center">
            <h2 style="font-size: calc(3vw + 3vh + 20px)">
              <small>YOUR</small>
              <span class="text-warning">HEALTH</span> <br>
              <small>YOUR</small>
              <span class="text-warning">PLAN</span> <br>
              <small>YOUR</small>
              <span class="text-warning">JOURNEY</span>
            </h2>
            <p>We help you reach your optimal health and gain the confidence to sustain it.</p>

          </div>
          <br><br>
          <div class="col-lg-5 col-md-10 col-11 mt-lg-0 mt-5">
            <div class="intro-form row" id="join-us-form contact-form">
              <h4 class="col-12"><b>#1</b> Physical Treatment <br> Service Center</h4>

              <div id="join-us-results"></div>
              <!-- Form -->
              <div class="form-group col-lg-12 col-md-6 col-12">
                <input required minlength="4" aria-label="First Name" type="text" class="form-control"
                       placeholder="First Name"/>
              </div>
              <div class="form-group col-lg-12 col-md-6 col-12">
                <input required aria-label="Last Name" type="text" class="form-control" placeholder="Last Name"/>
              </div>
              <div class="form-group col-lg-12 col-md-6 col-12">
                <input aria-label="Email" type="text" name="email" class="form-control" placeholder="Email"/>
              </div>
              <div class="form-group col-lg-12 col-md-6 col-12">
                <input aria-label="phone" type="text" maxlength="15" class="form-control" placeholder="Phone"/>
              </div>
              <button type="submit" class="btn btn-block btn-lg btn-primary" id="submit_btn">Make an Appointment
              </button>
            </div>
            <div id="sendingMessage" class="statusMessage">
              <p><i class="fa fa-spin fa-cog"></i> Sending your message. Please wait...</p>
            </div>

            <div id="successMessage" class="successmessage">
              <p><span class="success-ico"></span> Thanks for sending your message! We'll get back to you shortly.</p>
            </div>
            <div id="failureMessage" class="errormessage">
              <p><span class="error-ico"></span> There was a problem sending your message. Please try again.</p>
            </div>
            <div id="incompleteMessage" class="statusMessage">
              <p><i class="fa fa-warning"></i> Please complete all the fields in the form before sending.</p>
            </div>

          </div>
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
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

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
