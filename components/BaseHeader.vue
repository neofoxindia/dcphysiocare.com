<template>
  <header>
    <nav class="navbar fixed-top navbar-expand-md navbar-light bg-light">
      <NuxtLink class="navbar-brand font-weight-bold" :to="localePath({name: 'index'})">
        <picture>
          <source srcset="/images/logo/logo.png.webp" type="image/webp">
          <source srcset="/images/logo/logo.png" type="image/webp">
          <img class="d-inline-block align-top p-0 m-0 logo"
               height="563" width="500" src="/images/logo/logo.png"
               alt="DC Logo">
        </picture>

        <span class="pl-5 ml-5 text-uppercase font-weight-bold">Physio Care</span>
      </NuxtLink>
      <button class="navbar-toggler p-1 " type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item mt-md-0 mt-5">
            <a class="nav-link font-weight-bold"
               :class="{'text-success': scrollPosition < 1000}"
               href="#">{{ $t('home') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link font-weight-bold"
               :class="{'text-success': scrollPosition > 1000 && scrollPosition < 1800}"
               href="#services">{{ $t('service') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link font-weight-bold"
               :class="{'text-success': scrollPosition > 1800 && scrollPosition < 2500}"
               href="#about">{{ $t('about') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link font-weight-bold"
               :class="{'text-success': scrollPosition > 2500 && scrollPosition < 3300}"
               href="#facilities">{{ $t('facilities') }}</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item form-inline">
            <button v-if="is_english_set" class="nav-link btn btn-sm btn-outline mr-2 px-3" @click="setLanguage('hi')">
              हिन्दी
            </button>
            <button v-else class="nav-link btn btn-sm px-3" @click="setLanguage('en')">English</button>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<!--suppress JSUnresolvedFunction -->
<script>
export default {
  name: "BaseHeader",
  data: () => ({
    is_english_set: true,
    scrollPosition: null
  }),
  destroy() {
    window.removeEventListener('scroll', this.updateScroll)
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
    this.is_english_set = this.$i18n.locale === 'en';
  },
  methods: {
    setLanguage(code) {
      this.is_english_set = code === 'en';
      this.$i18n.setLocale(code)
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
      // console.log(this.scrollPosition);
    }
  }
}
</script>

<style scoped>
.navbar {
  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
}

a {
  font-size: 1.2rem;
}

.text-success {
  color: #e10505 !important;
}

.logo {
  top: 0;
  width: 70px;
  height: auto;
  position: absolute;
  margin-top: -10px;
}
</style>

<i18n>
{
  "en": {
    "home": "Home",
    "service": "Services",
    "about": "About"
  },
  "hi": {
    "home": "गृह",
    "service": " सेवाएं ",
    "about": " हम "
  }
}
</i18n>
