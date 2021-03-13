<template>
  <section>
    <div v-if="bookingPresent" class="card border-0 m-md-5 m-2">
      <div class="card-body bg-transparent">
        <h4> {{ $t('dear') }}, <b>{{ booking.fullName }}</b>
          <br><br>
          {{ $t('msg') }}<b>{{ booking.date }}.</b>
        </h4>
      </div>

      <div class="card-footer bg-transparent">
        <button class="btn btn-warning text-dark">{{ $t('call') }}</button>
        <button @click="cancelAppointment" class="ml-5 btn btn-danger text-dark">{{ $t('cancel') }}</button>
      </div>

    </div>

    <form v-else @submit.prevent @submit="createAppointment" class="intro-form row">
      <h3 class="col-12 p-0 pb-4 text-center"><b>#1</b> {{ $t('no_1') }}</h3>
      <div class="form-group col-lg-12 col-md-6 col-12">
        <input required type="text"
               minlength="4"
               v-model="booking.fullName"
               aria-label="Full Name"
               class="form-control"
               :placeholder="$t('fullname')"/>
      </div>
      <div class="form-group col-lg-12 col-md-6 col-12">
        <date-picker
          class="w-100"
          valueType="MMMM-DD"
          v-model="booking.date"
          format="MMMM-DD"
          :placeholder="$t('date')"></date-picker>
      </div>
      <div class="form-group col-lg-12 col-md-6 col-12">
        <input aria-label="Email"
               type="text" name="email"
               class="form-control"
               v-model="booking.email"
               :placeholder="$t('email')"/>
      </div>
      <div class="form-group col-lg-12 col-md-6 col-12">
        <input aria-label="phone"
               type="text" maxlength="15"
               class="form-control"
               v-model="booking.phone"
               :placeholder="$t('phone')"/>
      </div>
      <button type="submit"
              class="btn btn-block btn-lg btn-primary">{{ $t('book') }}
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

.card {
  background-color: #fffef7;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
}
</style>


<i18n>
{
  "en": {
    "dear": "Dear",
    "call": "call us",
    "cancel": "cancel",
    "no_1": "Physical Treatment",
    "date": "Date",
    "fullname": "Full Name",
    "email": "Email",
    "phone": "Phone",
    "msg": "Your have booking on",
    "book": "Make an Appointment"
  },
  "hi": {
    "dear": "प्रिय",
    "call": "कॉल करें",
    "cancel": "रद्द करें",
    "no_1": "शारीरिक उपचार",
    "date": "तारीख",
    "fullname": "पूरा नाम",
    "email": "ईमेल",
    "phone": "फ़ोन",
    "msg": "आपकी बुकिंग है",
    "book": "नियुक्ति करें"
  }
}
</i18n>
