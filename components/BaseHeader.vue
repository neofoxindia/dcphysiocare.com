<template>
  <header>
    <nav class="navbar fixed-top navbar-expand-md navbar-light bg-light">
      <NuxtLink class="navbar-brand font-weight-bold" :to="localePath({name: 'index'})">DC PhysioCare</NuxtLink>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">


        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link font-weight-bold" href="#">{{ $t('home') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link font-weight-bold" href="#">{{ $t('service') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link font-weight-bold" href="#">{{ $t('about') }}</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item form-inline">
            <button v-if="is_english_set" class="nav-link btn btn-sm btn-outline mr-2 px-3" @click="setLanguage('hi')">
              Hindi
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
    is_english_set: true
  }),
  methods: {
    setLanguage(code) {
      this.is_english_set = code === 'en';
      this.$i18n.setLocale(code)
    }
  }
}
</script>

<style>
.navbar {
  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
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
    "service": "सेवाएं",
    "about": "हम"
  }
}
</i18n>
