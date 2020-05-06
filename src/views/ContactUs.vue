<template>
  <div>
    <dpis-header />
    <template>
      <div class="container pt-3 mx-lg-5">
        <div class="mt-5 mx-4 py-3 text-light">
          <h1 class="text-center"><u>Do you want to get in touch?</u></h1>
          <div class="text-justify">
            <div class="pt-2">
              <h4>Our Location</h4>
              <p>Our office is located at 28, Godfrey William Street, Harmony Road, Port Harcourt, Rivers State.</p>
            </div>
            <div class="pt-2">
              <h4>Customer Care</h4>
              <p>for enquiries, call our customer care agent on: <router-link to="/tel:+2348165493319">+234-816-549-3319</router-link></p>
            </div>
            <div class="pt-2">
              <h4>Human Resource Department</h4>
              <p>You can also send a mail to our Human Resource Department at: <router-link to="/mail:info@dpiservices.com">info@dpiservices.com</router-link></p>
            </div>
          </div>
        </div>
      </div>
    </template>
    <dpis-footer />
  </div>
</template>

<script>
import dpisHeader from '@/components/DPISHeader.vue'
import dpisFooter from '@/components/DPISFooter.vue'

export default {
  name: 'contactUs',
  components: {
    'dpis-header': dpisHeader,
    'dpis-footer': dpisFooter
  }
}
</script>
