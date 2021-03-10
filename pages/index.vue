<template>
  <div>
    <!-- INTRO -->
    <div id="home" class="intro intro1">
      <div class="overlay"></div>
      <div class="container">
        <div class="row center-content">
          <div class="col-sm-10">
            <h2>We made your medical<br>treatment easy</h2>
            <p>Lorem ipsum dolor sit amet consec tetur elit amet voluptas accusamus <br>dolorum veritatis ea odio dolor
              emque.</p>
            <div class="row">
              <div class="col-md-10">
                <ul class="features-list">
                  <li>
                    <i class="ilmosys-microscope"></i>
                    <h5>Laboratory services</h5>
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
          </div>
          <br><br>
          <div class="col-sm-5 col-md-7">
            <div class="intro-form" id="join-us-form contact-form">
              <h4>Sydney's #1 Medical Treatment Service Center.</h4>

              <div id="join-us-results"></div>
              <!-- Form -->
              <div class="form-group">
                <input type="text" name="first_name" id="first_name" class="form-control f-input input-field"
                       placeholder="First Name"/>
              </div>
              <div class="form-group">
                <input type="text" name="last_name" id="last_name" class="form-control f-input input-field"
                       placeholder="Last Name"/>
              </div>
              <div class="form-group">
                <input type="text" name="email" class="form-control f-input input-field" placeholder="Email"/>
              </div>
              <div class="form-group">
                <input type="text" name="phone" maxlength="15" class="form-control f-input input-field"
                       placeholder="Phone"/>
              </div>
              <div class="form-group">
                <input type="text" name="website" class="form-control f-input input-field" placeholder="website"/>
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
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>
