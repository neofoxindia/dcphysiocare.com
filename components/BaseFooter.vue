<template>
  <footer class="bg-dark py-5" id="footer">
    <div class="container py-5">
      <div class="row text-white">
        <div class="col-md-3 col-6">
          <h5>RELATED LINKS</h5>
          <ul class="list">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-6">
          <h5>OTHER LINKS</h5>
          <ul class="list">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div class="col-md-6 col-12">
          <h5>About Us</h5>
          <p class="text-white font-weight-bold py-4">Mauris feugiat erat tellus.Far far away, behind the word
            mountains, far from the countries Vokalia and
            Consonantia.</p>
          <h5>Social</h5>
          <div class="footer-social d-flex">
            <a href="#" class="fa fa-facebook text-primary"></a>
            <a href="#" class="fa fa-twitter text-primary"></a>
            <a href="#" class="fa fa-dribbble text-primary"></a>
            <a href="#" class="fa fa-google-plus text-primary"></a>
            <a href="#" class="fa fa-linkedin text-primary"></a>
            <a href="#" class="fa fa-instagram text-primary"></a>
          </div>
        </div>
        <div class="col-12 d-flex">
          <div class="text-white font-weight-bold">
            2021
            <i class="fa fa-copyright text-white"></i>
            DC Physio Care
          </div>
          <div class="ml-auto text-white">
            Made with
            <i class="fa fa-heart text-primary"></i> by
            <a href="https://www.neofox.in"
               class="text-white font-weight-bold">NEOFOX</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "BaseFooter"
}
</script>

<style scoped lang="scss">
.footer-social {
  font-size: 1.5rem;

  a {
    padding: 1rem;
  }
}

p {
  line-height: 1.4;
}

h5 {
  color: #fff;
}

.bg-dark {
  background-color: #111 !important;
}

.list {

  li {
    padding-left: 0;

    a {
      color: #aaa;

      &:hover {
        color: #fefefe;
      }
    }
  }
}
</style>
