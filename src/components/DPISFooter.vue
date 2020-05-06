<template>
  <div class="footerDiv container-fluid bg-secondary text-light mt-lg-5 pt-3 pb-2">
    <div class="row p-2 text-left mb-3">
      <div class="col-12 d-md-flex justify-content-around">
        <div class="col-sm-12 col-md-5 col-lg-3 my-5" >
        <h3 class="">Open Hours</h3>
        <div class="text-left">
          <p><strong>Monday - Thursday</strong>: 8.00 AM - 5.00 PM</p>
        <p><strong>Friday</strong>: 8.00 AM - 4.00 PM</p>
        </div>
      </div>

      <div class="col-sm-12 col-md-5 col-lg-3 d-none d-lg-block py-auto">
        <img src="../../public/images/logo/logo.jpg" alt="Logo" class="footerImg d-block mx-auto">
      </div>

      <div class="col-sm-12 col-md-5 col-lg-3 mt-5">
        <h3 class="">Contact Us</h3>
        <div class="text-left">
          <p><strong>Customer Care: </strong> <router-link to="/tel:+2348165493319">+234-816-549-3319</router-link></p>
          <p><strong>Human Resource: </strong> <router-link to="/mail:info@dpiservices.com">info@dpiservices.com</router-link></p>
          <p><strong>Location: </strong>28, Godfrey William Street, Harmony Road, Port Harcourt, Rivers State.</p>
        </div>
      </div>
      </div>
    </div>
    <hr class="border">
    <div class="text-center">
      <p>
      <span class="mr-2">All Rights Reserved.</span>
      <span class=""><router-link to="/">Privacy Policy</router-link></span>
    </p>
    <p>Powered By <a class="card-link" href="/#home"><b>DPIS</b></a></p>
    <p><b><span>&copy;</span> {{footerYear}}</b></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
    }
  },
  computed: {
    footerYear () {
      let footerYear = new Date().getFullYear()
      return footerYear
    }
  }
}
</script>

<style scoped>
</style>
