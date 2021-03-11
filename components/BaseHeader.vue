<template>
  <header>
    <nav class="navbar fixed-top navbar-expand-md navbar-light bg-light">
      <NuxtLink class="navbar-brand font-weight-bold" :to="{name: 'index'}">DC PhysioCare</NuxtLink>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link font-weight-bold" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item ml-5">
            <a class="nav-link text-danger font-weight-bold" href="#">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "BaseHeader"
}
</script>

<style>
.navbar {
  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
}

</style>
