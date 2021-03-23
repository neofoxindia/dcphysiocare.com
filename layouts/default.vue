<style lang="scss">

@font-face {
  font-family: 'FontAwesome';
  src: url('/fonts/fontawesome-webfont3295.eot?v=4.5.0');
  src: url('/fonts/fontawesome-webfontd41d.eot?#iefix&v=4.5.0') format('embedded-opentype'), url('/fonts/fontawesome-webfont3295.woff2?v=4.5.0') format('woff2'), url('/fonts/fontawesome-webfont3295.woff?v=4.5.0') format('woff'), url('/fonts/fontawesome-webfont3295.ttf?v=4.5.0') format('truetype'), url('/fonts/fontawesome-webfont3295.svg?v=4.5.0#fontawesomeregular') format('svg');
  font-weight: normal;
  font-style: normal;
}


body {
  background: #fefefe;
  font-family: 'Noto Sans JP', sans-serif !important;
  color: #555;
  font-weight: 300;
  font-size: 15px;
  letter-spacing: 1px;
}

h1 {
  font-weight: 800;
}

h2 {
  font-weight: bold;
  color: #333;
}

h1, h2, h3 {
  color: #14213d;
  font-family: 'Poppins', sans-serif !important;

}


h4, h5, h6 {
  color: #000000;
  font-weight: 500;
  font-family: 'Poppins', sans-serif !important;
  //font-family: 'Raleway', sans-serif !important;
  margin: 0;
}

p {
  font-family: 'Raleway', sans-serif !important;
  font-size: 1.05rem;
  color: #555;
  line-height: 20px;
  font-weight: 500;
}

b, strong {
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
}

a {
  color: #000000;
}

a:hover {
  color: var(--primary);
}

a, a:hover, a:focus, button, button:hover {
  outline: 0;
  text-decoration: none;
  transition: .4s;
}

ul, ol, li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.intro-form {
  padding: 4vmin 3.5vmin;
  border-radius: 15px;
  background: #fff;
  webkit-box-shadow: 0 40px 80px -40px rgba(0, 0, 0, 1) !important;
  -moz-box-shadow: 0 40px 80px -40px rgba(0, 0, 0, 1) !important;
  box-shadow: 0 40px 80px -40px rgba(0, 0, 0, 1) !important;
}

.intro-form h4 {
  color: #000000;
  font-size: 25px;
  margin: 5px 0 20px;
  text-align: center;
  font-weight: 700;
}

.intro-form input {
  display: block;
  width: 100%;
  -webkit-appearance: none;
  font-size: 17px;
  padding: 0 25px;
  height: 48px;
  line-height: 48px;
  color: #222;
  background: transparent;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  margin: 0 0 18px;
}

.intro-box {
  margin-top: 30px;
}

.intro-box span {
  float: left;
  width: 50px;
  color: #fff;
  font-size: 50px;
}

.intro-box i {
  position: absolute;
  left: 23px;
  line-height: 70px;
  top: 0;
}

.btn-primary {
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  padding: 5px 14px;
}

.list {
  li {
    margin: 12px 0;
    padding-left: 30px;
    position: relative;
    font-size: 1.1rem;

    i {
      left: 0;
      position: absolute;
      top: 4px;
      font-size: 20px;
      color: #f3688d;
    }
  }
}

</style>


<template>
  <main class="body">
    <BaseHeader></BaseHeader>
    <Nuxt/>
    <BaseFooter></BaseFooter>
  </main>
</template>


<script>
import BaseHeader from "~/components/BaseHeader";
import BaseFooter from "~/components/BaseFooter";

export default {
  components: {
    BaseHeader, BaseFooter
  }
}
</script>

