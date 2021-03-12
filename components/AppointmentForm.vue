<template>
  <section>
    <div v-if="bookingPresent" class="card border-0 m-md-5 m-2">
      <div class="card-body bg-transparent">
        <h4> Dear, <b>{{ booking.fullName }}</b>
          <br><br>
          Your have booking <br> on <b>{{ booking.date }}.</b>
        </h4>
      </div>

      <div class="card-footer bg-transparent">
        <button class="btn btn-warning text-dark">call us</button>
        <button @click="cancelAppointment" class="ml-5 btn btn-danger text-dark">cancel</button>
      </div>

    </div>

    <form v-else @submit.prevent @submit="createAppointment" class="intro-form row">
      <h3 class="col-12 p-0 pb-4 text-center"><b>#1</b> Physical Treatment</h3>
      <div class="form-group col-lg-12 col-md-6 col-12">
        <input required type="text"
               minlength="4"
               v-model="booking.fullName"
               aria-label="Full Name"
               class="form-control"
               placeholder="Full Name"/>
      </div>
      <div class="form-group col-lg-12 col-md-6 col-12">
        <date-picker
          class="w-100"
          valueType="MMMM-DD"
          v-model="booking.date"
          format="MMMM-DD"
          placeholder="Date"></date-picker>
      </div>
      <div class="form-group col-lg-12 col-md-6 col-12">
        <input aria-label="Email"
               type="text" name="email"
               class="form-control"
               v-model="booking.email"
               placeholder="Email"/>
      </div>
      <div class="form-group col-lg-12 col-md-6 col-12">
        <input aria-label="phone"
               type="text" maxlength="15"
               class="form-control"
               v-model="booking.phone"
               placeholder="Phone"/>
      </div>
      <button type="submit"
              class="btn btn-block btn-lg btn-primary">Make an Appointment
      </button>
    </form>

  </section>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  name: "AppointmentForm",
  components: {DatePicker},
  data: () => ({
    bookingPresent: true,
    booking: {
      date: '',
      fullName: '',
      email: '',
      phone: '',
    }
  }),

  created() {
    let booking = localStorage.getItem('booking') || false;
    if (booking !== false) this.booking = JSON.parse(booking);
    else this.bookingPresent = false;
  },


  methods: {
    createAppointment() {
      localStorage.setItem('booking', JSON.stringify(this.booking));
      this.bookingPresent = true;

    },
    cancelAppointment() {
      localStorage.clear();
      this.bookingPresent = false;
    },
  }
}
</script>

<style scoped lang="scss">

.puff-out-center {
  animation: puff-out-center 1s cubic-bezier(.165, .84, .44, 1.000) both
}

@keyframes puff-out-center {
  0% {
    transform: scale(1);
    filter: blur(0);
    opacity: 1
  }
  100% {
    transform: scale(1.5);
    filter: blur(4px);
    opacity: 0
  }
}

.card {
  background-color: #eee5dc;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
