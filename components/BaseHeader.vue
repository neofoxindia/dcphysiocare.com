<template>
  <header>
    <nav class="navbar-inverse navbar-lg navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a href="#" class="navbar-brand brand">
            Dr
<!--            <img src="images/logo.png" alt="logo">-->
          </a>
        </div>

        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right navbar-contact">
            <li>
              <a href="#"><span class="icon-call"></span> 1800 789 123</a>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">


            <li class="dropdown mm-menu">
              <a class="page-scroll" href="#home">Home</a>
            </li>

            <li class="dropdown mm-menu">
              <a class="page-scroll" href="#features">Features</a>
            </li>

            <li class="dropdown mm-menu">
              <a class="page-scroll" href="#services">Services</a>
            </li>

            <li class="dropdown mm-menu">
              <a class="page-scroll" href="#reviews">Reviews</a>
            </li>

            <li class="dropdown mm-menu">
              <a class="page-scroll" href="#contact-info">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "BaseHeader"
}
</script>

<style scoped>

</style>
