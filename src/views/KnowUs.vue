<template>
  <div>
    <dpis-header />
    <template>
      <div class="container pt-3 mx-lg-5">
        <div class="text-justify mt-5 mx-4 py-3 text-light">
          <h1 class="text-center"><u>Who are we?</u></h1>
          <div>
            <h3>Overview</h3>
            <p>Diligent Ploutos Integrated Services is a highly specialized organization that provides Automation, Safety and security solutions to its clientele.  Our success as an organization is stemmed from our ability to deliver to the customers’ expectations consistently.</p>
            <p>Established in 2010 we have gradually grown our portfolio to offer a rich and broad service offering ensuring that our customers derive better value, getting their entire automation, safety and security requirement met under one roof.</p>
            <p>Our people are innovative and focused. Continuously looking out for smarter and more efficient solutions to meeting the customers’ desires.</p><br>
            <h3>Our Specialty</h3>
            <p>Our specialties include but not limited to:
              <ul>
                <li>fire fighting system</li>
                <li>Building Management System</li>
                <li>Integrated Security</li>
                <li>Home Automation</li>
                <li>Guest Room Management</li>
                <li>Internet Configuration</li>
                <li>Access Control Systems</li>
              </ul>
            </p>
            <h5>Click <router-link to="/ContactUs">here</router-link> for more information</h5>
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
  name: 'knowUs',
  components: {
    'dpis-header': dpisHeader,
    'dpis-footer': dpisFooter
  }
}
</script>
